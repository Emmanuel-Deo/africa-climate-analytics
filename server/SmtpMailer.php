<?php
// Minimal, dependency-free SMTP client (AUTH LOGIN, STARTTLS or implicit TLS).
// No Composer/vendor folder needed — just upload this file alongside send-email.php.

class SmtpMailer
{
    private $host;
    private $port;
    private $username;
    private $password;
    private $encryption; // 'tls' (STARTTLS, typically port 587) or 'ssl' (implicit TLS, typically port 465)
    private $timeout = 15;

    public $lastError = '';

    public function __construct($host, $port, $username, $password, $encryption = 'tls')
    {
        $this->host = $host;
        $this->port = $port;
        $this->username = $username;
        $this->password = $password;
        $this->encryption = $encryption;
    }

    public function send($fromEmail, $fromName, $toEmail, $subject, $body, $replyTo = null)
    {
        $transport = ($this->encryption === 'ssl' ? 'ssl://' : 'tcp://') . $this->host . ':' . $this->port;
        $socket = @stream_socket_client($transport, $errno, $errstr, $this->timeout);

        if (!$socket) {
            $this->lastError = "Could not connect to SMTP host: $errstr ($errno)";
            return false;
        }
        stream_set_timeout($socket, $this->timeout);

        if (!$this->expect($socket, 220)) { fclose($socket); return false; }
        if (!$this->command($socket, 'EHLO ' . $this->heloHost(), 250)) { fclose($socket); return false; }

        if ($this->encryption === 'tls') {
            if (!$this->command($socket, 'STARTTLS', 220)) { fclose($socket); return false; }
            if (!@stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
                $this->lastError = 'TLS negotiation with the SMTP server failed.';
                fclose($socket);
                return false;
            }
            if (!$this->command($socket, 'EHLO ' . $this->heloHost(), 250)) { fclose($socket); return false; }
        }

        if (!$this->command($socket, 'AUTH LOGIN', 334)) { fclose($socket); return false; }
        if (!$this->command($socket, base64_encode($this->username), 334)) { fclose($socket); return false; }
        if (!$this->command($socket, base64_encode($this->password), 235)) { fclose($socket); return false; }

        if (!$this->command($socket, "MAIL FROM:<{$fromEmail}>", 250)) { fclose($socket); return false; }
        if (!$this->command($socket, "RCPT TO:<{$toEmail}>", 250)) { fclose($socket); return false; }
        if (!$this->command($socket, 'DATA', 354)) { fclose($socket); return false; }

        $headerLines = [];
        $headerLines[] = 'From: ' . ($fromName !== '' ? $this->encodeHeader($fromName) . " <$fromEmail>" : $fromEmail);
        $headerLines[] = "To: <$toEmail>";
        if ($replyTo) {
            $headerLines[] = "Reply-To: <$replyTo>";
        }
        $headerLines[] = 'Subject: ' . $this->encodeHeader($subject);
        $headerLines[] = 'MIME-Version: 1.0';
        $headerLines[] = 'Content-Type: text/plain; charset=UTF-8';
        $headerLines[] = 'Date: ' . date('r');
        $headerLines[] = 'Message-ID: <' . uniqid('', true) . '@' . $this->domainFromEmail($fromEmail) . '>';

        // Dot-stuffing: a line starting with '.' must be escaped per RFC 5321.
        $escapedBody = preg_replace('/^\./m', '..', $body);

        $payload = implode("\r\n", $headerLines) . "\r\n\r\n" . $escapedBody . "\r\n.";
        if (!$this->command($socket, $payload, 250)) { fclose($socket); return false; }

        $this->command($socket, 'QUIT', 221); // best effort, ignore failure
        fclose($socket);
        return true;
    }

    private function heloHost()
    {
        return $_SERVER['SERVER_NAME'] ?? 'localhost';
    }

    private function domainFromEmail($email)
    {
        $parts = explode('@', $email);
        return $parts[1] ?? 'localhost';
    }

    private function encodeHeader($text)
    {
        return '=?UTF-8?B?' . base64_encode($text) . '?=';
    }

    private function command($socket, $cmd, $expectedCode)
    {
        fwrite($socket, $cmd . "\r\n");
        return $this->expect($socket, $expectedCode);
    }

    private function expect($socket, $expectedCode)
    {
        $response = $this->readResponse($socket);
        $code = (int) substr($response, 0, 3);
        if ($code !== $expectedCode) {
            $this->lastError = "Unexpected SMTP response (expected $expectedCode): " . trim($response);
            return false;
        }
        return true;
    }

    private function readResponse($socket)
    {
        $data = '';
        while (($line = fgets($socket, 515)) !== false) {
            $data .= $line;
            // The final line of a (possibly multi-line) response has a space after the code, not a dash.
            if (preg_match('/^\d{3} /', $line)) {
                break;
            }
        }
        return $data;
    }
}

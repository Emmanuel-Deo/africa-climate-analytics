<?php
// send-email.php
// Deploy this file AND SmtpMailer.php together to your cPanel hosting
// (e.g. public_html/send-email.php) and point VITE_CONTACT_API_URL at it.
// See server/README.md for setup notes.

require_once __DIR__ . '/SmtpMailer.php';

// This host has PHP's mail() function disabled, so we send via authenticated
// SMTP instead, using a real mailbox on the domain. Find these values in
// cPanel under Email Accounts > Connect Devices for the account you create.
define('SMTP_HOST', 'mail.africaclimateanalytics.org');
define('SMTP_PORT', 465); // 587 = STARTTLS, 465 = implicit SSL (set SMTP_ENCRYPTION to match)
define('SMTP_ENCRYPTION', 'ssl'); // 'tls' for port 587, 'ssl' for port 465
define('SMTP_USERNAME', 'info@africaclimateanalytics.org'); // full mailbox address
define('SMTP_PASSWORD', '1WillN3v3r4G3t'); // that mailbox's password

// Always answer with valid JSON, even if something below fatally errors
// — otherwise the browser gets a 500 with an empty body and the frontend
// can't show a useful message.
register_shutdown_function(function () {
    $error = error_get_last();
    if ($error && in_array($error['type'], [E_ERROR, E_PARSE, E_CORE_ERROR, E_COMPILE_ERROR], true)) {
        error_log("send-email.php fatal error: " . $error['message'] . " in " . $error['file'] . ":" . $error['line']);
        if (!headers_sent()) {
            http_response_code(500);
            header("Content-Type: application/json");
        }
        echo json_encode(["status" => "error", "message" => "Server error while sending your message. Please try again later."]);
    }
});

// 1. Allow the React app to call this script.
//    Replace '*' with your deployed frontend origin for tighter security, e.g.
//    header("Access-Control-Allow-Origin: https://africaclimateanalytics.org");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

// Preflight requests from the browser.
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
    exit;
}

$inputData = file_get_contents("php://input");
$data = json_decode($inputData, true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Invalid request body."]);
    exit;
}

function clean($value) {
    return filter_var(trim((string) $value), FILTER_SANITIZE_SPECIAL_CHARS);
}

$represent = clean($data['represent'] ?? '');
$interests = is_array($data['interests'] ?? null)
    ? array_map('clean', $data['interests'])
    : [];
$organisation = clean($data['organisation'] ?? '');
$name = clean($data['name'] ?? '');
$email = filter_var(trim($data['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$phone = clean($data['phone'] ?? '');
$message = clean($data['message'] ?? '');

if (empty($represent) || empty($organisation) || empty($name) || !$email || empty($message)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Please fill all required fields correctly."]);
    exit;
}

// Change this to the inbox that should receive partnership enquiries.
$to = "info@africaclimateanalytics.org";
$subject = "New partnership enquiry from " . $name;

$body = "Represents: $represent\n";
$body .= "Organisation: $organisation\n";
$body .= "Interested in: " . (empty($interests) ? "-" : implode(", ", $interests)) . "\n\n";
$body .= "Name: $name\n";
$body .= "Email: $email\n";
$body .= "Phone: " . (empty($phone) ? "-" : $phone) . "\n\n";
$body .= "Message:\n$message\n";

$mailer = new SmtpMailer(SMTP_HOST, SMTP_PORT, SMTP_USERNAME, SMTP_PASSWORD, SMTP_ENCRYPTION);

if ($mailer->send(SMTP_USERNAME, 'ACA Website', $to, $subject, $body, $email)) {
    http_response_code(200);
    echo json_encode(["status" => "success", "message" => "Message sent successfully!"]);
} else {
    error_log("send-email.php: SMTP send failed. " . $mailer->lastError);
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Server failed to send email."]);
}

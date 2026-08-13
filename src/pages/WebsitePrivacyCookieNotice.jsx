import PageHero from '../components/PageHero'
import './PolicyPage.css'

function WebsitePrivacyCookieNotice() {
  return (
    <>
      <PageHero
        label="POLICIES & SAFEGUARDS"
        title="Website Privacy & Cookie Notice"
        description="How Africa Climate Analytics collects, uses and protects information gathered through this website."
      />

      <div className="policy-page">
        <section className="policy-section">
          <h2>Information we collect</h2>
          <p className="policy-text">
            When you use this website, we may collect information you provide
            directly — such as your name, organisation, email address, phone number
            and message when you submit our contact form — as well as limited
            technical information collected automatically, such as your browser
            type, device type and pages visited, gathered through cookies and
            similar technologies.
          </p>
        </section>

        <section className="policy-section policy-section-alt">
          <h2>How we use your information</h2>
          <p className="policy-text">
            We use the information you provide to respond to enquiries, assess
            potential partnerships or engagements, and manage our relationship with
            you. We use technical website information to keep the site secure,
            understand how it is used, and improve its performance and content. We
            do not sell your personal information.
          </p>
        </section>

        <section className="policy-section">
          <h2>Cookies</h2>
          <p className="policy-text">
            We use essential cookies to make this website work. With your consent,
            we may also use analytics and other non-essential cookies to understand
            how the site is used and improve its performance. You can accept all
            cookies, reject non-essential cookies, or manage your preferences at any
            time using the cookie preferences link in the website footer. We do not
            load analytics, marketing or other non-essential tracking until you give
            consent.
          </p>
        </section>

        <section className="policy-section policy-section-alt">
          <h2>Sharing of information</h2>
          <p className="policy-text">
            We do not share your personal information with third parties except
            where necessary to operate this website (for example, hosting and email
            delivery providers acting on our behalf), where required by law, or with
            your consent.
          </p>
        </section>

        <section className="policy-section">
          <h2>Your rights</h2>
          <p className="policy-text">
            You may ask us to access, correct or delete the personal information we
            hold about you, or to explain how it is used, by writing to us at{' '}
            <a href="mailto:privacy@africaclimateanalytics.org">privacy@africaclimateanalytics.org</a>.
            We will respond to reasonable requests within a reasonable time.
          </p>
        </section>

        <section className="policy-section policy-section-alt">
          <h2>Data security</h2>
          <p className="policy-text">
            We use reasonable technical and organisational measures — including
            HTTPS encryption, access controls and restricted routing of form
            submissions to authorised ACA recipients — to protect the information we
            hold.
          </p>
        </section>

        <section className="policy-section">
          <h2>Changes to this notice</h2>
          <p className="policy-text">
            We may update this notice from time to time to reflect changes in our
            practices or legal requirements. The date below shows when it was last
            updated.
          </p>
        </section>

        <section className="policy-section policy-section-alt">
          <h2>Contact us</h2>
          <p className="policy-text">
            For any questions about this notice or how we handle your data, contact
            us at <a href="mailto:privacy@africaclimateanalytics.org">privacy@africaclimateanalytics.org</a>.
          </p>
        </section>

        <p className="policy-updated">Last updated: August 2026</p>
      </div>
    </>
  )
}

export default WebsitePrivacyCookieNotice

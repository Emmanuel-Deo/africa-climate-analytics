import PageHero from '../components/PageHero'
import './PolicyPage.css'

function TermsOfUse() {
  return (
    <>
      <PageHero
        label="POLICIES & SAFEGUARDS"
        title="Terms of Use"
        description="The terms that govern your use of this website."
      />

      <div className="policy-page">
        <section className="policy-section">
          <h2>Acceptance of terms</h2>
          <p className="policy-text">
            By accessing and using this website, you agree to these Terms of Use. If
            you do not agree with these terms, please do not use this website.
          </p>
        </section>

        <section className="policy-section policy-section-alt">
          <h2>Use of content</h2>
          <p className="policy-text">
            The content on this website — including text, research summaries, case
            studies and graphics — is provided for general informational purposes
            about Africa Climate Analytics (ACA) and its work. You may view and
            share this content for non-commercial purposes with appropriate
            attribution to ACA. Reproduction of substantial portions of our
            published research or reports requires our prior written permission.
          </p>
        </section>

        <section className="policy-section">
          <h2>No professional advice</h2>
          <p className="policy-text">
            Information on this website is provided for general reference and does
            not constitute technical, financial, legal or policy advice for any
            specific situation. Please contact us directly to discuss your context
            before relying on any content for a decision.
          </p>
        </section>

        <section className="policy-section policy-section-alt">
          <h2>Accuracy of information</h2>
          <p className="policy-text">
            We take reasonable care to keep the information on this website accurate
            and up to date, but we make no warranties about its completeness,
            reliability or accuracy for any particular purpose, and it may change
            without notice.
          </p>
        </section>

        <section className="policy-section">
          <h2>External links</h2>
          <p className="policy-text">
            This website may link to third-party websites. We are not responsible
            for the content or practices of external sites and linking to them does
            not imply endorsement.
          </p>
        </section>

        <section className="policy-section policy-section-alt">
          <h2>Changes to these terms</h2>
          <p className="policy-text">
            We may update these Terms of Use from time to time. The date below shows
            when they were last updated.
          </p>
        </section>

        <section className="policy-section">
          <h2>Contact us</h2>
          <p className="policy-text">
            For questions about these terms, contact us at{' '}
            <a href="mailto:partnerships@africaclimateanalytics.org">partnerships@africaclimateanalytics.org</a>.
          </p>
        </section>

        <p className="policy-updated">Last updated: August 2026</p>
      </div>
    </>
  )
}

export default TermsOfUse

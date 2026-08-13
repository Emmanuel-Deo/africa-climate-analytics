import PageHero from '../components/PageHero'
import './PolicyPage.css'

function AccessibilityStatement() {
  return (
    <>
      <PageHero
        label="POLICIES & SAFEGUARDS"
        title="Accessibility Statement"
        description="Our commitment to making this website usable by as many people as possible."
      />

      <div className="policy-page">
        <section className="policy-section">
          <h2>Our commitment</h2>
          <p className="policy-text">
            Africa Climate Analytics is committed to ensuring this website is
            accessible to everyone, including people with disabilities. We target
            conformance with the Web Content Accessibility Guidelines (WCAG) 2.1
            Level AA as our minimum standard.
          </p>
        </section>

        <section className="policy-section policy-section-alt">
          <h2>What we do</h2>
          <ul className="policy-list">
            <li>Use semantic HTML and a logical heading order on every page.</li>
            <li>Ensure navigation, menus, forms and interactive controls are keyboard accessible.</li>
            <li>Provide visible focus indicators and sufficient colour contrast.</li>
            <li>Use descriptive alternative text for meaningful images.</li>
            <li>Use clear labels and error messages on form fields.</li>
            <li>Use descriptive link and button text instead of generic phrases such as "click here".</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Known limitations</h2>
          <p className="policy-text">
            We are continuously working to improve accessibility across the site. If
            you encounter any content or functionality that is not accessible to
            you, please let us know so we can address it.
          </p>
        </section>

        <section className="policy-section policy-section-alt">
          <h2>Feedback</h2>
          <p className="policy-text">
            We welcome feedback on the accessibility of this website. Please contact
            us at{' '}
            <a href="mailto:privacy@africaclimateanalytics.org">privacy@africaclimateanalytics.org</a>{' '}
            if you have difficulty accessing any part of this site or wish to report
            an accessibility issue.
          </p>
        </section>

        <p className="policy-updated">Last updated: August 2026</p>
      </div>
    </>
  )
}

export default AccessibilityStatement

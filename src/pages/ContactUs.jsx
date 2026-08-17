import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import './ContactUs.css'

const representOptions = [
  "Government / regional economic community",
  "NGO / civil-society organisation",
  "Foundation",
  "Bilateral or multilateral organisation",
  "Financial institution / private-sector actor",
  "Other"
]

const interestOptions = [
  "Institutional / core support",
  "Programme or technical facility",
  "Evidence and learning platform",
  "Climate data and decision tools",
  "Consulting / embedded advisory",
  "Other"
]

const audienceToRepresent = {
  government: "Government / regional economic community",
  "civil-society": "NGO / civil-society organisation",
  finance: "Financial institution / private-sector actor"
}

const interestToCheckbox = {
  "rapid-diagnostic": "Consulting / embedded advisory",
  "flagship-initiative": "Programme or technical facility",
  assignment: "Consulting / embedded advisory",
  consulting: "Consulting / embedded advisory",
  "institutional-core-support": "Institutional / core support",
  "technical-facility": "Programme or technical facility",
  "evidence-learning": "Evidence and learning platform",
  "climate-data-tools": "Climate data and decision tools"
}

function ContactUs() {
  const [searchParams] = useSearchParams()
  const preselectedRepresent = audienceToRepresent[searchParams.get('audience')] || ""
  const preselectedInterest = interestToCheckbox[searchParams.get('interest')]

  const [represent, setRepresent] = useState(preselectedRepresent)
  const [interests, setInterests] = useState(preselectedInterest ? [preselectedInterest] : [])
  const [submitted, setSubmitted] = useState(false)

  function toggleInterest(option) {
    setInterests((prev) =>
      prev.includes(option) ? prev.filter((i) => i !== option) : [...prev, option]
    )
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="contact-page">
      <div className="contact-hero">
        <div className="contact-header">
          <span className="contact-label">CONTACT / WORK WITH US</span>
          <h1>Partner with us to strengthen climate intelligence for Africa</h1>
          <p>
            We work with African public institutions, regional bodies, non-profits,
            civil-society organisations, financial institutions and funders to design
            and deliver climate-resilient, just and low-emission development pathways.
            Share a brief description of your priorities and how you would like to
            work with ACA, and we will follow up to explore tailored partnership options.
          </p>
        </div>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-card">
            <h3>Location</h3>
            <p>Africa Climate Analytics</p>
            <p>Nairobi, Kenya</p>
          </div>

          <div className="info-card">
            <h3>Email</h3>
            <p>info@africaclimateanalytics.org</p>
          </div>

          <div className="info-card">
            <h3>Response time</h3>
            <p>We aim to respond to all serious partnership and service enquiries within 5–10 working days.</p>
          </div>
        </div>

        <div className="contact-form-section">
          <h2>Send us a message</h2>

          {submitted ? (
            <div className="form-confirmation">
              <h3>Thank you for contacting Africa Climate Analytics.</h3>
              <p>
                We've received your enquiry and will respond within 5–10 working days.
                Please do not send highly sensitive personal information by email
                unless ACA has provided a secure method.
              </p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="represent">I represent</label>
                <select
                  id="represent"
                  required
                  value={represent}
                  onChange={(e) => setRepresent(e.target.value)}
                >
                  <option value="" disabled>Select an option</option>
                  {representOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>I am interested in</label>
                <div className="checkbox-group">
                  {interestOptions.map((opt) => (
                    <label key={opt} className="checkbox-option">
                      <input
                        type="checkbox"
                        checked={interests.includes(opt)}
                        onChange={() => toggleInterest(opt)}
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="org">Organisation name</label>
                <input id="org" type="text" required placeholder="Enter organisation name" />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full name</label>
                  <input id="name" type="text" required placeholder="Enter your full name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" required placeholder="Enter your email" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone number (optional)</label>
                <input id="phone" type="tel" placeholder="Enter your phone number" />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" required placeholder="How can we help you?" rows="5"></textarea>
              </div>

              <p className="form-privacy-notice">
                By submitting this form, you agree that ACA may use the information
                you provide to respond to your enquiry and manage potential
                collaboration. We will handle your information in accordance with our{' '}
                <a href="/website-privacy-cookie-notice">Website Privacy &amp; Cookie Notice</a>.
              </p>

              <button type="submit" className="submit-btn">Send partnership enquiry</button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default ContactUs

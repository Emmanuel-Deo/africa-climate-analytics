import './ContactUs.css'

function ContactUs() {
  return (
    <section className="contact-page">
      <div className="contact-hero">
        <div className="contact-header">
          <span className="contact-label">CONTACT</span>
          <h1>Get in touch</h1>
          <p>Interested in working with us? We'd love to hear from you.</p>
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
            <h3>Focus Areas</h3>
            <p>Continental & regional assignments</p>
            <p>Multi-country work across Africa</p>
          </div>
        </div>

        <div className="contact-form-section">
          <h2>Send us a message</h2>
          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>First name</label>
                <input type="text" placeholder="Enter first name" />
              </div>
              <div className="form-group">
                <label>Last name</label>
                <input type="text" placeholder="Enter last name" />
              </div>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label>Organization</label>
              <input type="text" placeholder="Enter organization name" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="How can we help you?" rows="5"></textarea>
            </div>
            <button type="submit" className="submit-btn">Send message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
import './ToolsTech.css'
import { Cloud, BarChart3, Image, Sparkles } from 'lucide-react'

const dataSources = [
  "Climate and environmental data: Historical observations, gridded datasets, climate projections, remote sensing and hazard information",
  "Socio-economic and governance data: Official statistics, survey data, programme datasets and governance indicators",
  "Policy, programme and financing data: AU/REC policies, programme portfolios and climate finance data"
]

const analytics = [
  "Descriptive and comparative analysis: Evidence mapping, synthesis and cross-regional comparisons",
  "Risk, vulnerability and scenario analysis: Hotspot identification, risk profiles and plausible futures",
  "Decision-support tools: Scorecards, screening tools and risk heatmaps"
]

const innovation = [
  "Digital and AI-enabled tools under human oversight",
  "User-friendly digital products for existing workflows",
  "Strict safeguards: data protection, do-no-harm, bias awareness"
]

function ToolsTech() {
  return (
    <section className="tools-tech">
      <div className="tt-header">
        <div className="tt-label">
          <span className="tt-line"></span> TOOLS, DATA & TECHNOLOGY
        </div>
        <h2 className="tt-title">Pragmatic, client-oriented technology</h2>
        <p className="tt-subtitle">
          We prioritize accessibility, transparency and long-term usability by African institutions.
        </p>
      </div>

      <div className="tt-grid">
        <div className="tt-card">
          <div className="tt-icon blue">
            <Cloud size={28} />
          </div>
          <h3>Data Sources & Management</h3>
          <p>We bring together climate, environmental, socio-economic and governance data with clear documentation and reproducible workflows.</p>
          <ul>
            {dataSources.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="tt-card">
          <div className="tt-icon orange">
            <BarChart3 size={28} />
          </div>
          <h3>Analytics & Modelling</h3>
          <p>We favor explainable, transparent and proportionate methods tailored to the decisions at hand.</p>
          <ul>
            {analytics.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="tt-card">
          <div className="tt-icon green">
            <Image size={28} />
          </div>
          <h3>Visualization & Communication</h3>
          <p>We develop tailored dashboards, maps and visual summaries for policymakers and technical teams.</p>
          <ul>
            <li>Dashboards and maps for institutional workflows</li>
            <li>Narratives, briefings and policy-focused visuals</li>
            <li>Accessible insight products for multiple audiences</li>
          </ul>
        </div>

        <div className="tt-card">
          <div className="tt-icon navy">
            <Sparkles size={28} />
          </div>
          <h3>Innovation & AI</h3>
          <p>Where they add clear value and meet ethical standards, we use digital and AI-enabled tools responsibly.</p>
          <ul>
            {innovation.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ToolsTech
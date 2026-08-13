import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import './AssignmentsImpact.css'
import PageHero from '../components/PageHero'
import ImpactGlance from '../components/ImpactGlance'
import ProjectCard from '../components/ProjectCard'
import PageCTA from '../components/PageCTA'
import projects from '../data/projects'

const themeFilters = [
  { value: "all", label: "All themes" },
  { value: "climate-mobility", label: "Climate mobility" },
  { value: "adaptation-locally-led", label: "Adaptation & locally led adaptation" },
  { value: "climate-finance-investment", label: "Climate finance & investment" },
  { value: "mel-learning", label: "MEL & learning" }
]

const regionFilters = [
  { value: "all", label: "All regions" },
  { value: "continental", label: "Continental" },
  { value: "coastal-urban-hotspots", label: "Coastal & urban hotspots" },
  { value: "sahel", label: "Sahel" },
  { value: "horn-of-africa", label: "Horn of Africa" },
  { value: "transboundary-basins", label: "Transboundary basins" }
]

function AssignmentsImpact() {
  const [theme, setTheme] = useState("all")
  const [region, setRegion] = useState("all")

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const themeMatch = theme === "all" || p.themes.includes(theme)
      const regionMatch = region === "all" || p.region === region
      return themeMatch && regionMatch
    })
  }, [theme, region])

  return (
    <section className="assignments-impact">
      <PageHero
        label="ASSIGNMENTS & IMPACT"
        title="Assignments & Impact"
        description="Africa Climate Analytics and its experts have led and contributed to a range of high-level continental and regional assignments that demonstrate our ability to combine rigorous analytics, policy insight and practical design support for African institutions."
        cta={{ label: "Discuss a similar assignment", to: "/contact?interest=assignment" }}
      />

      <ImpactGlance />

      <div className="ai-filters-section">
        <div className="ai-filter-group">
          <span className="ai-filter-label">By theme</span>
          <div className="ai-filter-row">
            {themeFilters.map((f) => (
              <button
                key={f.value}
                className={`ai-filter-btn ${theme === f.value ? 'active' : ''}`}
                onClick={() => setTheme(f.value)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
        <div className="ai-filter-group">
          <span className="ai-filter-label">By region / system</span>
          <div className="ai-filter-row">
            {regionFilters.map((f) => (
              <button
                key={f.value}
                className={`ai-filter-btn ${region === f.value ? 'active' : ''}`}
                onClick={() => setRegion(f.value)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="ai-projects">
        {filtered.length > 0 ? (
          <div className="projects-grid">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className="ai-empty">No assignments match these filters yet. Try a different combination.</p>
        )}
      </section>

      <PageCTA
        title="Ready to work together?"
        description="Contact us to discuss how we can support your climate analytics needs."
        buttons={[
          { label: "Discuss a similar assignment", to: "/contact?interest=assignment" },
          { label: "Explore what we do", to: "/what-we-do" }
        ]}
      />
    </section>
  )
}

export default AssignmentsImpact

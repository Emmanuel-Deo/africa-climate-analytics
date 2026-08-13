import './VisionMission.css'
import { Eye, Target } from 'lucide-react'

function VisionMission() {
  return (
    <section className="vision-mission">
      <div className="vm-container">
        <div className="vm-card vision-card">
          <div className="vm-icon-wrapper blue">
            <Eye size={24} />
          </div>
          <h3 className="vm-title">Our Vision</h3>
          <p className="vm-desc">
            Africa Climate Analytics envisions an Africa where every public policy,
            investment decision and programme — whether led by governments, regional
            bodies or civil society — is informed by robust climate intelligence,
            enabling institutions and communities to thrive in a changing climate.
          </p>
        </div>

        <div className="vm-card mission-card">
          <div className="vm-icon-wrapper orange">
            <Target size={24} />
          </div>
          <h3 className="vm-title">Our Mission</h3>
          <p className="vm-desc">
            Our mission is to equip public institutions, regional bodies, non-profits
            and civil-society organisations, and private-sector actors in Africa with
            decision-grade climate analytics, evidence and advisory support, so they
            can design and implement climate-resilient policies, programmes and
            investments that are grounded in local realities and global best practice.
          </p>
        </div>
      </div>
    </section>
  )
}

export default VisionMission
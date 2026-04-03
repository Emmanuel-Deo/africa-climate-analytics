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
            An Africa where every public policy and investment is informed by robust climate intelligence, enabling communities to thrive.
          </p>
        </div>

        <div className="vm-card mission-card">
          <div className="vm-icon-wrapper orange">
            <Target size={24} />
          </div>
          <h3 className="vm-title">Our Mission</h3>
          <p className="vm-desc">
            To equip public institutions, regional bodies, and civil society with the evidence and advisory support needed to design resilient, just, and low-emission pathways.
          </p>
        </div>
      </div>
    </section>
  )
}

export default VisionMission
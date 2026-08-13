import PageHero from '../components/PageHero'
import PillarsDetailed from '../components/PillarsDetailed'
import SolutionSuites from '../components/SolutionSuites'
import Methodology from '../components/Methodology'
import SelectedAssignments from '../components/SelectedAssignments'
import PageCTA from '../components/PageCTA'

function WhatWeDo() {
  return (
    <>
      <PageHero
        label="WHAT WE DO"
        title="What We Do"
        description="Africa Climate Analytics offers a coherent set of service pillars that together support the full cycle of climate-informed decision-making — from understanding risk, to planning and financing responses, to delivering and learning from results."
        cta={{ label: "Discuss your needs", to: "/contact" }}
      />
      <PillarsDetailed />
      <SolutionSuites />
      <Methodology />
      <SelectedAssignments />
      <PageCTA
        title="Ready to discuss your needs?"
        description="Whether you need a focused study, a flagship initiative or long-term advisory support, we are ready to partner with you."
        buttons={[
          { label: "Discuss your needs", to: "/contact" },
          { label: "View assignments & impact", to: "/assignments-impact" }
        ]}
      />
    </>
  )
}

export default WhatWeDo

import PageHero from '../components/PageHero'
import LeadershipGovernance from '../components/LeadershipGovernance'
import TeamPartnerships from '../components/TeamPartnerships'
import PageCTA from '../components/PageCTA'

function TeamGovernance() {
  return (
    <>
      <PageHero
        label="TEAM & GOVERNANCE"
        title="Team & Governance"
        description="Our leadership, expertise and institutional arrangements — the people and governance structures behind ACA's work."
      />
      <LeadershipGovernance />
      <TeamPartnerships />
      <PageCTA
        title="Want to work with our team?"
        description="Explore our services or get in touch to discuss your climate analytics needs."
        buttons={[
          { label: "Explore what we do", to: "/what-we-do" },
          { label: "Work with ACA", to: "/contact" }
        ]}
      />
    </>
  )
}

export default TeamGovernance

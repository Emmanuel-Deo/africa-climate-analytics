import AboutHero from '../components/AboutHero'
import VisionMission from '../components/VisionMission'
import ValueProposition from '../components/ValueProposition'
import WhyUs from '../components/WhyUs'
import PrinciplesValues from '../components/PrinciplesValues'
import GeographicFocus from '../components/GeographicFocus'
import PageCTA from '../components/PageCTA'

function AboutUs() {
  return (
    <>
      <AboutHero />
      <VisionMission />
      <ValueProposition />
      <WhyUs />
      <PrinciplesValues />
      <GeographicFocus />
      <PageCTA
        title="Get to know Africa Climate Analytics"
        description="Meet our team and governance, explore our approach, or review our data governance and research ethics commitments."
        buttons={[
          { label: "Meet our team", to: "/team-governance" },
          { label: "Explore our approach", to: "/what-we-do#our-approach" },
          { label: "Work with ACA", to: "/contact" }
        ]}
      />
    </>
  )
}

export default AboutUs

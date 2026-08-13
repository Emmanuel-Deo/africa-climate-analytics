import PageHero from '../components/PageHero'
import WhoWeServeBlocks from '../components/WhoWeServeBlocks'
import PageCTA from '../components/PageCTA'

function WhoWeServePage() {
  return (
    <>
      <PageHero
        label="WHO WE SERVE"
        title="Who We Serve"
        description="We work with institutions that shape climate-relevant decisions, investments and programmes across the African continent. We focus on four main client families: African governments and regional bodies; non-profits and civil-society organisations; financial institutions and private-sector actors; and funders and strategic partners."
      />
      <WhoWeServeBlocks />
      <PageCTA
        title="Not sure where to start?"
        description="Tell us about your priorities and we will point you to the right service pillar or solution suite."
        buttons={[
          { label: "Explore what we do", to: "/what-we-do" },
          { label: "Contact ACA", to: "/contact" }
        ]}
      />
    </>
  )
}

export default WhoWeServePage

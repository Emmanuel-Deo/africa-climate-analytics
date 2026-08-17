import PageHero from '../components/PageHero'
import FundingModel from '../components/FundingModel'
import Propositions from '../components/Propositions'
import PartnershipEthosSafeguards from '../components/PartnershipEthosSafeguards'
import PageCTA from '../components/PageCTA'

function FundingPartnerships() {
  return (
    <>
      <PageHero
        label="FUNDING & PARTNERSHIPS"
        title="Funding & Partnerships"
        description="We welcome conversations with funders and partners who share our commitment to climate-resilient, just and low-emission development pathways in Africa. This page is written for bilateral agencies, philanthropic foundations, multilateral and regional climate funds, AU/REC platforms, and mission-aligned consulting clients."
        cta={{ label: "Send partnership enquiry", to: "/contact?interest=partnership" }}
      />
      <FundingModel />
      <Propositions />
      <PartnershipEthosSafeguards />
      <PageCTA
        title="Partner with us to strengthen climate intelligence for Africa"
        description="Share a brief description of your priorities and how you would like to work with ACA, and we will follow up to explore tailored partnership options. Prefer email? Write to us at info@africaclimateanalytics.org."
        buttons={[
          { label: "Send partnership enquiry", to: "/contact?interest=partnership" },
          { label: "Commission high-value consulting", to: "/contact?interest=consulting" }
        ]}
      />
    </>
  )
}

export default FundingPartnerships

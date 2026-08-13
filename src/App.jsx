import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import WhatWeDo from './pages/WhatWeDo'
import WhoWeServe from './pages/WhoWeServe'
import AssignmentsImpact from './pages/AssignmentsImpact'
import ProjectDetail from './pages/ProjectDetail'
import FundingPartnerships from './pages/FundingPartnerships'
import Insights from './pages/Insights'
import TeamGovernance from './pages/TeamGovernance'
import ContactUs from './pages/ContactUs'
import DataGovernance from './pages/DataGovernance'
import WebsitePrivacyCookieNotice from './pages/WebsitePrivacyCookieNotice'
import AccessibilityStatement from './pages/AccessibilityStatement'
import TermsOfUse from './pages/TermsOfUse'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/about/data-governance-research-ethics-safeguards" element={<DataGovernance />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/who-we-serve" element={<WhoWeServe />} />
        <Route path="/assignments-impact" element={<AssignmentsImpact />} />
        <Route path="/assignments-impact/:id" element={<ProjectDetail />} />
        <Route path="/funding-partnerships" element={<FundingPartnerships />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/team-governance" element={<TeamGovernance />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/website-privacy-cookie-notice" element={<WebsitePrivacyCookieNotice />} />
        <Route path="/accessibility" element={<AccessibilityStatement />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

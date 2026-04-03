import Hero from '../components/Hero'
import Pillars from '../components/Pillars'
import Stats from '../components/Stats'
import WhoWeServe from '../components/WhoWeServe'
import WhyUs from '../components/WhyUs'
import CTA from '../components/CTA'

function Home() {
  return (
    <>
      <Hero />
      <Pillars />
      <WhoWeServe />
      <WhyUs />
      <Stats />
      <CTA />
    </>
  )
}

export default Home
import Hero from "../components/home/Hero"
import ContactSec from "../components/contact/ContactSec"
import Portfolio from "../components/home/Portfolio"
import Person from "../components/Person/Person"
import Stats from "../components/home/Stats"
import Pros from "../components/home/Pros"
import Offers from "../components/offershowcase/Offers"
import Testimonials from "../components/testimonials/Testimonials"

function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Person />
      <Offers />
      <Portfolio />
      <Pros />
      <Testimonials />
      <ContactSec />
    </main>
  )
}

export default Home

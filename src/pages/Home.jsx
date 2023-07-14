import Hero from "../components/Hero"
import Pros from "../components/Pros"
import Stats from "../components/Stats"
import SwiperItems from "../components/SwiperItems"
import WhatWeDo from "../components/WhatWeDo"
import ContactSec from "../components/ContactSec"
import Portfolio from "../components/Portfolio"

function Home() {
  return (
    <main>
      <Hero />
      <Stats strony='4' projekty='10+' />
      <WhatWeDo />
      <SwiperItems />
      <Portfolio />
      <Pros />
      <ContactSec />
    </main>
  )
}

export default Home

import React from 'react'
import Hero from '../components/offersComponents/Hero'
import Portfolio from '../components/home/Portfolio'
import Person from '../components/Person/Person'

import about from '../assets/webp/about.webp'

import Map from '../components/contact/Map'
import Stats from '../components/home/Stats'

function About() {
  return (
    <main className='flex flex-col justify-center items-center w-full'>
      <Hero 
        name='Co powinieneś o nas wiedzieć?'
        textHero='Jesteśmy jednoosobową agencją specjalizującą się w projektowaniu stron internetowych, logotypów i grafik komputerowych, takich jak banery i wizytówki, oraz wielu innych materiałów reklamowych. Nasza siedziba znajduje się w Katowicach, a jesteśmy gotowi na nowe wyzwania i chętni do wsparcia innych w osiągnięciu ich celów.'
        img={about}
      />

      <Stats/>

    <Person />

      <Map />

      <Portfolio />

    </main>
  )
}

export default About

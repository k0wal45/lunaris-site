import Hero from '../components/offersComponents/Hero'
import ContactSec from '../components/contact/ContactSec'

import meeting from '../assets/webp/meeting.webp'
import Map from '../components/contact/Map'
import Stats from '../components/home/Stats'
import Pros from '../components/home/Pros'


function Contact() {
  return (
    <main className='flex flex-col justify-center items-center w-full'>
      <Hero
        name='Skontaktuj się z nami!'
        textHero='Wycena oraz spotkanie jest całkowicie darmowe więc napisz do nas mailem, przez instagrama czy facebooka, zadzwoń na numer telefonu lub napisz przez stronę internetową'
        img={meeting}
      />
      <Stats />

      <ContactSec />

      <Map />

      <section className="p-7 w-screen">
        <h6 className="font-hussar text-4xl mx-auto text-center">Nie czekaj i napisz lub zadzwoń do nas już teraz, aby wejść do świata internetu ze swiężą stroną internetową</h6>
      </section>

      <Pros />

    </main>
  )
}

export default Contact

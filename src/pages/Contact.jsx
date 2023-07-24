import Hero from '../components/offersComponents/Hero'
import ContactSec from '../components/ContactSec'
import Stats from '../components/Stats'
import Map from '../components/Map'

import meeting from '../assets/webp/meeting.webp'

function Contact() {
  return (
    <main className='flex flex-col justify-center items-center w-full overflow-x-hidden'>
      <Hero
        name='Skontaktuj się z nami!'
        textHero='Wycena oraz spotaknie jest całkowicie darmowe więc napisz do nas mailem, przez instagrama czy facebooka, zadzown na numer telefonu lub napisz przez stronę internetową'
        img={meeting}
      />
      <Stats strony='4' projekty='10+' />

      <ContactSec />

      <Map 
        header='Możesz również umówić się na spotkanie'
        text='Jesteśmy zlokalizowani w Katowicach oraz często bywamy we Wrocławiu więc jeśli preferujesz spotkania twarzą w twarz, umów się już teraz na darmowe konsultacje'
      />

      <section className="p-7 w-screen">
        <h6 className="font-hussar text-4xl mx-auto text-center">Nie czekaj i napisz lub zadzwoń do nas już teraz, aby wejść do świata internetu ze swiężą stroną internetową</h6>
      </section>

    </main>
  )
}

export default Contact

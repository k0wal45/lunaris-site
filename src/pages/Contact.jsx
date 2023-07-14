import Hero from '../components/offersComponents/Hero'
import ContactSec from '../components/ContactSec'
import Stats from '../components/Stats'
import Map from '../components/Map'

import meeting from '../assets/webp/meeting.webp'

function Contact() {
  return (
    <main className='flex flex-col justify-center items-center w-full'>
      <Hero
        name='Co powinieneś o nas wiedzieć?'
        textHero='Skontaktuj się z nami aby rozpocząć świetną przygodne i przynieść s'
        img={meeting}
      />
      <Stats strony='4' projekty='10+' />

      <ContactSec />

      <Map 
        header='Możesz również umówić się na spotkanie'
        text='Umów się z nami na spotkanie telefonicznie lub mailowo na terenie Katowic i okolic oraz Wrocławia'
      />

      <section className="p-7 w-screen">
        <h6 className="font-hussar text-4xl mx-auto text-center">Nie czekaj i napisz lub zadzwoń do nas już teraz, aby wejść do świata internetu ze swiężą stroną internetową</h6>
      </section>

    </main>
  )
}

export default Contact

import Hero from '../../components/offersComponents/Hero'
import ContactSec from '../../components/ContactSec'
import Showcase from '../../components/offersComponents/Showcase'
import OffersProp from '../../components/offersComponents/OffersProp'

import socialmedia from'../../assets/jpg/socialmedia.png'
import advertFirst from'../../assets/jpg/AdvertFirst.png'




function Reklama() {
  return (
    <main className='flex flex-col justify-center items-center w-full gap-8'>
      <Hero
        name='Reklama'
        textHero='Skuteczna strategia reklamowa to klucz do sukcesu marki, zwiększenia sprzedaży i budowania pozytywnego wizerunku. Analiza rynku, celowe działania reklamowe i monitorowanie rezultatów są niezbędne dla osiągnięcia maksymalnego efektu.'
        img={socialmedia}
      />

      <OffersProp
        textHead='Nasze Porpozycje Ofert Reklam'
      >
        
        <Showcase
          img={advertFirst}

          heading= ' Reklamą w internecie'

          text='Skoncentrujemy się na budowaniu marki i wizerunku poprzez tworzenie spójnej identyfikacji wizualnej, a także kreowanie wartościowych treści, które będą angażować i informować potencjalnych klientów. W strategii uwzględniony zostanie również marketing treści, który pozwoli na dzielenie się wiedzą i doświadczeniem związanych z branżą, zwiększając tym samym zaufanie i autorytet marki.' 

          subheading='Social Media'

          textSubheading='Najważniejszą częścią tego typu strategi są działania firmy w social mediach które razem będziemy monitorować i dostosowywać aby wyciągnąć z tego jak największe zyski'

          price=''
        /> 

      </OffersProp>

    
      <ContactSec />

    </main>
  )
}

export default Reklama

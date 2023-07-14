import Hero from '../../components/offersComponents/Hero'
import ContactSec from '../../components/ContactSec'
import PortfolioOffer from '../../components/offersComponents/PortfolioOffer'
import Showcase from '../../components/offersComponents/Showcase'
import PortfolioItem from '../../components/subcomponents/PortfolioItem'
import OffersProp from '../../components/offersComponents/OffersProp'

import bqcars from '../../assets/jpg/bqcars.png'

import socialmedia from'../../assets/jpg/socialmedia.png'
import socialMediaPost from '../../assets/jpg/socialMediaPost.png'
import reklama1 from '../../assets/jpg/AdvertFirst.png'





function SocialMedia() {
  return (
    <main className='flex flex-col justify-center items-center w-full'>
      <Hero
        name='Social Media'
        textHero='Obecność na Social Mediach jest niezbędna dla rozwoju Twojej marki i dotarcia do szerokiego grona potencjalnych klientów oraz budowania zaufania dotyczącego marki.'
        img={socialmedia}
      />
      <OffersProp
        textHead='Nasze Porpozycje Ofert Social Mediów'
      >
  
      <Showcase
        img={socialMediaPost}
        heading= 'Start na Social Mediach'
        text='Konfiguracja kont w mediach społecznościowych zapewnia kompletność silnej obecności online. Dzięki dobrze skonfigurowanym social mediom, możesz dotrzeć do większej liczby potencjalnych klientów, zwiększyć świadomość marki oraz tworzyć silne relacje z odbiorcami w krótszym czasie.' 
        subheading=''
        textSubheading=''
        price='100'
      />

      <Showcase
        img={reklama1}
        heading= 'Administracja Social Mediami'
        text='Jeśli nie masz czasu prowadzić kont w mediach społecznościowych twoich działalności to ta oferta jest dla ciebie. Będziemy w porozumieniu z tobą tworzyć pisać wrzucać i udostępniać posty, abyś mógł zaoszczedzić czas ' 
        subheading=''
        textSubheading=''
        price='100'
      />

      </OffersProp>


      <PortfolioOffer
        name=' Mediami Społeczniściowymi'
      >
        <PortfolioItem 
          aos='fade-up'
          name='BQ Cars Katowice' 
          img={bqcars} 
          text='Wypożyczalnia Samochodów z Katowic, Zajeliśmy się identyfikacją firmy w sieci i poza nią. Stworzyliśmy Stronę internetową banery rollupy oraz logotyp' 
          title='Wypożyczalnia Samochodów' 
        />        
  
      </PortfolioOffer>



      <ContactSec />

    </main>
  )
}

export default SocialMedia

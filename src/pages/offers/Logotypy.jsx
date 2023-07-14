import Hero from '../../components/offersComponents/Hero'
import ContactSec from '../../components/ContactSec'
import PortfolioOffer from '../../components/offersComponents/PortfolioOffer'
import Showcase from '../../components/offersComponents/Showcase'
import PortfolioItem from '../../components/subcomponents/PortfolioItem'

import bqcars from '../../assets/jpg/bqcars.png'
import merkury from '../../assets/jpg/merkury.png'
import werva from '../../assets/jpg/werva.png'

import grafika from '../../assets/jpg/grafika.png'
import logoPhoto from '../../assets/jpg/logoDesign.png'
import OffersProp from '../../components/offersComponents/OffersProp'



function Logotypy() {
  return (
    <main className='flex flex-col justify-center items-center w-full'>
      <Hero
        name='Logotypy'
        textHero='Identyfikacja firmy to bardzo ważna część rozwoju. Pomagamy zaprojektować logotypy aby przedstawiały to czego oczekuje klient, ale i działały pozytywnie na wizerunek firmy'
        img={grafika}
      />

      <OffersProp
        textHead='Nasze Porpozycje Ofert Logotypów'
      >
        
        <Showcase
          img={logoPhoto}
          heading= 'Logotyp'
          text='Logo to jeden z najważniejszych aspektów wizerunku firmy. Jest to często pierwsza rzecz, którą zauważą potencjalni klienci i powinno to być coś, co zapamiętają. Dobrze zaprojektowane logo może pomóc w ustanowieniu marki firmy i uczynić ją bardziej rozpoznawalną na rynku. ' 
          subheading=''
          textSubheading=''
          price='400'
        /> 


      </OffersProp>
      

      <PortfolioOffer
        name=' Logotypami'
      >
        <PortfolioItem 
          aos='fade-up'
          name='BQ Cars Katowice' 
          img={bqcars} 
          text='Wypożyczalnia Samochodów z Katowic, Zajeliśmy się identyfikacją firmy w sieci i poza nią. Stworzyliśmy Stronę internetową banery rollupy oraz logotyp' 
          title='Wypożyczalnia Samochodów' 
        />        
        <PortfolioItem 
          aos='fade-up'
          name='Merkury Medica' 
          img={merkury}
          text='Prywatna Klinika z Jastrzębie-Zdrój. Dzięki niskim kosztom naszych usług oraz współpracy z osobami odpowiedzialnymi na Merkury Medica stworzyliśmy dla nich Logotyp oraz inne materiały' 
          title='Prywatna Klinika' 
        />    
        <PortfolioItem 
          aos='fade-up'
          name='Werva Solutions' 
          img={werva}
          text='Między innymi doradztwo finansowe ale Werva Solutions to firma zajmująca się wszelakimi usługami. Współpraca z Wervą zaowocowała w logotyp oraz inne materiały reklamowe' 
          title='Doradztwo Finansowe' 
        />   
      </PortfolioOffer>



      <ContactSec />

    </main>
  )
}

export default Logotypy

import React from 'react'
import Hero from '../../components/offersComponents/Hero'
import ContactSec from '../../components/ContactSec'
import OffersProp from '../../components/offersComponents/OffersProp'
import Showcase from '../../components/offersComponents/Showcase'
import PortfolioItem from '../../components/subcomponents/PortfolioItem'

import bqcars from'../../assets/jpg/bqcars.png'
import werva from'../../assets/webp/werva.webp'
import oktech from'../../assets/jpg/oktech.png'
import merkury from'../../assets/jpg/merkury.png'

import werva1 from '../../assets/webp/wervaLogo2.webp'
import wervalogoBlack from '../../assets/webp/wervaCzarne.webp'
import wervalogoWhite from '../../assets/webp/wervaBiale.webp'


function WervaSolutions() {

  const logoColor = () => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkThemeMq.matches) {
      return wervalogoWhite
    } else {
      return wervalogoBlack
    }
  }


  return (
    <main className='flex flex-col justify-center items-center w-full'>
      <Hero
        name='Werva Solutions'
        textHero='Między innymi doradztwo finansowe ale Werva Solutions to firma zajmująca się wszelakimi usługami. Współpraca z Wervą zaowocowała w logotyp oraz inne materiały reklamowe'
        img={logoColor()}
      />
      
      <OffersProp
        textHead='Co razem zrobiliśmy z Wervą?'
      >
        
        <Showcase
          img={werva1}
          heading= 'Logotyp'
          text='Werva Solutions. Naszym celem było stworzenie logotypu i wizytówek, które w pełni oddadzą tożsamość i profesjonalizm Werva Solutions. Dzięki starannemu procesowi projektowemu, zgłębianiu ich wartości oraz wnikliwej analizie, udało nam się stworzyć wyjątkowy logotyp, który doskonale odzwierciedla ich innowacyjne podejście do technologii.' 
          subheading=''
          textSubheading='Logotyp Werva Solutions jest świadomie zaprojektowany, aby wzbudzać zaufanie, przykuwać uwagę i być rozpoznawalnym w branży. Skupiliśmy się na harmonii między estetyką a funkcjonalnością, tworząc graficzne przedstawienie ich wizji i wartości. Efekt? Logotyp, który wyróżnia Werva Solutions na tle konkurencji i przyciąga uwagę klientów.'
          price=''
        /> 

        <Showcase
          img={werva}
          heading= 'Wizytówki'
          text='Kolejnym krokiem było stworzenie profesjonalnych wizytówek, które dopełnią wizerunek firmy. Nasz zespół projektowy, zainspirowany nowoczesnymi trendami w projektowaniu graficznym, skoncentrował się na minimalistycznym designie, który jednocześnie wyróżnia się elegancją i profesjonalizmem. Wizytówki Werva Solutions są nie tylko wizualnie atrakcyjne, ale także praktyczne i funkcjonalne. Ich projektowanie było starannie dopasowane do identyfikacji wizualnej firmy, tworząc spójność i jednolity wizerunek.' 
          subheading=''
          textSubheading='Jesteśmy dumni z naszej współpracy z Werva Solutions i kontynuujemy dążenie do tworzenia innowacyjnych rozwiązań w zakresie projektowania. Nasza pasja, profesjonalizm i zaangażowanie są kluczowe dla osiągnięcia sukcesu naszych klientów. W Lunaris Web nie tylko tworzymy projekt graficzny, ale także budujemy trwałe relacje oparte na zaufaniu i wzajemnym zrozumieniu. Współpraca z Werva Solutions to nie tylko projekt, to partnerskie podejście do osiągania wspólnych celów biznesowych.'
          price=''
        /> 

      </OffersProp>
      

      <section className="flex flex-col justify-center items-center text-center mb-0 lg:my-12 w-full ">
      <h3 className="text-3xl lg:text-4xl font-hussar my-4">Nasze inne prace</h3>
      <p className="text-lg opacity-80 p-4 mb-4">Sprawdź nasze portfolio poprzednich prac</p>
      <div className="flex justify-center items-stretch flex-wrap mt-4 lg:gap-8">
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
        <PortfolioItem 
          aos='fade-up'
          name='Oktech Klimatyzacje' 
          img={oktech} text='Zaprzyjaźniona firma zajmująca się miedzy innymi monateżem i serwisem klimatyzacji ale i wiele więcej. Podczas naszej współpracy stworzyliśmy dla tej firmy stronę internetową' 
          title='Firma Transportowa' 
        /> 
      </div>
    </section>



      <ContactSec />

    </main>
  )
}

export default WervaSolutions
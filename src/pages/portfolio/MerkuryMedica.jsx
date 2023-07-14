import React from 'react'
import Hero from '../../components/offersComponents/Hero'
import ContactSec from '../../components/ContactSec'
import OffersProp from '../../components/offersComponents/OffersProp'
import Showcase from '../../components/offersComponents/Showcase'
import PortfolioItem from '../../components/subcomponents/PortfolioItem'

import bqcars from'../../assets/jpg/bqcars.png'
import werva from'../../assets/jpg/werva.png'
import oktech from'../../assets/jpg/oktech.png'
import merkury from'../../assets/jpg/merkury.png'

import merkuryLogo from'../../assets/webp/merkurylogo.webp'
import merkuryWizytowka from '../../assets/webp/merkuryWizytowka.webp'

function MerkuryMedica() {
  return (
    <main className='flex flex-col justify-center items-center w-full'>
      <Hero
        name='Merkury Medica'
        textHero='Prywatna Klinika z Jastrzębie-Zdrój. Dzięki niskim kosztom naszych usług oraz współpracy z osobami odpowiedzialnymi na Merkury Medica stworzyliśmy dla nich Logotyp oraz inne materiały'
        img={merkuryLogo}
      />
      
      <OffersProp
        textHead='Co razem zrobiliśmy dla Merkury Medica?'
      >
        
        <Showcase
          img={merkuryLogo}
          heading= 'Logotyp'
          text='Przede wszystkim, nasza współpraca rozpoczęła się od głębokiego zrozumienia misji, wartości i wizji kliniki. Wysłuchaliśmy uważnie wszystkich informacji dotyczących profilu działalności, docelowej grupy pacjentów oraz sposobu, w jaki klinika chciała być postrzegana przez społeczność. To pozwoliło nam stworzyć solidną podstawę dla projektowania odpowiedniego logo, wizytówek i witryny.' 
          subheading=''
          textSubheading='Przystąpiliśmy do projektowania logo, skupiając się na tworzeniu czegoś unikalnego, łatwo rozpoznawalnego i reprezentującego charakter kliniki. Wykorzystaliśmy naszą wiedzę na temat projektowania graficznego, estetyki i trendów branżowych, aby stworzyć logo, które było jednocześnie profesjonalne, nowoczesne i wiarygodne. Regularnie komunikowaliśmy się z zespołem kliniki, biorąc pod uwagę ich opinie i sugestie, co przyczyniło się do doskonałego dostosowania projektu do ich oczekiwań.'
          price=''
        /> 
        <Showcase
          img={merkuryWizytowka}
          heading= 'Wizytówki'
          text='Po zatwierdzeniu logo przystąpiliśmy do projektowania wizytówek. Skupiliśmy się na zapewnieniu spójności z nowym logo, jednocześnie wyrażając informacje kontaktowe i podstawowe usługi kliniki. Stawialiśmy na czytelność i estetykę, dbając o to, aby wizytówki były funkcjonalne i przyciągające wzrok.' 
          subheading=''
          textSubheading='Podsumowując, nasza współpraca z prywatną kliniką była owocna i przyjemna. Jesteśmy dumni z rezultatów, które osiągnęliśmy razem. Logo, wizytówki i witryna. Spójną i profesjonalną identyfikację wizualną kliniki, przyciągającą uwagę potencjalnych pacjentów i budującą zaufanie. Cieszymy się, że mogliśmy wnieść naszą wiedzę i kreatywność do tego projektu i przyczynić się do sukcesu kliniki'
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

export default MerkuryMedica
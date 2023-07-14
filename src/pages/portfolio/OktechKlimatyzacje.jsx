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

import oktechlogo from '../../assets/webp/oktechLogo.webp'
import oktechStrona from '../../assets/webp/oktechstrona2.webp'
import oktechbaner from '../../assets/webp/oktechBaner.webp'

function OktechKlimatyzacje() {
  return (
    <main className='flex flex-col justify-center items-center w-full'>
      <Hero
        name='Oktech Klimatyzacje'
        textHero='Zaprzyjaźniona firma zajmująca się miedzy innymi monateżem i serwisem klimatyzacji ale i wiele więcej. Podczas naszej współpracy stworzyliśmy dla tej firmy stronę internetową'
        img={oktechlogo}
      />
      
      <OffersProp
        textHead='Co razem zrobiliśmy dla Oktechu?'
      >
        
        <Showcase
          img={oktechStrona}
          heading= 'Strona wizytówka'
          text='Na początku naszej współpracy, przeprowadziliśmy szczegółowe rozmowy z właścicielami firmy, aby zrozumieć ich potrzeby, cele i wyzwania, z jakimi się spotykają. Dowiedzieliśmy się, że firma oferuje zarówno usługi transportowe, jak i serwis klimatyzacji, co było dla nas cenną informacją przy projektowaniu ich strony wizytówki i banera reklamowego. ' 
          subheading={<a className='underline' href="https://klima-serwis.eu/" target='_blank' rel="noreferrer">klima-serwis.eu</a>}
          textSubheading='Rozpoczęliśmy od zaprojektowania strony wizytówki, skupiając się na stworzeniu przejrzystej i łatwej do nawigacji struktury. Pragnęliśmy zapewnić, że informacje o usługach transportowych i serwisie klimatyzacji są jasno przedstawione, aby potencjalni klienci mieli pełne zrozumienie oferty firmy. Dodatkowo, skoncentrowaliśmy się na odpowiednim umieszczeniu danych kontaktowych, aby umożliwić łatwy i szybki kontakt z firmą. Staraliśmy się również wprowadzić elementy graficzne, które odzwierciedlały branżę transportową i klimatyzacyjną, nadając stronie wizytówki profesjonalny i atrakcyjny wygląd.'
          price=''
        /> 

        <Showcase
          img={oktechbaner}
          heading= 'Baner reklamowy'
          text='Następnie przystąpiliśmy do projektowania banera reklamowego, który miał być wykorzystywany w różnych kampaniach promocyjnych. Skupiliśmy się na stworzeniu banera, który wyróżniał się na tle innych reklam i przyciągał uwagę potencjalnych klientów. Wykorzystaliśmy odpowiednie grafiki i kolory, które odzwierciedlały branże transportową i klimatyzacyjną. Dodatkowo, umieściliśmy krótki, zwięzły tekst, który zachęcał do skorzystania z usług firmy i podkreślał ich zalety.' 
          subheading=''
          textSubheading='Podsumowując, współpraca z rodzinna firmą Oktech była owocna i satysfakcjonująca. Projektowanie strony wizytówki i banera reklamowego pozwoliło nam pomóc firmie w skutecznym promowaniu swoich usług oraz budowaniu profesjonalnego wizerunku. Cieszymy się, że mogliśmy dostarczyć rozwiązania, które spełniły oczekiwania klienta i przyczyniły się do sukcesu ich działań marketingowych.'
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

export default OktechKlimatyzacje
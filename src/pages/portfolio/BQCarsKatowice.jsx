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

import bqlogo from '../../assets/webp/bqcarslogo.webp'
import bqwizytowka from '../../assets/webp/bqcarswizytowka.webp'
import bqbaner from '../../assets/webp/bqcarsbaner.webp'





function BQCarsKatowice() {
  return (
    <main className='flex flex-col justify-center items-center w-full'>
      <Hero
        name='BQ Cars Katowice'
        textHero='Wypożyczalnia Samochodów z Katowic, Zajeliśmy się identyfikacją firmy w sieci i poza nią. Stworzyliśmy Stronę internetową banery rollupy oraz logotyp'
        img={bqlogo}
      />
      
      <OffersProp
        textHead='Co razem zrobiliśmy dla BQ Cars?'
      >
        
        <Showcase
          img={bqlogo}
          heading= 'Logotyp'
          text='Firma BQ Cars Katowice dopiero zaczynała swoją działalność i potrzebowałą praktycznie wszystkiego, od logotypu po stronę internetową. Zaczęliśmy od projektu logotypu, narysowaliśmy pare wizualizacji logotypów i po akceptacji jednej z propozycji przeszliśmy do konsulatacji, analizy i burzy mózgu. Następnie wznowiliśmy prace nad wybranym logiem, wybraliśmy odpowiednie kolory i zasoby. Po paru zmianach i konsultacjach z klientem nasza praca doszła do końca, lub początku?' 
          subheading=''
          textSubheading=''
          price=''
        /> 

        <Showcase
          img={bqwizytowka}
          heading= 'Wizytówka'
          text='Po skończonych pracahc nad logiem zaczęliśmy pracować nad wizytówkami, miały być czytelne i ciekawe. Dostaliśmy od firmy zasoby które mieliśmy użyć, czyli zdjęcia ich świetnych samochodów, i wzięliśmy się do roboty. Oprócz zasob.ów dostaliśmy również wytyczne od firmy abyśmy wiedzieli w jaką stronę mamy iść, kod QR z instagrama, czcionka czy odpowiednie dane kontaktowe' 
          subheading=''
          textSubheading=''
          price=''
        /> 

        <Showcase
          img={bqbaner}
          heading= 'Baner Reklamowy'
          text='Po wizytówkach zajęliśmy się jeszcze banerem, ultokami oraz rollupem. Materiały już mieliśmy więc wzięliśmy się bezzwłocznie do pracy. Z tego momentu przeszliśmyh bez większych problemów i na sam koniec wzięliśmy się za stronę internetową aby slad w sieci po BQ Cars Katowice nie zniknął. Warto nadmienić, że nie zjamowaliśmy się strategią marketingową firmy, ale tylko i wyłącznie tworzeniem materiałów' 
          subheading=''
          textSubheading=''
          price=''
        /> 


        <Showcase
          img={bqcars}
          heading= 'Strona Internetowa'
          text='Po skończeniu prac nad materiałami graficznymi uzgodniliśmy stworzneie strony internetowej i zabraliśmy się do pracy. Strona miała mieć 4 zakładki. Strona główna, O nas, Nasze Byqi (auta) i kontakt> Strona Internetowa miała formularze które automatycznie wysyłały się na maila. Strona wizytówka była napsiana w vanila HTML, CSS i JS, w pełni responsywna i działająca . Pomogliśmy w zakupie domeny i ustawieniu hsotingui przez około pół roku byliśmy administratorami strony, lecz nasze drogi się już rozeszły, a tutaj dodajemy link do strony: 

          ' 
          subheading={<a className='underline' href="https://bqcars.netlify.app/" target='_blank' rel="noreferrer">bqcarskatowice.pl</a>}
          textSubheading=''
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

export default BQCarsKatowice

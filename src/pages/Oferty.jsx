import React from 'react'
import Hero from '../components/offersComponents/Hero'
import Item from '../components/subcomponents/Item'

import photo from'../assets/jpg/webdev.png'

function Oferty() {
  return (
    <main className='flex flex-col justify-center items-center w-full'>
      <Hero
        name='Oferty'
        textHero='Zobacz nasze oferty'
        img={photo}
      />

      <section className="flex flex-wrap gap-8">
          <Item
            name='Strony Internetowe' 
            text='Tworzenie Stron Internetowych to nasza główna nisza którą się zajmujemy, jesteśmy w stanie zrobić praktycznie wszystko czego potrzebujesz'
            img='czerwona'
          />
  
          <Item 
            name='Grafika' 
            text='Każda firma potrzebuje w swojej kampani marketingowej Grafiki Komputerowej, tworzymy posty, wizytówki, broszury i wiele wiele więcej'
            img='galaktyka'
          />
    
          <Item 
            name='Logotypy' 
            text='Graficzna identyfikacja firmy to jedna z najważniejszych części marketingu, logotyp powinien przyciągać uwagę i wzbudzać zainteresowanie a zarazem zaufanie'
            img='zolta'
          />
  
          <Item 
            name='Social Media' 
            text='Budowanie wizerunku firmy w sieci to bardzo ważna część kamopanii marketingowej. Social Media firm mogą nie dość, że zapewnić darmową reklame, ale i również zaufanie dla marki'
            img='saturn'
          />
    
          <Item 
            name='Strategia Reklamowa' 
            text='Strategia Reklamowa może przynieść wielkie korzyści ale i starty, daltego warto zaufać specjalistą i wraz z nimi wypracować coś co zadziała'
            img='niebieska'
          />
      </section>
    </main>
  )
}

export default Oferty

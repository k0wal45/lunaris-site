import React from 'react'
import Hero from '../components/offersComponents/Hero'
import Portfolio from '../components/Portfolio'
import Stats from '../components/Stats'
import Map from '../components/Map'

import about from '../assets/webp/about.webp'
import WhatWeDo from '../components/WhatWeDo'

import photoFirst from '../assets/jpg/banerFirst.png'
import photoSec from '../assets/jpg/webdev.png'

function About() {
  return (
    <main className='flex flex-col justify-center items-center w-full'>
      <Hero 
        name='Co powinieneś o nas wiedzieć?'
        textHero='Jesteśmy startującą agencją marketingową, która skupia się głównie na tworzeniu innowacyjnych stron internetowych.'
        img={about}
      />

      <Stats strony='4' projekty='10+' />

      <section className=" mx-auto flex flex-col-reverse lg:flex-row odd:lg:flex-row-reverse w-full lg:w-3/4 justify-center my-12 p-8 gap-8 lg:max-h-[35rem]">
      <div className="flex-1 flex justify-center items-center">
        <img src={photoFirst} alt="Zdjęcie przykładu usługi"  className="h-full object-contain"/>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-4 ">

        <h3 className='text-3xl font-hussar'>Lunaris Web</h3>

        <p className='text-lg leading-8'>to młoda i pełna pasji agencja marketingowa zlokalizowana w Katowicach. Naszą główną misją jest pomaganie innym firmom w osiągnięciu sukcesu oraz spełnianie się zawodowo. Zaufanie naszych klientów i ich satysfakcja są dla nas najważniejsze, dlatego w każdym projekcie wkładamy całe serce</p>
        <p className='text-lg leading-8'>Tworzymy atakcyjne materiały marketingowe. ze szczególnym naciskiem na dynamiczne i atrakcyjne strony internetowe. Nasz zespół nie tylko tworzy estetyczne projekty, ale także pomaga w ustawieniu silnej obecności w mediach społecznościowych</p>
        <p className='text-lg leading-8'>Dysponujemy ponadprzeciętnymi umiejętnościami w dziedzinie tworzenia stron internetowych oraz grafiki komputerowej na poziomie komercyjnym. Zajmujemy się nie tylko projektowaniem logotypów i grafik, ale również kompleksowym zaprojektowaniem i wdrożeniem unikalnych stron internetowych, które wyróżniają się zarówno wizualnie, jak i funkcjonalnie.</p>
      </div>
    </section>
    
      <section className=" mx-auto flex flex-col-reverse lg:flex-row odd:lg:flex-row-reverse w-full lg:w-3/4 justify-center my-12 p-8 gap-8 lg:max-h-[35rem]">
      <div className="flex-1 flex justify-center items-center">
        <img src={photoSec} alt="Zdjęcie przykładu usługi"  className="h-full object-contain"/>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-4 ">

        <h3 className='text-3xl font-hussar'>Strony Internetowe</h3>

        <p className='text-lg leading-8'>Nasze podejście do pracy charakteryzuje się świeżym spojrzeniem, młodą energią oraz nieszablonowym podejściem do każdego klienta. Rozumiejąc, że każda firma jest inna, tworzymy spersonalizowane strategie marketingowe, dostosowane do unikalnych potrzeb i celów biznesowych naszych klientów.</p>
        <p className='text-lg leading-8'>Tworzenie profesjonalnych stron internetowych to nasza główna dziedzina działalności. Nasze portfolio może nie być jeszcze duże, ale satysfakcja i sukcesy naszych klientów mówią same za siebie. Zależy nam na budowaniu długotrwałych relacji opartych na zaufaniu, dlatego każdy projekt traktujemy indywidualnie i angażujemy się w pełni.</p>
        <p className='text-lg leading-8'>W Lunaris Web nie posiadamy specjalistów, ale mamy zespół ludzi, którzy są doskonali w tym, co robią i mają pasję do marketingu. Stale rozwijamy swoje umiejętności uczestnicząc w kursach doszkalających, szukając inspiracji w sieci i korzystając z doświadczeń innych ekspertów. Dążymy do ciągłego doskonalenia się i tworzenia innowacyjnych rozwiązań dla naszych klientów.</p>
      </div>
    </section>

      <WhatWeDo />


      <Map 
        header='Jeśteśmy zlokalizowani w Katowicach'
        text='Oferujemy spotkania z klientami w 4 lub więcej oczu na terenie Katowic oraz okazjonalnie Wrocławia gdyż tam też częśto przebywamy'
      />



      <Portfolio />

    </main>
  )
}

export default About

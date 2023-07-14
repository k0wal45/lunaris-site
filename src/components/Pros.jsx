import React from 'react'
import ProsItem from './subcomponents/ProsItem'
import { faArrowsToDot, faChartLine, faClock, faLeaf } from '@fortawesome/free-solid-svg-icons'

function Pros() {
  return (
    <section className='my-0 mx-auto flex flex-col items-center gap-8 w-full bg-secondary bg-opacity-20  p-4 pt-12  lg:p-24 '> 
      <h2 className="font-hussar text-4xl lg:text-6xl">Czemu Powinieneś nas wybrać</h2>
      <p className='opacity-70 text-xl'>Wybierz nas dla skutecznych strategii marketingowych oraz elastyczności dostosowanej do Twoich potrzeb.</p>
      <div className='flex flex-col lg:flex-row justify-center items-start flex-wrap'>
      <ProsItem 
        heading='Oszczędność czasu i zasobów'
        text='Czas i zasoby dzięki skutecznym strategiom marketingowym i elastycznemu podejściu dostosowanemu do Ciebie'
        icon={faClock}
      />
      
      <ProsItem 
        heading='Świeże spojrzenie i kreatywność'
        text='Świeże spojrzenie, kreatywność i innowacyjne pomysły, które ożywią Marketing twojej firmy'
        icon={faLeaf}
      />
      <ProsItem 
        heading='Wszystko w Jednym miejscu'
        text='Grafika, Strony Internetowe i Social Media w jendym miejscu co pozwala zaoszczędzić czas i nerwy'
        icon={faArrowsToDot}
      />
      <ProsItem 
        heading='Skalowalność i Elastyczność'
        text='Skalowalność kampanii wraz ze wzrostem zapotrzebowania to u nas żaden problem'
        icon={faChartLine}
      />
      </div>
    </section>
  )
}

export default Pros

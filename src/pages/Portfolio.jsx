import React, { useEffect, useState } from 'react'
import Hero from '../components/offersComponents/Hero'
import ContactSec from '../components/contact/ContactSec'
import Stats from '../components/home/Stats'

import { useParams } from 'react-router-dom';
import PortoflioItem from '../components/portfolio/PortoflioItem';
import Offers from '../components/offershowcase/Offers';

const Portfolio = () => {
  
  const [data, setData] = useState(null)
  const [response, setResponse] = useState({})
  const params = useParams()

  useEffect(() => {
    const fetchData =  () => {
      const response = require('../portfolio.json')
      setResponse(response)
    }
    fetchData(); 
  }, []);

    useEffect(() => {
      if (params.id === 'strony-internetowe') {
        setData(response.strona)
      } else if (params.id === 'wizytówki') {
        setData(response.wizytowka)
      } else if (params.id === 'banery-reklamowe') {
        setData(response.baner)
      } else if (params.id === 'logotypy') {
        setData(response.logotyp)
      } 
    }, [params.id, data, response])


  if(data) {
      return (
        
        <main>
          <Hero 
            name={data.header}
            textHero={data.heroText}
            img={data.heroImg}
          />

          <Stats />
          <section className="mx-auto flex flex-col justify-center items-center gap-8 p-4">
            <h2 className="text-3xl lg:text-5xl font-hussar">Nasze Realizacje Związane z {data.universal}</h2> 
              {
                Array.isArray(data.prace) ? data.prace.map((doc) => (
                  <PortoflioItem
                    imgArray={doc.img}
                    title={doc.title}
                    text={doc.text}
                  />
                )) : ''
              }
          </section>

          <Offers />
    
          <ContactSec />
        </main>
      )
  } else {
    return (
      <div className='min-w-screen min-h-screen grid place-items-center text-4xl font-hussar'>Something Went Wrong</div>
    )
  }

}

export default Portfolio

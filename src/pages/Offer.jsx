import React, { useEffect, useState } from 'react'
import Hero from '../components/offersComponents/Hero'
import ContactSec from '../components/contact/ContactSec'

import { useParams } from 'react-router-dom';
import Showcase from '../components/offersComponents/Showcase';
import Portfolio from '../components/home/Portfolio';

const Offer = () => {

  const [data, setData] = useState(null)
  const [response, setResponse] = useState({})
  const params = useParams()

  useEffect(() => {
    const fetchData =  () => {
      const response = require('../offers.json')
      setResponse(response)
    }
    fetchData(); 
  }, []);

    useEffect(() => {
      if (params.id === 'strony-internetowe') {
        setData(response.strona)
      } else if (params.id === 'grafika') {
        setData(response.grafika)
      } else if (params.id === 'logotypy') {
        setData(response.logotyp)
      } 
    }, [params.id, data, response])

  console.log(data)


  if(data) {
      return (
        
        <main>
          <Hero 
            name={data.header}
            textHero={data.heroText}
            img={data.heroImg}
          />
          <section className="mx-auto flex flex-col justify-center items-center gap-8 p-4">
            <h2 className="text-3xl lg:text-5xl font-hussar">Nasze Propozycje Ofert {data.universal}</h2> 
              {
                Array.isArray(data.oferty) ? data.oferty.map((doc) => (
                  <Showcase
                    img={doc.img}
                    heading={doc.title}
                    text={doc.text}
                    time={doc.time}
                    price={doc.cost}
                  />
                )) : ''
              }
    
          </section>
    
          <section className="mx-auto flex flex-col justify-center items-center gap-8 p-4">
          <h2 className="text-3xl lg:text-5xl font-hussar">Sprawdź Nasze Poprzednie Realizacje</h2> 
    
          </section>

          <Portfolio />
    
    
          <ContactSec />
        </main>
      )
  } else {
    return (
      <div className='min-w-screen min-h-screen grid place-items-center text-4xl font-hussar'>Something Went Wrong</div>
    )
  }

  
}

export default Offer

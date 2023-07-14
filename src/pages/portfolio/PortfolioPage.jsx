import React from 'react'
import Hero from '../../components/offersComponents/Hero'

function PortfolioPage({name, textHero, img}) {
  return (
    <>
      <Hero
        name={name}
        text={textHero}
        img={img}
      />

      <ContactSec />
    </>
  )
}

export default PortfolioPage

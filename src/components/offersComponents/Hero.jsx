import photo from '../../assets/jpg/tiles.png'

function Hero({name, textHero, img}) {
  return (
    <section className='flex flex-col lg:flex-row justify-center w-full lg:h-screen pt-32 lg:pt-0 text-center lg:text-left'>
        <div className="flex flex-col justify-center gap-4 flex-1 px-16">
          <h1 className="text-4xl lg:text-6xl font-hussar-italic">{name}</h1>
          <p className="text-2xl leading-8">{textHero}</p>
        </div>

        <div className="flex-1 flex justify-center items-center py-4 lg:pt-24 ">
          <img src={img !== '' ? img : photo} alt="Kafelki ze zdjęciami Usług" className='animation-pulse-up-down h-full object-contain p-4 shadow-png z-10'/>
        </div>

      </section>
  )
}

export default Hero

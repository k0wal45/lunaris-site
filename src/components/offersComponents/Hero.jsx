
function Hero({name, textHero, img}) {
  return (
    <section className='flex flex-col lg:flex-row justify-center w-full p-4 pt-32 lg:pt-12 text-center lg:text-left'>
        <div className="flex flex-col justify-center gap-4 flex-1 px-16">
          <h1 className="text-4xl lg:text-6xl font-hussar-italic">{name}</h1>
          <p className="text-lg lg:text-2xl leading-8 text-justify">{textHero}</p>
        </div>

        <div className="flex-1 flex justify-center items-center py-4 lg:pt-24 ">
          <img src={img} alt="Kafelki ze zdjęciami Usług" className='animation-pulse-up-down h-full object-contain p-4 shadow-png z-10 max-h-[70vh]'/>
        </div>

      </section>
  )
}

export default Hero

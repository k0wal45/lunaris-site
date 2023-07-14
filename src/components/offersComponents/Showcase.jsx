import { Link } from "react-router-dom"

import photoBase from'../../assets/jpg/AdvertFirst.png'

function Showcase({img, heading, text, subheading, textSubheading, price}) {
  return (
  
    <section className="flex flex-col-reverse lg:flex-row odd:lg:flex-row-reverse w-full lg:w-3/4 justify-center my-12 p-8 gap-8 lg:max-h-[35rem] shadow-xl">
      <div className="flex-1 flex justify-center items-center">
        <img src={img !== '' ? img : photoBase} alt="Zdjęcie przykładu usługi"  className="h-full object-contain"/>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-4 ">
        <h2 className="font-hussar text-3xl">{heading}</h2>
        <p>{text}</p>
        <h3 className="font-bold text-2xl">{subheading}</h3>
        <p>{textSubheading}</p>
        <span className="text-2xl font-bold">{price !== '' ? `Cena zaczyna się od: ${price}zł` : ''}</span>
        <Link to='/kontakt' className="btn btn-primary">Skontaktuj się z nami</Link>
      </div>
    </section>
  )
}

export default Showcase

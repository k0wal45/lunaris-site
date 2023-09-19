import { Link } from "react-router-dom"

function Showcase({img, heading, text, time, price}) {
  return (
  
    <section className="flex flex-col-reverse lg:flex-row odd:lg:flex-row-reverse w-full lg:w-3/4 justify-center my-12 p-8 gap-8 lg:max-h-[35rem] shadow-xl">
      <div className="flex-1 flex justify-center items-center">
        <img src={img} alt="Zdjęcie przykładu usługi"  className="h-full object-contain"/>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-4 ">
        <h2 className="font-hussar text-3xl">{heading}</h2>
        <p>{text}</p>
        <div className="flex gap-4">

        <h3 className="font-bold text-2xl">Czas realizacji: do {time}</h3>
        </div>
        <p className="text-2xl font-bold">{`Cena zaczyna się od: ${price}zł`}</p>
        <Link to='/kontakt' className="btn btn-primary">Skontaktuj się z nami</Link>
      </div>
    </section>
  )
}

export default Showcase

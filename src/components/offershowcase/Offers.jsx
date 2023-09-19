import { faCode, faEye, faPenRuler } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Link } from "react-router-dom"


const Offers = () => {

  const [translate, setTranslate] = useState(false)


  
  const handleClick = (item) => {

    setTranslate(true)


    setTimeout(() => {
      setShow(item)
    }, 250)

    setTimeout(() => {
      setTranslate(false)
    }, 500)
  }

  const strony = {
    title: 'Strony Internetowe',
    text: 'W dzisiejszej erze cyfrowej, strona internetowa to kluczowe narzędzie dla każdej firmy. Niezależnie od branży, strona internetowa staje się nieodłączną częścią sukcesu. To właśnie na stronie internetowej potencjalni klienci szukają informacji, produktów i usług.',
    link: 'strony-internetowe'
  }

  const grafika = {
    title: 'Grafika Komputerowa',
    text: 'Grafika to nieodłączna część sukcesu w biznesie. Wizytówki oraz banery są równie ważne. Tworzą profesjonalny wizerunek firmy i przyciągają uwagę klientów. Inwestycja w grafikę i materiały promocyjne to klucz do osiągnięcia sukcesu.',
    link: 'grafika'
  }

  const logotyp = {
    title: 'Logotypy',
    text: 'Dobry logotyp to nie tylko obrazek. To twarz Twojej firmy, pierwsze wrażenie, które pozostaje w pamięci klientów. Projektowanie logo to inwestycja w rozpoznawalność i sukces firmy. Niezaprzeczalnie potrzebne i niezwykle przydatne.',
    link: 'logotypy'
  }

  const [show, setShow] = useState(strony)



  return (
    <>
    <h4 className="mt-12 mx-auto text-center text-4xl font-hussar">Nasza Oferta</h4>
    <section className=' mx-auto flex flex-col lg:flex-row justify-start items-start lg:items-center gap-8 p-4 lg:py-12 overflow-x-hidden lg:max-w-[60rem]'>
      <div className="flex flex-col flex-1 w-full lg:max-w-[45%]">
        <div onClick={() => handleClick(strony)} className='flex justify-start items-center gap-4 p-4 px-8 bg-base-200 border-2 border-base-100 '>
          <FontAwesomeIcon icon={faCode} />
          <p className="text-xl">Strona Internetowa</p>
        </div>
        <div onClick={() => handleClick(logotyp)} className='flex justify-start items-center gap-4 p-4 px-8 bg-base-200 border-2 border-base-100'>
          <FontAwesomeIcon icon={faEye} />
          <p className="text-xl">Logotyp</p>
        </div>
        <div onClick={() => handleClick(grafika)} className='flex justify-start items-center gap-4 p-4 px-8 bg-base-200 border-2 border-base-100'>
          <FontAwesomeIcon icon={faPenRuler} />
          <p className="text-xl">Grafika Komputerowa</p>
        </div>
      </div>
      <div className={`flex flex-col items-start justify-center flex-1 transition-transform duration-200 ${translate ? `animate-out` : ``} gap-4`}>
        <h5 className='font-hussar text-3xl'>{show.title}</h5>
        <p className='text-lg text-justify'>{show.text}</p>
        <Link to={`/oferta/${show.link}`} className='btn btn-primary'>Dowiedz się Więcej</Link>
      </div>
    </section>
    </>
  )
}

export default Offers

import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faX } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const PromoInfo = () => {

  const [visibility, setVisibility] = useState('block')

  const handleClick = (e) => {
    setVisibility('hidden')
  }

  return (
    <div className={`flex justify-between items-center  bg-warning w-full h-min z-50 px-4 text-white ${visibility}`}>
      <div></div>
      <p>Do końca sierpnia obowiązuje <strong>PROMOCJA NA WSZYSTKO 25%</strong>, <Link to='/kontakt' className="underline hover:scale-110">skontaktuj się z nami już teraz</Link></p>
      <FontAwesomeIcon icon={faX}  onClick={handleClick}/>

    </div>
  )
}

export default PromoInfo

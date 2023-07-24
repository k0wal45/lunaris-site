import { Link } from "react-router-dom"

const PromoInfo = () => {
  return (
    <div className="flex justify-center items-center  bg-warning w-full z-50">
      <p>Do końca sierpnia obowiązuje <strong>PROMOCJA NA WSZYSTKO 25%</strong>, <Link to='/kontakt' className="underline hover:scale-110">skontaktuj się z nami już teraz</Link></p>
    </div>
  )
}

export default PromoInfo

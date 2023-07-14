import { Link } from "react-router-dom"

function SwiperItem({name, text, img}) {

  const directory = () => {
    const string = name.toLowerCase().replace(/\s/g, '')

    return string
  }

  return (
    <div class=" px-8 pb-12 mx-auto card w-96 h-[30rem] bg-base-100 lg:shadow-inner rounded-sm z-30 flex flex-col justify-between items-center text-center">
      <figure class="px-10 pt-10">
      <img src={`/jpg/${img}.png`} alt="Planeta" width='100px' className='rotate-12' />
      </figure>


        <h2 class="card-title text-3xl font-hussar">{name}</h2>
        <p>{text}</p>
        <div class="card-actions">
          <button class=" bg-invert btn btn-primary"><Link to={`/oferta/${directory()}`}>Sprawdź Teraz</Link></button>
        </div>

    </div>
  )
}

export default SwiperItem

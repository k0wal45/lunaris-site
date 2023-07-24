import { Link } from "react-router-dom"

function Item({name, text, img}) {

  const directory = () => {
    const string = name.toLowerCase().replace(/\s/g, '')

    return string
  }

  return (
    <div class="mx-auto card w-96 bg-base-100 shadow-lg rounded-sm mb-8">
      <figure class="px-10 pt-10">
      <img src={`/jpg/${img}.png`} alt="Planeta" width='100px' className='rotate-12 aspect-square' />
      </figure>

      <div class="card-body items-center text-center">
        <h2 class="card-title text-3xl font-hussar">{name}</h2>
        <p>{text}</p>
        <div class="card-actions">
          <Link to={`/oferta/${directory()}`}><button class=" bg-invert btn btn-primary">Sprawdź Teraz</button></Link>
        </div>
      </div>     
    </div>
  )
}

export default Item

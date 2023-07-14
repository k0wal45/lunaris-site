import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import photo from '../../assets/jpg/AdvertFirst.png'

function PortfolioItem({img, name, text, title, aos}) {

  useEffect(() => {
		AOS.init();
	}, [])

    const directory = () => {
        const string = name.toLowerCase().replace(/\s/g, '')
    
        return string
      }

  return (
    <article data-aos={aos} class="card lg:card-side bg-base-100 rounded-sm w-full lg:w-[35rem]">
      <figure className="flex-1">
        <img src={img !== '' ? img : photo} alt='Zdjęcie pracy wykonanej dla firmy' className="w-full h-full object-cover "/>
      </figure>
      <div class="card-body bg-primary bg-opacity-40 gap-4 flex-1">
        <span className="opacity-70 text-sm">{title}</span>
        <h2 class="text-2xl font-hussar">{name}</h2>
        <p>{text}</p>
        <div class="card-actions justify-center">
          <Link to={`/portfolio/${directory()}`} className="flex items-center gap-4">
            <span className="hover:underline">Czytaj Więcej</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>
    </article>
  )
}

export default PortfolioItem

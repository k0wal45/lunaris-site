import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function PortfolioItem({img, name, text, aos}) {

  useEffect(() => {
		AOS.init();
	}, [])

  const directory = () => {
    const string = name.toLowerCase().replace(/\s/g, '-')

    return string
  }

  return (

    <article data-aos={aos} class="card w-96 bg-base-100 shadow-xl rounded-sm border-2 border-neutral-200">
      <figure><img src={img} alt="Lunaris Web Realizacja" /></figure>
      <div class="card-body justify-center items-center">
        <h2 class="card-title text-xl font-hussar">{name}</h2>
        <p>{text}</p>
        <div class="card-actions justify-end">
          <Link to={`/portfolio/${directory()}`} className="flex items-center gap-4">
            <span className="hover:underline">Zobacz Więcej</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>
    </article>
  )
}

export default PortfolioItem

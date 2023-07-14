import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Stats({strony, projekty}) {

  useEffect(() => {
		AOS.init();
	}, [])

  const howManyYears = () => {

    const start = new Date(2023, 3, 10).getFullYear()

    const dateNow = new Date().getFullYear()   

    const years = dateNow - start

    if(years >= 1) {
      return years
    }

    return 1

  }

  return (
    <section className="m-auto flex flex-col bg-base-100 lg:flex-row p-4 w-full border-b-2 border-base-200 overflow-hidden">
        <div class="flex-1 p-4 card rounded-box flex flex-col gap-4 text-center lg:text-start">
          <h2 className="font-hussar text-2xl">Wykonanych Stron Internetowych</h2>
          <span data-aos='fade-right' className="text-6xl text-primary font-hussar ml-4">{strony}</span>
        </div>

        <div class="divider lg:divider-horizontal"></div> 

        <div class="flex-1 h-32 p-4 card rounded-box flex flex-col gap-4 text-center lg:text-start">
          <h2 className="font-hussar text-2xl ">Wykonanych Projektów dla firm</h2>
          <span data-aos='fade-up' className="text-6xl text-primary font-hussar ml-4">{projekty}</span>
        </div>

        <div class="divider lg:divider-horizontal"></div> 

        <div class="flex-1 h-32 p-4 card rounded-box flex flex-col gap-4 text-center lg:text-start">
          <h2 className="font-hussar text-2xl">Lat na Rynku</h2>
          <span data-aos='fade-left' className="text-6xl text-primary font-hussar ml-4">{howManyYears()}</span>
        </div>
      </section>
  )
}

export default Stats

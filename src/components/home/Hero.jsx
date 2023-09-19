import { Link } from "react-router-dom"

import person from '../../assets/webp/beztla2.webp'

function Hero() {

return (
		<section className="flex justify-center items-end min-h-screen max-w-screen relative overflow-hidden border-b-2 border-neutral-200 p-4 pb-0">
			<div className="text-start flex flex-col lg:flex-row lg:pb-0 pt-32 lg:pt-0 justify-center items-center gap-24">

				<div className="flex flex-col gap-4 max-w-md">
					<h1 className="text-5xl font-hussar leading-snug">Twój pierwszy krok do sukcesu w sieci</h1>
					<p className="text-xl text-justify" >SW dzisiejszych czasach strona internetowa i efektywny logotyp stanowią kluczowe elementy marketingu, które mają ogromne znaczenie zarówno online, jak i w świecie biznesu poza siecią.</p>
					<Link to='/kontakt'><button className="btn btn-primary">Skontaktuj się po darmową wycenę</button></Link>
				</div>

				<div className="circle-container">
					<img src={person} alt="Daniel Kowalski Zdjęcie" className="max-h-[90vh] block z-20"/>
				</div>

			</div>

    </section>
	)
}

export default Hero

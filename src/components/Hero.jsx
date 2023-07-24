import { Link } from "react-router-dom"
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Hero() {
	useEffect(() => {
		AOS.init();
	}, [])
return (
		<section className="hero min-h-screen max-w-screen relative overflow-hidden bg-hero bg-fixed">
			<div className="hero-overlay bg-base-100 bg-opacity-60"></div>

			<div className="hero-content text-center">
					<div className="max-w-md">
					<h3 className="mb-5 text-4xl lg:text-5xl xl:text-6xl font-hussar" data-aos="fade-right" data-aos-duration="500">Profesjonalne</h3>
					<h1 className="mb-5 text-7xl lg:text-8xl xl:text-9xl font-hussar" data-aos="fade-left" data-aos-duration="600">Strony</h1>
					<h4 className="mb-5 text-5xl lg:text-6xl xl:text-7xl font-hussar" data-aos="fade-left" data-aos-duration="600">Internetowe</h4>
					<p className="mb-5 xl:text-lg" data-aos="fade-right" data-aos-duration="700">Jesteśmy Agencją Marketingową, która głównie zajmuję się tworzeniem stron internetowych, ale nie tylko. Odkryj naszą ofertę już teraz</p>
					<Link to='/kontakt'><button className="btn btn-primary" data-aos="fade-up" data-aos-duration="800">Skontaktuj się po darmową wycenę</button></Link>
					</div>
			</div>

    </section>
	)
}

export default Hero

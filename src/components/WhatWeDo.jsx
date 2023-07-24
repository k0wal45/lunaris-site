import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faEye, faFlask, faPenRuler, faRunning } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import BoxCenter from './subcomponents/BoxCenter'

function WhatWeDo() {
  return (
    <section class="mb-0 lg:my-12 hero p-0 overflow-hidden">
			<div class="hero-content flex-col-reverse lg:flex-row-reverse w-full lg:w-[80vw] p-[1rem] lg:p-0 pb-0">
				<div data-aos='fade-left' className="flex-1 grid place-items-center grid-cols-1 lg:grid-cols-2 lg:gap-8 ">
						<BoxCenter 
							heading='Badanie'
							text='Zrozumienie klienta, branży i konkurencji'
							icon={faFlask}
						/>
						
						<BoxCenter 
							heading='Planowanie'
							text='Cele, narzędzia, komunikacja i budżet'
							icon={faPenRuler}
						/>

						<BoxCenter 
							heading='Działanie'
							text='Kreowanie treści i projektowanie, reklamy'
							icon={faRunning}
						/>

						<BoxCenter 
							heading='Sprawdzanie'
							text='Analiza statystyk, dostosowanie, rezultaty'
							icon={faEye}
						/>
				</div>
				<div className="flex-1">
					<h5 class="text-5xl font-hussar">Jak Pracujemy</h5>
					
					<p class="mt-6">
						Nasza agencja marketingowa specjalizuje się w optymalizacji stron internetowych. Nasz proces składa się z trzech kluczowych etapów: badania, planowania i działania.
					</p>

					<p class="mt-6">
						Najpierw przeprowadzamy dokładne badanie, analizując stronę klienta, konkurencję i trendy w branży. Następnie przechodzimy do planowania, tworząc spersonalizowane strategie uwzględniające cele i oczekiwania klienta. Wdrażamy te strategie, optymalizując stronę pod kątem SEO, wykonując kampanie reklamowe i inne działania marketingowe.
					</p>

					<p class="mt-6">
						Naszym celem jest zwiększenie widoczności strony klienta, generowanie ruchu i pozyskiwanie nowych klientów. Działamy w sposób skoordynowany, przeprowadzając badania, planując strategie i realizując działania marketingowe, aby pomóc naszym klientom osiągnąć sukces online.
					</p>

					<button class="btn btn-secondary shadow-inner mt-10">
						<Link to='/kontakt'>
							<FontAwesomeIcon icon={faArrowRight}/>
							<span className='ml-4 text-lg'>Skontakuj się już Teraz</span>
						</Link>
					</button>
				</div>
			</div>
		</section>
  )
}

export default WhatWeDo

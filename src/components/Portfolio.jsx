import PortfolioItem from "./subcomponents/PortfolioItem"

import oktech from '../assets/jpg/oktech.png'
import bqcars from '../assets/jpg/bqcars.png'
import merkury from '../assets/jpg/merkury.png'
import werva from '../assets/jpg/werva.png'

function Portfolio() {
  return (
    <section className="flex flex-col justify-center items-center text-center mb-0 mt-10 lg:my-10 gap-4 w-full">
      <h3 className="text-3xl lg:text-4xl font-hussar">Sprawdź nasze poprzednie pracę</h3>
      <p className="text-lg opacity-80 p-4">Sprawdź i przeczytaj więcej o naszej pracy współpracowaliśmy, zobacz jakie storny internetowe lub materia reklamowe udało nam się z nimi zrobić</p>
      <div className="flex justify-center items-stretch flex-wrap mt-4 lg:gap-8">
        <PortfolioItem 
          aos='fade-up'
          name='BQ Cars Katowice' 
          img={bqcars} text='Wypożyczalnia Samochodów z Katowic, Zajeliśmy się identyfikacją firmy w sieci i poza nią. Stworzyliśmy Stronę internetową banery rollupy oraz logotyp' 
          title='Wypożyczalnia Samochodów' 
        />
        <PortfolioItem 
          aos='fade-up'
          name='Merkury Medica' 
          img={merkury} text='Prywatna Klinika z Jastrzębie-Zdrój. Dzięki niskim kosztom naszych usług oraz współpracy z osobami odpowiedzialnymi na Merkury Medica stworzyliśmy dla nich Logotyp oraz inne materiały' 
          title='Prywatna Klinika' 
        />
        <PortfolioItem 
          aos='fade-up'
          name='Oktech Klimatyzacje' 
          img={oktech} text='Zaprzyjaźniona firma zajmująca się miedzy innymi monateżem i serwisem klimatyzacji ale i wiele więcej. Podczas naszej współpracy stworzyliśmy dla tej firmy stronę internetową' 
          title='Firma Transportowa' 
        />
        <PortfolioItem 
          aos='fade-up'
          name='Werva Solutions' 
          img={werva} text='Między innymi doradztwo finansowe ale Werva Solutions to firma zajmująca się wszelakimi usługami. Współpraca z Wervą zaowocowała w logotyp oraz inne materiały reklamowe' 
          title='Doradztwo Finansowe' 
        />
      </div>
    </section>
  )
}

export default Portfolio

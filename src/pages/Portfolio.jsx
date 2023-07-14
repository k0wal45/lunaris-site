import PortfolioItem from '../components/subcomponents/PortfolioItem'

function Portfolio() {

  return (
    <main className="flex flex-wrap justify-center items-stretch text-center mb-0 mt-24 w-full ">
      <h3 className="text-3xl lg:text-4xl font-hussar my-4">Sprawdź nasze poprzednie pracę</h3>
      <p className="text-lg opacity-80 p-4 mb-4">Sprawdź i przeczytaj więcej o naszej pracy współpracowaliśmy, zobacz jakie storny internetowe lub materia reklamowe udało nam się z nimi zrobić</p>
      {/* <section className="flex justify-center items-stretch flex-wrap mt-4 lg:gap-8">
        <div data-aos='fade-up' class="card lg:card-side bg-base-100 rounded-sm w-full lg:w-[35rem]">
          <figure className="flex-1">
            <img src={photo} alt='Zdjęcie pracy wykonanej dla firmy' className="w-full h-full object-cover "/>
          </figure>
          <div class="card-body bg-primary bg-opacity-40 gap-4 flex-1">
            <span className="opacity-70 text-sm">Wypożyczalnia Samochodów</span>
            <h2 class="text-2xl font-hussar">BQ Cars Katowice</h2>
            <p>Wypożyczalnia Samochodów z Katowic, Zajeliśmy się identyfikacją firmy w sieci i poza nią. Stworzyliśmy Stronę internetową banery rollupy oraz logotyp. ale przeczytaj o tym wiecej klikając w przycisk niżej</p>
            <div class="card-actions justify-center">
              <Link to='/portfolio/bqcarskatowice' className="flex items-center gap-4">
                <span className="hover:underline">Czytaj Więcej</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          </div>
        </div>
      </section> */}
      <PortfolioItem 
          aos='fade-up'
          name='BQ Cars Katowice' 
          img='' text='Wypożyczalnia Samochodów z Katowic, Zajeliśmy się identyfikacją firmy w sieci i poza nią. Stworzyliśmy Stronę internetową banery rollupy oraz logotyp' 
          title='Wypożyczalnia Samochodów' 
        />
        <PortfolioItem 
          aos='fade-up'
          name='Merkury Medica' 
          img='' text='Prywatna Klinika z Jastrzębie-Zdrój. Dzięki niskim kosztom naszych usług oraz współpracy z osobami odpowiedzialnymi na Merkury Medica stworzyliśmy dla nich Logotyp oraz inne materiały' 
          title='Prywatna Klinika' 
        />
        <PortfolioItem 
          aos='fade-up'
          name='Oktech Klimatyzacje' 
          img='' text='Zaprzyjaźniona firma zajmująca się miedzy innymi monateżem i serwisem klimatyzacji ale i wiele więcej. Podczas naszej współpracy stworzyliśmy dla tej firmy stronę internetową' 
          title='Firma Transportowa' 
        />
        <PortfolioItem 
          aos='fade-up'
          name='Werva Solutions' 
          img='' text='Między innymi doradztwo finansowe ale Werva Solutions to firma zajmująca się wszelakimi usługami. Współpraca z Wervą zaowocowała w logotyp oraz inne materiały reklamowe' 
          title='Doradztwo Finansowe' 
        />
    </main>
  )
}

export default Portfolio

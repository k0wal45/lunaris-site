import PortfolioItem from "../subcomponents/PortfolioItem"

import wizytowki from '../../assets/webp/wizytowki.webp'
import banerR from '../../assets/webp/banerR.webp'
import logoR from '../../assets/webp/logoR.webp'
import strony from '../../assets/webp/strony.webp'

function Portfolio() {
  return (
    <section className="flex flex-col justify-center items-center text-center mb-0 mt-10 lg:my-10 gap-4 w-full">
      <h3 className="text-3xl lg:text-4xl font-hussar">Sprawdź nasze poprzednie pracę</h3>
      <p className="text-lg opacity-80 p-4 w-full lg:max-w-[66vw]">Zapraszamy do zapoznania się z naszą pracą i eksplorowania projektów, nad którymi mieliśmy przyjemność pracować. Odkryj różnorodne strony internetowe oraz materiały reklamowe, które udało nam się stworzyć wspólnie z naszymi klientami.</p>
      <div className="flex justify-center items-stretch flex-wrap mt-4 gap-8">
        <PortfolioItem 
          aos='fade-up'
          name='Strony Internetowe' 
          img={strony} 
          text='Twoja witryna, twoje zasady! Tworzymy strony internetowe, które przyciągają uwagę i wyróżniają się w sieci.' 
        />
        <PortfolioItem 
          aos='fade-up'
          name='Wizytówki' 
          img={wizytowki} 
          text='Mała karta wielkich możliwości. Nasze wizytówki są eleganckie, profesjonalne i niezapomniane.' 
          title='Prywatna Klinika' 
        />
        <PortfolioItem 
          aos='fade-up'
          name='Banery Reklamowe' 
          img={banerR} 
          text='Reklamuj się z rozmachem! Nasze banery reklamowe przyciągają uwagę i klientów.' 
          title='Firma Transportowa' 
        />
        <PortfolioItem 
          aos='fade-up'
          name='Logotypy' 
          img={logoR} 
          text='Twoja tożsamość w jednym obrazku. Projektujemy logotypy, które wyróżniają twój biznes.' 
          title='Doradztwo Finansowe' 
        />
      </div>
    </section>
  )
}

export default Portfolio

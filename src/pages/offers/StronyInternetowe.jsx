import Hero from '../../components/offersComponents/Hero'
import ContactSec from '../../components/ContactSec'
import PortfolioOffer from '../../components/offersComponents/PortfolioOffer'
import Showcase from '../../components/offersComponents/Showcase'
import PortfolioItem from '../../components/subcomponents/PortfolioItem'
import OffersProp from '../../components/offersComponents/OffersProp'

import bqcars from '../../assets/jpg/bqcars.png'
import oktech from '../../assets/jpg/oktech.png'

import websites from '../../assets/jpg/websites.png'
import doWeb1 from '../../assets/jpg/webdev.png'
import doWeb2 from '../../assets/jpg/banerFirst.png'
import doWeb3 from '../../assets/jpg/ecomerce.png'

function StronyInternetowe() {
  return (
    <main className='flex flex-col justify-center items-center w-full'>
      <Hero
        name='Strony Internetowe'
        textHero='
        Posiadanie strony internetowej jest niezwykle istotne dla rozwoju i sukcesu każdej firmy. To wirtualne wizytówka, która umożliwia przedstawienie swojej oferty, usług i produktów szerokiemu gronu potencjalnych klientów.'
        img={websites}
      />

      <OffersProp
        textHead='Nasze Porpozycje Ofert Stron Internetowych'
      >
  
      <Showcase
        img={doWeb1}
        heading= 'Strona wizytówka'
        text='Profesjonalne tworzenie stron wizytówek. Stworzymy dla Ciebie atrakcyjną i przejrzystą stronę, która przedstawi Twoją firmę w najlepszym świetle. Dzięki stronie wizytówce zyskasz profesjonalny wizerunek online oraz łatwiejszy sposób kontaktu dla potencjalnych klientów. Skontaktuj się z nami, aby skorzystać z korzyści, jakie niesie posiadanie dobrze zaprojektowanej strony wizytówki.' 
        subheading='Czas realizacji'
        textSubheading='do 5 dni'
        price='1500'
      />

      <Showcase
        img={doWeb2}
        heading= 'Strona Internetowa'
        text='Zbudujemy dla Ciebie responsywną stronę, która doskonale odzwierciedli Twoją markę i spełni Twoje potrzeby. Dzięki naszej stronie internetowej, będziesz mógł/a przedstawić swoje produkty/usługi szerokiemu gronu klientów, zapewniając im łatwy dostęp do informacji i możliwość kontaktu. Skontaktuj się z nami, aby skorzystać z zalet posiadania profesjonalnie wykonanej strony internetowej. ' 
        subheading='Czas realizacji'
        textSubheading='do 14 dni'
        price='2800'
      />

      <Showcase
        img={doWeb3}
        heading= 'Sklep Internetowy'
        text='Tworzymy sklepy internetowe, które pomagają w sprzedaży Twoich produktów online. Zapewniamy funkcjonalne rozwiązania, które umożliwiają łatwe zakupy klientom. Stworzymy dla Ciebie sklep z intuicyjnym interfejsem, który przyciągnie klientów i zwiększy sprzedaż. Skontaktuj się z nami, aby rozpocząć swoją przygodę ze sprzedażą online.' 
        subheading='Czas realizacji'
        textSubheading='do 31 dni'
        price='3500'
      />


      </OffersProp>

      <PortfolioOffer
        name='e Stroną Internetową'
      >
        <PortfolioItem 
          aos='fade-up'
          name='BQ Cars Katowice' 
          img={bqcars} 
          text='Wypożyczalnia Samochodów z Katowic, Zajeliśmy się identyfikacją firmy w sieci i poza nią. Stworzyliśmy Stronę internetową banery rollupy oraz logotyp' 
          title='Wypożyczalnia Samochodów' 
        />        
        <PortfolioItem 
          aos='fade-up'
          name='Oktech Klimatyzacje' 
          img={oktech} text='Zaprzyjaźniona firma zajmująca się miedzy innymi monateżem i serwisem klimatyzacji ale i wiele więcej. Podczas naszej współpracy stworzyliśmy dla tej firmy stronę internetową' 
          title='Firma Transportowa' 
        />    
      </PortfolioOffer>



      <ContactSec />

    </main>
  )
}

export default StronyInternetowe

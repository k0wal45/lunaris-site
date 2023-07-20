import Hero from '../../components/offersComponents/Hero'
import ContactSec from '../../components/ContactSec'
import PortfolioOffer from '../../components/offersComponents/PortfolioOffer'
import Showcase from '../../components/offersComponents/Showcase'
import PortfolioItem from '../../components/subcomponents/PortfolioItem'
import OffersProp from '../../components/offersComponents/OffersProp'

import bqcars from '../../assets/jpg/bqcars.png'
import merkury from '../../assets/jpg/merkury.png'
import werva from '../../assets/jpg/werva.png'
import oktech from '../../assets/jpg/oktech.png'

import grafika from '../../assets/jpg/grafika.png'

import socialMediaPost from '../../assets/jpg/socialMediaPost.png'
import banerPhoto from'../../assets/jpg/banerFirst.png'
import wizytowka from'../../assets/jpg/wizytowka.png'


function Grafika() {
  return (
    <main className='flex flex-col justify-center items-center w-full'>
      <Hero
        name=' Grafiką Komputerową'
        textHero='Grafika komputerowa jest niezwykle istotna dla sukcesu wizualnego Twojej marki. Dzięki niej możesz wyróżnić się spośród konkurencji, przyciągnąć uwagę klientów i budować pozytywny wizerunek'
        img={grafika}
      />

      <OffersProp
        textHead='Nasze Porpozycje Ofert Grafiki Komputerowej'
      >
        
        <Showcase
          img={socialMediaPost}
          heading= 'Post na Media Społecznościowe'
          text='Stworzymy dla Ciebie treści, które nie tylko wyróżnią się w zatłoczonej przestrzeni mediów społecznościowych, ale także skutecznie przekonają klientów, że Twoje produkty lub usługi są tym, czego potrzebują. Odkryj moc efektywnego marketingu w social media i pozwól nam pomóc Ci osiągnąć sukces!' 
          subheading='Social Media'
          textSubheading='Najważniejszą częścią tego typu strategi są działania firmy w social mediach które razem będziemy monitorować i dostosowywać aby wyciągnąć z tego jak największe zyski'
          price='50'
        /> 

        <Showcase
          img={banerPhoto}
          heading= 'Baner Reklamowy lub informacyjny'
          text='Skoncentrujemy się na budowaniu marki i wizerunku poprzez tworzenie spójnej identyfikacji wizualnej, a także kreowanie wartościowych treści, które będą angażować i informować potencjalnych klientów. W strategii uwzględniony zostanie również marketing treści, który pozwoli na dzielenie się wiedzą i doświadczeniem związanych z branżą, zwiększając tym samym zaufanie i autorytet marki.' 
          subheading='Social Media'
          textSubheading='Najważniejszą częścią tego typu strategi są działania firmy w social mediach które razem będziemy monitorować i dostosowywać aby wyciągnąć z tego jak największe zyski'
          price='100'
        /> 

        <Showcase
          img={wizytowka}
          heading= 'Wizytówki'
          text='Skoncentrujemy się na budowaniu marki i wizerunku poprzez tworzenie spójnej identyfikacji wizualnej, a także kreowanie wartościowych treści, które będą angażować i informować potencjalnych klientów. W strategii uwzględniony zostanie również marketing treści, który pozwoli na dzielenie się wiedzą i doświadczeniem związanych z branżą, zwiększając tym samym zaufanie i autorytet marki.' 
          subheading='Social Media'
          textSubheading='Najważniejszą częścią tego typu strategi są działania firmy w social mediach które razem będziemy monitorować i dostosowywać aby wyciągnąć z tego jak największe zyski'
          price='50'
        /> 

      </OffersProp>

      <PortfolioOffer
        name='Grafiką Komputerową'
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
          name='Merkury Medica' 
          img={merkury}
          text='Prywatna Klinika z Jastrzębie-Zdrój. Dzięki niskim kosztom naszych usług oraz współpracy z osobami odpowiedzialnymi na Merkury Medica stworzyliśmy dla nich Logotyp oraz inne materiały' 
          title='Prywatna Klinika' 
        />    
        <PortfolioItem 
          aos='fade-up'
          name='Werva Solutions' 
          img={werva}
          text='Między innymi doradztwo finansowe ale Werva Solutions to firma zajmująca się wszelakimi usługami. Współpraca z Wervą zaowocowała w logotyp oraz inne materiały reklamowe' 
          title='Doradztwo Finansowe' 
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

export default Grafika

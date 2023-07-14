import {useEffect, useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Item from './subcomponents/Item';


function SwiperItems() {  
  const [dimensions, setDimensions] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setDimensions(window.innerWidth);
    };
    window.addEventListener("load", handleResize, false);
    window.addEventListener("resize", handleResize, false);
  });
  

  return (
  <section>

    <Swiper
      modules={[Pagination]}
      slidesPerView={dimensions > 1020 ? 3 : dimensions > 768 ? 2 : 1}
      pagination={{ clickable: true }}
    >
      
      <SwiperSlide>
        <Item 
          name='Strony Internetowe' 
          text='Tworzenie Stron Internetowych to nasza główna nisza którą się zajmujemy, jesteśmy w stanie zrobić praktycznie wszystko czego potrzebujesz'
          img='czerwona'
        />
      </SwiperSlide>
      
      <SwiperSlide>
        <Item 
          name='Grafika' 
          text='Każda firma potrzebuje w swojej kampani marketingowej Grafiki Komputerowej, tworzymy posty, wizytówki, broszury i wiele wiele więcej'
          img='galaktyka'
        />
      </SwiperSlide>

      <SwiperSlide>
        <Item 
          name='Logotypy' 
          text='Graficzna identyfikacja firmy to jedna z najważniejszych części marketingu, logotyp powinien przyciągać uwagę i wzbudzać zainteresowanie a zarazem zaufanie'
          img='zolta'
        />
      </SwiperSlide>

      <SwiperSlide>
        <Item 
          name='Social Media' 
          text='Budowanie wizerunku firmy w sieci to bardzo ważna część kamopanii marketingowej. Social Media firm mogą nie dość, że zapewnić darmową reklame, ale i również zaufanie dla marki'
          img='saturn'
        />
      </SwiperSlide>
      
      <SwiperSlide>
        <Item 
          name='Strategia Reklamowa' 
          text='Strategia Reklamowa może przynieść wielkie korzyści ale i starty, daltego warto zaufać specjalistą i wraz z nimi wypracować coś co zadziała'
          img='niebieska'
        />
      </SwiperSlide>

      {/* Strategia Reklamowa może przynieść wielkie korzyści ale i starty, daltego warto zaufać specjalistą i wraz z nimi wypracować coś co zadziała */}
    </Swiper>
  </section>

  )
}

export default SwiperItems

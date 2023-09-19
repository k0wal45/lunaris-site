// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import TestimonialItem from './TestimonialItem';

import dariusz from '../../assets/webp/dariusz.webp'
import dorota from '../../assets/webp/dorota.webp'
import wiktor from '../../assets/webp/wiktor.webp'
import malgo from '../../assets/webp/malgo.webp'

const Testimonials = () => {

  return (
    <section className='flex flex-col gap-4 p-4 py-12 '>
      <h6 className="text-3xl font-hussar text-center">Opinie naszych Klientów</h6>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        slidesPerView={1}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full"
      >
        <SwiperSlide>
          <TestimonialItem 
            img={dariusz}
            name='Dariusz Kowalski'
            opinion='Zainwestowałem w tę stronę i nie żałuje! To nie tylko świetnie zaprojektowana witryna, ale też działa jak złoto. Bez zbędnego gadania, polecam ich każdemu, kto chce mocnej strony i obsługi na najwyższym poziomie!'
            rate='5'
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialItem 
            img={dorota}
            name='Dorota Domańska'
            opinion='Polecam super kontakt, indywidualne podejście, szybka realizacja. Jestem bardzo zadowolona ze strony internetowej - uzyskałam efekt, którego oczekiwałam, a dodatkowo otrzymałam mnóstwo sugestii i pomysłów.'
            rate='5 '
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialItem 
            img={wiktor}
            name='Wiktor Rubiński'
            opinion='Bardzo polecam, świetnie wykonane każde zlecenie między innymi strony dla przychodni medycznej, wypożyczalni samochodów czy sklepu z częściami samochodowymi.'
            rate='5'
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialItem 
            img={malgo}
            name='Małgorzata Budzalewicz'
            opinion='Jestem bardzo zadowolona z wykonanej usługi. Jestem laikiem w dziedzinie informatyki a dzięki Panu Danielowi mam profesjonalna stronę.  Polecam wszystkim'
            rate='4'
          />
        </SwiperSlide>

      </Swiper>
    </section>
  );
}

export default Testimonials


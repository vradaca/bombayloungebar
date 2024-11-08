import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import '../css/KartaPica.css';
import slika1 from '../media/FrontCover.png';
import slika2 from '../media/1Strana.png';
import slika3 from '../media/2Strana_.png';
import slika4 from '../media/3Strana.png';
import slika5 from '../media/4Strana.png';
import slika6 from '../media/BackCover.png';

function CarouselPage() {
  return (
    <div className="carousel-page">
      <h1>Karta Pića</h1>
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 5000, // 5 seconds
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        loop
        className="carousel"
      >
        <SwiperSlide><img src={slika1} alt="Korica pocetak" /></SwiperSlide>
        <SwiperSlide><img src={slika2} alt="Strana 1" /></SwiperSlide>
        <SwiperSlide><img src={slika3} alt="Strana 2" /></SwiperSlide>
        <SwiperSlide><img src={slika4} alt="Strana 3" /></SwiperSlide>
        <SwiperSlide><img src={slika5} alt="Strana 4" /></SwiperSlide>
        <SwiperSlide><img src={slika6} alt="Korica kraj" /></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CarouselPage;

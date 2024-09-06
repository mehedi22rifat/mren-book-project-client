
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './BannerSlider.css';

// import required modules
import { EffectCards } from 'swiper/modules';
const Slider = () => {
    
    return (
        <div className='bookSlider'>
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
          </Swiper>
        </div>
      );
};

export default Slider;
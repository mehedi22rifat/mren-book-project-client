import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <div>
       <h1 className="text-center font-bold text-5xl my-10">Our Customers</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <TestimonialCard></TestimonialCard>
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard></TestimonialCard>
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard></TestimonialCard>
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard></TestimonialCard>
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard></TestimonialCard>
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard></TestimonialCard>
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard></TestimonialCard>
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard></TestimonialCard>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonials;

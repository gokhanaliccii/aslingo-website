// // Import Swiper React components
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination  } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import Swiper styles
import 'swiper/css';
import Slide from './Slide';
import AnimatedElement from "../utils/AnimatedElement";

export default () => {
  const swiperRef = useRef();
  return (
    <AnimatedElement animationClass="animate__zoomIn">

    <Swiper
    className=" bg-bgColor  text-cora px-10"
      spaceBetween={50}
      slidesPerView={1}
      autoplay
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      // onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
  

      modules={[Pagination, Navigation,Autoplay ]}
    >
      <SwiperSlide><Slide/></SwiperSlide>
      <SwiperSlide><Slide/></SwiperSlide>
      <SwiperSlide><Slide/></SwiperSlide>
      
    </Swiper>
    </AnimatedElement>
  );
};

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination  } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import 'swiper/css';

import "./swiperStyle.css";
import ReviewSlide from "./ReviewSlide";
import AnimatedElement from "../utils/AnimatedElement";
const ReviewSwiper = () => {
    const swiperRef = useRef();
    
      
  return (
    
    <AnimatedElement animationClass="animate__zoomIn">

    <section id="testimonials" className=" mx-auto max-w-7xl p-10  sm:px-6 lg:px-16 ">
        <div className="mb-5 ">
            <span className="text-sm text-gray-500 font-medium text-center block mb-2">TESTIMONIAL</span>
            <h2 className="text-4xl text-center font-bold text-gray-900 ">What our happy user says!</h2>
        </div>
        <Swiper
      className=" pt-6 custom-swiper  text-cora "
        spaceBetween={32}
        slidesPerView={1}
        autoplay
        loop
        centeredSlides
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}     
        breakpoints= {{
            640: {
              slidesPerView: 1,
              spaceBetween: 32,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 32,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
        }
        }
        modules={[Pagination, Navigation,Autoplay ]}
      >
        <SwiperSlide><ReviewSlide/></SwiperSlide>
        <SwiperSlide><ReviewSlide/></SwiperSlide>
        <SwiperSlide><ReviewSlide/></SwiperSlide>
        <SwiperSlide><ReviewSlide/></SwiperSlide>      
     </Swiper>
</section>
</AnimatedElement>

  )
}

export default ReviewSwiper
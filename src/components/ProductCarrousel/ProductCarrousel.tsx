import React from 'react'
import './ProductCarrousel.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

function ProductCarrousel() {
  return (
    <div className='carrousel'>
        <h2>Best sellers</h2>
        <hr/>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiperProducts"
      >
        <SwiperSlide className='swipercards'>Slide 1</SwiperSlide>
        <SwiperSlide className='swipercards'>Slide 2</SwiperSlide>
        <SwiperSlide className='swipercards'>Slide 3</SwiperSlide>
        <SwiperSlide className='swipercards'>Slide 4</SwiperSlide> 
      </Swiper>
    </div>
  )
}

export default ProductCarrousel
import React from 'react'
import './BannerCarrousel.scss'
import images from '../../assets/images';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

function BannerCarrousel() {
  return (
    <div className='mainBanner'>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiperBanner"
      >
        <SwiperSlide className='bannerImg'>
            <img src={images.clothingBanner.src} alt='banner'></img>
        </SwiperSlide>
        <SwiperSlide className='bannerImg'>
            <img src={images.coupleBanner.src} alt='banner'></img>
        </SwiperSlide>
        <SwiperSlide className='bannerImg'>
            <img src={images.streetBanner.src} alt='banner'></img>
        </SwiperSlide>
        <SwiperSlide className='bannerImg'>
            <img src={images.classygirlBanner.src} alt='banner'></img>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default BannerCarrousel
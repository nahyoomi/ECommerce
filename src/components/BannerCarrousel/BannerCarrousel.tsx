import React, {useEffect, useState} from 'react'
import './BannerCarrousel.scss'
import images from '../../assets/images';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import {IDataOnlyProps} from '../../Types/types';

function BannerCarrousel({setAdjustment, adjustment}:IDataOnlyProps) {

  const handleChange = () => {
    setAdjustment(window.innerWidth);
  }
  
  useEffect(()=> {
    window.addEventListener("resize", handleChange);
  }, [])

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
          {adjustment <= 1024 
            ?  <img src={images.clothingBanner.src}></img>
            :  <img src={images.DesktopBanner1.src}></img>
          }    
        </SwiperSlide>
        <SwiperSlide className='bannerImg'>
        {adjustment <= 1024 
            ?  <img src={images.coupleBanner.src}></img>
            :  <img src={images.DesktopBanner1.src}></img>
        } 
        </SwiperSlide>
        <SwiperSlide className='bannerImg'>
        {adjustment <= 1024 
            ?  <img src={images.streetBanner.src}></img>
            :  <img src={images.DesktopBanner2.src}></img>
        }   
        </SwiperSlide>
        <SwiperSlide className='bannerImg'>
        {adjustment <= 1024 
            ?  <img src={images.classygirlBanner.src}></img>
            :  <img src={images.DesktopBanner3.src}></img>
        }     
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default BannerCarrousel
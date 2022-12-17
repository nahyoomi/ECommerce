import React, {useEffect} from 'react'
import './ProductCarrousel.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import { HiOutlineStar } from "react-icons/hi2";
import images from '../../assets/images';
import {IDataOnlyProps} from '../../types';
import {ChangeShelf} from '../../services';

function ProductCarrousel({setAdjustment, adjustment}:IDataOnlyProps) {

  const handleChange = () => {
    setAdjustment(window.innerWidth);
  }
  
  useEffect(()=> {
    window.addEventListener("resize", handleChange);
  }, [])
  return (
    <div className='carrousel'>
        <h2>Best sellers</h2>
        <hr/>
      <Swiper
        slidesPerView={ChangeShelf(adjustment)}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiperProducts"
      >
        <SwiperSlide className='swipercards'>
          <ul className='cardContainer'>
            <li className='cardContainer_image'>
              <img src={images.shoe.src}></img>
            </li>
            <li className='cardContainer_item'>
              <p>BLACK FLOAT SHOE</p>
            </li>
            <li className='cardContainer_icons'>
              <HiOutlineStar> </HiOutlineStar>
              <HiOutlineStar> </HiOutlineStar>
              <HiOutlineStar> </HiOutlineStar>
              <HiOutlineStar> </HiOutlineStar>
              <HiOutlineStar> </HiOutlineStar>
              <HiOutlineStar> </HiOutlineStar>
            </li>
            <li className='cardContainer_pricecross'><p> of $399.00</p></li>
            <li className='cardContainer_price'><p>por $259.90</p></li>
            <li className='cardContainer_btn'><button>BUY</button></li>
          </ul>
        </SwiperSlide>
        <SwiperSlide className='swipercards'>
        <ul className='cardContainer'>
            <li className='cardContainer_image'>
              <img src={images.sandal.src}></img>
            </li>
            <li className='cardContainer_item'>
              <p>BLACK FLOAT SHOE</p>
            </li>
            <li className='cardContainer_icons'>
              <HiOutlineStar> </HiOutlineStar>
              <HiOutlineStar> </HiOutlineStar>
              <HiOutlineStar> </HiOutlineStar>
              <HiOutlineStar> </HiOutlineStar>
              <HiOutlineStar> </HiOutlineStar>
              <HiOutlineStar> </HiOutlineStar>
            </li>
            <li className='cardContainer_pricecross'><p> of $399.00</p></li>
            <li className='cardContainer_price'><p>por $259.90</p></li>
            <li className='cardContainer_btn'><button>BUY</button></li>
          </ul>
        </SwiperSlide>
        <SwiperSlide className='swipercards'>Slide 3</SwiperSlide>
        <SwiperSlide className='swipercards'>Slide 4</SwiperSlide> 
      </Swiper>
    </div>
  )
}

export default ProductCarrousel
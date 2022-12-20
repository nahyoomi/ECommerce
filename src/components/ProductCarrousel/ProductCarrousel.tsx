import React, {useEffect, useState} from 'react'
import './ProductCarrousel.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import {IDataOnlyProps} from '../../Types/types';
import {ChangeShelf} from '../../Utils/helpers';
import ProductsJson from '../../Data/products.json';
import Shelf from '../Shelf/Shelf';
import {allWoman, allMen} from '../../Utils/helpers';

function ProductCarrousel({setAdjustment, adjustment}:IDataOnlyProps) {
  const [products, setProducts] = useState(ProductsJson) 
  const [productsWoman, setProductsWoman] = useState(allWoman(products)) 
  const [productsMen, setProductsMen] = useState(allMen(products)) 

  const handleChange = () => {
    setAdjustment(window.innerWidth);
  }
  
  useEffect(()=> {
    window.addEventListener("resize", handleChange);
  }, [])
  
  return (
    <div className='carrousel'>
      <div className='carrousel_women'>
      <h2>Women</h2>
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
        {productsWoman.map((item)=>(
          <SwiperSlide key={item.productId}className='swipercards'>
            <Shelf item={item}/>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
      <div className='carrousel_men'>
      <h2>Men</h2>
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
        {productsMen.map((item)=>(
          <SwiperSlide key={item.productId}className='swipercards'>
            <Shelf item={item}/>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>   
    </div>
  )
}

export default ProductCarrousel
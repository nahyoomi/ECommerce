import React, {useEffect, useState} from 'react'
import './ProductCarrousel.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import { HiOutlineStar } from "react-icons/hi2";
import images from '../../assets/images';
import {IDataOnlyProps} from '../../Types/types';
import {ChangeShelf} from '../../Services/services';
import ProductsJson from '../../Data/products.json';
import Shelf from '../Shelf/Shelf';
import {allWoman} from '../../Utils/helpers';
import {IProduct} from '../../Types/types'

function ProductCarrousel({setAdjustment, adjustment}:IDataOnlyProps) {
  const [products, setProducts] = useState(ProductsJson) 
  const [productsWoman, setProductsWoman] = useState(allWoman(products)) 

  const handleChange = () => {
    setAdjustment(window.innerWidth);
  }
  
  useEffect(()=> {
    console.log(productsWoman);
    
    window.addEventListener("resize", handleChange);
  }, [])
  
  return (
    <div className='carrousel'>
        <h2>Woman</h2>
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
        {productsWoman.map((woman)=>(
          <SwiperSlide key={woman.productId}className='swipercards'>
            <Shelf woman={woman}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ProductCarrousel
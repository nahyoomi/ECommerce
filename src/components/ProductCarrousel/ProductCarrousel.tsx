import {useEffect, useContext} from 'react'
import './ProductCarrousel.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import {IDataFilterProps} from '../../Types/types';
import {ChangeShelf} from '../../Utils/helpers';
import Shelf from '../Shelf/Shelf';
import { GlobalContext } from '../../Contexts/DataContext';

function ProductCarrousel({category}:IDataFilterProps) {
  const { adjustment, setAdjustment}: any = useContext(GlobalContext);
  
  const handleChange = () => {
    setAdjustment(window.innerWidth);
  }
  
  useEffect(()=> {
    window.addEventListener("resize", handleChange);
  }, [])
  
  return (
    <div className='carrousel'>
      <div className='carrousel__category'>
      <Swiper
        slidesPerView={ChangeShelf(adjustment)}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="myswiperproducts"
      >
        {category.map((item)=>(
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
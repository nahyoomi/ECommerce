import React, {useContext, useEffect, useState} from 'react'
import Layout from '../../components/Layout/Layout'
import { HiArrowNarrowLeft } from "react-icons/hi";
import {NavLink, useParams} from "react-router-dom"
import './PDP.scss'
import ProductCarrousel from '../../components/ProductCarrousel/ProductCarrousel';
import { GlobalContext } from '../../Contexts/DataContext';
import { IProduct } from '../../Types/types';
import {getProduct} from '../../Utils/helpers'
import Swal from 'sweetalert2'

function PDP() {
    const [ item, setItem]= useState<IProduct> ()
    const {products, orderData, setOrderData,productsRecommended}: any = useContext(GlobalContext)
    const {id} = useParams();
    console.log(id)

    

    useEffect(()=>{
        setItem(getProduct(products, id ))
    }, [])

    const handleBuy = (event:any) => {
        Swal.fire({
            title: 'Sucess!',
            text: 'Product has been added to your cart',
            icon: 'success',
            confirmButtonText: 'Ok'
          })

        const findRepeatElement = orderData.find((element: any)=>element.productId === item?.productId)
    
        if(findRepeatElement){
          
          const newOrder = {
            ...findRepeatElement,
            "installments": [
              {
                "quantity": findRepeatElement.installments[0].quantity + 1,
                "value": findRepeatElement.installments[0].value
              }
            ]
          }
          const nOrder= orderData.filter((element:any)=> element.productId !== item?.productId )
          setOrderData(
             [...nOrder,newOrder ]
          )
          console.log("findRepeatElement",nOrder);
          return;
        }
        
        setOrderData([...orderData,item])
        console.log('clickbuyshelf', orderData);
    }

   if(item === undefined ) {
    <p>Loading...</p>
   }else {
  return (
    <Layout>
    <>
        <div className='pdpsection'>
            <section className='pdpsection__backpage'>
                <NavLink to={'/shop'}>
                    <HiArrowNarrowLeft></HiArrowNarrowLeft> 
                    <span>Back to shop</span>
                </NavLink>
            </section>
        <div className='pdpsection__fullproduct'>
            <section className='section__image'>
                <img  className='mainimage'src={item.imageUrl}/>
                <div className='section__image--pics'>
                    <div className='image__one'>
                        <img src={item.imageUrl}/>
                    </div>
                    <div className='image__two'>
                        <img src={item.imageUrl}/>
                    </div>
                </div>
            </section>
            <section className='section__details'>
                <div className='container'>
                <h3 className='section__details--name'>{item.productName}</h3>
                <p className='section__details--description'> {item.productDetail} </p>
                <p className='section__details--select'>Type of the product</p>
                <div>
                <select className='section__details--selector'>
                    <option>--Select--</option>
                    {
                        item.size.map((item)=>(
                            <option> {item} </option>
                        ))
                    }
                </select>
                </div>
                <div className='section__details--sdk'>
                    <p>Choose color</p>
                    {
                        item.color.map((item)=>(
                            <input type='button'className={item}/>
                        ))
                    }
                </div>
                <p className='section__details--price'> $105.67 </p>
                <input 
                    className='section__details--btn'
                    type='button'
                    value='Add To Cart'
                    onClick={handleBuy}
                />
                </div>
            </section>
        </div>
            
        </div> 
        <h2 className='tittle'>Recommended</h2>
        <hr className='line'/>
        <ProductCarrousel category={productsRecommended} />
    </>
    </Layout>
  )
}
}

export default PDP
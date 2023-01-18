import React, {useContext, useEffect, useState} from 'react'
import Layout from '../../components/Layout/Layout'
import { HiArrowNarrowLeft } from "react-icons/hi";
import {useParams} from "react-router-dom"
import './PDP.scss'
import { GlobalContext } from '../../Contexts/DataContext';
import { IProduct } from '../../Types/types';
import {getProduct} from '../../Utils/helpers'

function PDP() {
    const [ item, setItem]= useState<IProduct> ()
    const {products}: any = useContext(GlobalContext)
    const {id} = useParams();
    console.log(id)

    useEffect(()=>{
        setItem(getProduct(products, id ))
    }, [])

   if(item === undefined ) {
    <p>Loading...</p>
   }else {
  return (
    <Layout>
    <>
        <div className='pdpsection'>
            <section className='pdpsection__backpage'>
                <a href='/shop'>
                    <HiArrowNarrowLeft></HiArrowNarrowLeft> 
                    <span>Back to shop</span>
                </a>
            </section>
        <div className='pdpsection__fullproduct'>
            <section className='section__image'>
                <img src={item.imageUrl}/>
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
                <p className='section__details--title'>Salt</p>
                <h3 className='section__details--name'>{item.productName}</h3>
                <p className='section__details--description'> little desccription of th product to capture clients attention dolelorem ipsumfsfic dsidhffk jfdh djdhdj.</p>
                <p className='section__details--select'>Type of the product</p>
                <div>
                <select className='section__details--selector'>
                    <option>--Select--</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                </select>
                </div>
                <div className='section__details--sdk'>
                    <p>Choose color</p>
                    <input type='radio'/>
                    <input type='radio'/>
                    <input type='radio'/>
                    <input type='radio'/>
                    <input type='radio'/>
                    <input type='radio'/>
                </div>
                <span className='section__details--price'> $105.67 </span>
                <input className='section__details--btn'
                    type='button'
                    value='Add To Cart'
                />
                </div>
            </section>
        </div>
            
        </div> 
    </>
    </Layout>
  )
}
}

export default PDP
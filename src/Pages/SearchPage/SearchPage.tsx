import React, { useContext, useEffect} from 'react'
import {NavLink, useParams} from "react-router-dom"
import Layout from '../../components/Layout/Layout'
import PLPGrid from '../../components/PLPGrid/PLPGrid';
import {GlobalContext} from '../../Contexts/DataContext'
import ProductCarrousel from '../../components/ProductCarrousel/ProductCarrousel';
import './SearchPage.scss'

function SearchPage() {
    const {productSerch, setProductSerch,products,productsRecommended}: any = useContext(GlobalContext)

    const {word} = useParams();

    useEffect(()=>{
        let filter = products.filter((element:any) => element.productName.toUpperCase().includes(word?.toUpperCase()) );
        setProductSerch(filter)
        
    },[word])

  return (
    <div>
      <Layout>
        <>
            {
                productSerch.length>0
                &&
                <p>se encontraron  {productSerch.length} productos con la palabra "{word}"</p> 
            }
            <PLPGrid products={productSerch}/>
            {
                productSerch.length<=0
                &&
                <div>
                    <h2> no esta el producto que buscas con la palabra "{word }"</h2>
                    <h2> te invitamos revisar nustro catalogo</h2>
                    <NavLink to={'/shop'} className='navigatelink'>Catalogo de produtos</NavLink>
                    <h2 className='tittle'>Recommended</h2>
                    <hr className='line'/>
                    <ProductCarrousel category={productsRecommended} />
                </div>
                

                
            }
        </>
      </Layout>  
    </div>
  )
}

export default SearchPage
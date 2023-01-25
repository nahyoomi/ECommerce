import { useContext, useEffect} from 'react';
import {GlobalContext} from '../../Contexts/DataContext';
import {NavLink, useParams} from "react-router-dom";
import Layout from '../../components/Layout/Layout';
import PLPGrid from '../../components/PLPGrid/PLPGrid';
import ProductCarrousel from '../../components/ProductCarrousel/ProductCarrousel';
import './SearchPage.scss';

function SearchPage() {
    const {productSerch, setProductSerch,products,productsRecommended}: any = useContext(GlobalContext);

    const {word} = useParams();

    useEffect(()=>{
        let filter = products.filter((element:any) => element.productName.toUpperCase().includes(word?.toUpperCase()));
        setProductSerch(filter);
    },[word])

  return (
    <div className='research'>
      <Layout>
        <>
        {
          productSerch.length>0
          &&
          <p className='research__text'>Found <strong>{productSerch.length}</strong> products under "<strong>{word}</strong>" word.</p> 
        }
        <PLPGrid products={productSerch}/>
          {
            productSerch.length<=0
            &&
            <div>
              <p className='research__text'>We haven´t located any product with "<strong>{word }</strong>" word.</p>
              <p className='research__text'>We invite you to take a look at our catalog</p>
              <NavLink to={'/shop'} className='research__link'><p>Products Catalog</p></NavLink>
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

export default SearchPage;
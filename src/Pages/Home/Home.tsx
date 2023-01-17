import {useState, useContext} from 'react'
import Layout from '../../components/Layout/Layout'
import BannerCarrousel from '../../components/BannerCarrousel/BannerCarrousel';
import ProductCarrousel from '../../components/ProductCarrousel/ProductCarrousel';
import SubscriptionForm from '../../components/SubscriptionForm/SubscriptionForm';
import { allWoman, allMen } from '../../Utils/helpers';
import {GlobalContext} from '../../Contexts/DataContext';

function Home() {
  const { products } : any = useContext(GlobalContext);
  const [productsFeatured, setProductsFeatured] = useState(allWoman(products)) 
  const [productsRecommended, setProductsRecommended] = useState(allMen(products));

  return (
    <Layout>
      <>
        <BannerCarrousel />
        <h2>Featured</h2>
        <hr/>
        <ProductCarrousel category={productsFeatured} />
        <h2>Recommended</h2>
        <hr/>
        <ProductCarrousel category={productsRecommended} />
        <SubscriptionForm />
      </>
    </Layout>
  )
}

export default Home
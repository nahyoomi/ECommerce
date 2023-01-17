import React,{useState} from 'react'
import Layout from '../../components/Layout/Layout'
import BannerCarrousel from '../../components/BannerCarrousel/BannerCarrousel';
import ProductCarrousel from '../../components/ProductCarrousel/ProductCarrousel';
import SubscriptionForm from '../../components/SubscriptionForm/SubscriptionForm';

function Home() {
  const [adjustment, setAdjustment ] = useState(window.innerWidth);
  return (
    <Layout>
      <>
        <BannerCarrousel setAdjustment={setAdjustment} adjustment={adjustment}/>
        <ProductCarrousel setAdjustment={setAdjustment} adjustment={adjustment}/>
        <SubscriptionForm />
      </>
    </Layout>
  )
}

export default Home
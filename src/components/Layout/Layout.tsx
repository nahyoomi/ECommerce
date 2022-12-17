import React, {useState} from 'react'
import BannerCarrousel from '../BannerCarrousel/BannerCarrousel';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ProductCarrousel from '../ProductCarrousel/ProductCarrousel';
import SubscriptionForm from '../SubscriptionForm/SubscriptionForm';
import './Layout.scss'


function Layout() {
  const [adjustment, setAdjustment ] = useState(window.innerWidth);

  return (
    <div className='container'>
      <Header />
      <main>
        <BannerCarrousel setAdjustment={setAdjustment} adjustment={adjustment}/>
        <ProductCarrousel setAdjustment={setAdjustment} adjustment={adjustment}/>
        <SubscriptionForm />
      </main>
      <Footer />

    </div>
  )
}

export default Layout
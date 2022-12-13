import React from 'react'
import BannerCarrousel from '../BannerCarrousel/BannerCarrousel';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ProductCarrousel from '../ProductCarrousel/ProductCarrousel';
import SubscriptionForm from '../SubscriptionForm/SubscriptionForm';
import './Layout.scss'


function Layout() {
  return (
    <div className='container'>
      <Header />
      <main>
        <BannerCarrousel />
        <ProductCarrousel />
        <SubscriptionForm />
      </main>
      <Footer />

    </div>
  )
}

export default Layout
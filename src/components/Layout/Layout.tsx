import React, {useState} from 'react'
import BannerCarrousel from '../BannerCarrousel/BannerCarrousel';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ProductCarrousel from '../ProductCarrousel/ProductCarrousel';
import SubscriptionForm from '../SubscriptionForm/SubscriptionForm';
import './Layout.scss'

interface Props {
  children: JSX.Element;
}

function Layout( { children }: Props ) {
  const [adjustment, setAdjustment ] = useState(window.innerWidth);

  return (
    <div className='container'>
      <Header adjustment={adjustment}/>
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
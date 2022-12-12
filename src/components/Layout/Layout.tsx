import React from 'react'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SubscriptionForm from '../SubscriptionForm/SubscriptionForm';
import './Layout';

function Layout() {
  return (
    <div className='container'>
      <Header />
      <main>
        <SubscriptionForm />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
import React from 'react'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Layout.scss'
import { IPropsChildren } from '../../Types/types';

function Layout( { children }: IPropsChildren  ) {

  return (
    <div className='container'>
      <Header />
        <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
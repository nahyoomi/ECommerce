import React, {useContext} from 'react'
import Filter from '../../components/Filter/Filter'
import Layout from '../../components/Layout/Layout'
import Orderby from '../../components/Orderby/Orderby'
import PLPGrid from '../../components/PLPGrid/PLPGrid'
import {GlobalContext} from '../../Contexts/DataContext'
import './Shop.scss'

function Shop() {
  const {products}: any = useContext(GlobalContext)
  return (
    <Layout>
      <section className='section'>
        <div className='section__orderby'>
          <Orderby/>
        </div>
        <div className='section__container'>
            <Filter/>
            <Orderby/>
            <PLPGrid products ={products}/>
        </div>
      </section>
    </Layout>
  )
}

export default Shop
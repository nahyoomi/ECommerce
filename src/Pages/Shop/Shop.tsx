import React from 'react'
import Filter from '../../components/Filter/Filter'
import Layout from '../../components/Layout/Layout'
import Orderby from '../../components/Orderby/Orderby'
import PLPGrid from '../../components/PLPGrid/PLPGrid'
import './Shop.scss'
function Shop() {
  return (
    <Layout>
      <section className='section'>
        <div className='section__orderby'>
          <Orderby/>
        </div>
        <div className='section__container'>
            <Filter/>
            <Orderby/>
            <PLPGrid/>
        </div>
      </section>
    </Layout>
  )
}

export default Shop
import React, {useContext} from 'react'
import BannerCarrousel from '../../components/BannerCarrousel/BannerCarrousel'
import Layout from '../../components/Layout/Layout'
import PLPGrid from '../../components/PLPGrid/PLPGrid'
import Shelf from '../../components/Shelf/Shelf'
import {GlobalContext} from '../../Contexts/DataContext'
import './Featured.scss'

function Featured() {
  const {productsFeatured}: any = useContext(GlobalContext)
  return (
    <Layout>
      <>
      <section className='secfeatured__banner'>
        <BannerCarrousel/>
      </section>
      <section className='secfeatured__products'>
        <PLPGrid products ={productsFeatured}/>
      </section>
      </>
    </Layout>
  )
}

export default Featured
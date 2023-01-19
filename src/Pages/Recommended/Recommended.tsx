import React, {useContext} from 'react'
import BannerCarrousel from '../../components/BannerCarrousel/BannerCarrousel'
import Layout from '../../components/Layout/Layout'
import PLPGrid from '../../components/PLPGrid/PLPGrid'
import { GlobalContext } from '../../Contexts/DataContext'
import './Recommended.scss'
function Recommended() {
  const { productsRecommended }: any= useContext(GlobalContext)
  return (
    <Layout>
      <>
      <section>
        <BannerCarrousel/>
      </section>
        <section className='boxing'>
          <PLPGrid products={productsRecommended}/>
        </section>
      </>
    </Layout>
  )
}

export default Recommended
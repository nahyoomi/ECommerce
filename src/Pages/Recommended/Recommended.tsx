import React, {useContext} from 'react'
import BannerCarrousel from '../../components/BannerCarrousel/BannerCarrousel'
import Layout from '../../components/Layout/Layout'
import PLPGrid from '../../components/PLPGrid/PLPGrid'
import { GlobalContext } from '../../Contexts/DataContext'

function Recommended() {
  const { productsRecommended }: any= useContext(GlobalContext)
  return (
    <Layout>
      <>
      <section>
        <BannerCarrousel/>
      </section>
      <section>
        <PLPGrid products={productsRecommended}/>
      </section>
      </>
    </Layout>
  )
}

export default Recommended
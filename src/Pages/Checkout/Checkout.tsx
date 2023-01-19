import React from 'react'
import CheckoutStepOne from '../../components/CheckoutStepOne/CheckoutStepOne'
import Layout from '../../components/Layout/Layout'
import Tracking from '../../components/Tracking/Tracking'

function Checkout() {
  return (
    <Layout>
      <>
        <Tracking/>
        <CheckoutStepOne/>
      </>
    </Layout>
  )
}

export default Checkout
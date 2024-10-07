import React from 'react'
import Banner from '../components/Banner'
import HowItWorks from '../components/HowItWorks'
import ProductRelatedImage from '../components/ProductRelatedImage'
import ContactUs from '../components/ContactUs'
import AboutUs from '../components/AboutUs'

export default function HomePage() {
  return (
    <div className='bg-white'>
        <Banner/>
        <HowItWorks/>
        <ProductRelatedImage/>
        <ContactUs/>
        <AboutUs/>
    </div>
  )
}

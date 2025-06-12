import React from 'react'
import Header from '../components/Header'
import Carousel from '../components/Carousel'
import ProductList from '../components/ProductList'
import ImageCollage from '../components/ImageCollage'
import Footer from '../components/Footer'

function Homepage() {
  return (
    <div className='homePage'>
        <Carousel />
        <ProductList />
        <ImageCollage />
        <Footer />
    </div>
  )
}

export default Homepage
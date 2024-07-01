import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import ProductList from '../Components/ProductList'
import Footer from '../Components/Footer'


function HomePage() {
  return (
    <div>
        <Header />
        
        <Hero />
        <ProductList />
        <Footer />
    </div>
  )
}

export default HomePage
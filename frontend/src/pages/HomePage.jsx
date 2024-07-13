import React from 'react'

import Footer from '../components/Footer'
import ContactSection from '../components/ContactSection'
import ServicesSection from '../components/ServicesSection'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
function HomePage() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <ServicesSection/>
       <ContactSection/>
      <Footer/>
    </>
  )
}

export default HomePage

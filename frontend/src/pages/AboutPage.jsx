import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

function AboutPage() {

  const navigate=useNavigate();
  const handleclick=()=>{
    navigate("/services")
  }
  return (
    <>
<Header/>
<section className="py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">About Us</h2>
        <p className="text-lg text-gray-700 mb-8">Our aim is to create a greater experience for our customers,users and with you.</p>
        <p className="text-lg text-gray-700 mb-8">Experience our service and enhace your websites.</p>
        <a onClick={handleclick} href="#servicesPage" className="bg-blue-500 text-white py-3 px-6 rounded-full font-semibold shadow-md hover:bg-blue-600 transition duration-300">
          Learn More
        </a>
      </div>
    </section>
<Footer/>
    </>
  )
}

export default AboutPage

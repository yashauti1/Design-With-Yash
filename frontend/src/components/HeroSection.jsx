import React from 'react'
import heroImage from "../assets/uiuxdevlop.png"
import {  useNavigate } from 'react-router-dom';


function HeroSection() {
  const navigate=useNavigate();
  
  const handlelogin=()=>{
    navigate('/login')
  }
  const handleregister=()=>{
    navigate('/register');
  }
  return (
    
      <section className='flex justify-center items-center '>
       <div className="md:w-1/2 mt-8 md:mt-0">
          <img src={heroImage} alt="Hero" className="w-full h-auto rounded" />
        </div>

        <div className="right">
            <h1 className='text-4xl font-bold text-gray-800 mb-4'>Design and Develope with Yash</h1>
            <h4 className='text-gray-600 mb-8'>Make your website look like a heaven by collaborating with us enhance user experience and kill in the market.</h4>
            <button onClick={handlelogin} className='bg-[#79ad1a] text-white py-2 px-4 rounded mr-4 hover:bg-[#5fa306]'>Login</button>
            <button onClick={handleregister} className='bg-[#5fa306] text-white py-2 px-4 rounded mr-4 hover:bg-[#79ad1a]'>Register</button>
        </div>
      </section>
  
  )
}

export default HeroSection;

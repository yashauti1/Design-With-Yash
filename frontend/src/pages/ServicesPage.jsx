
import React from 'react';
import ServiceCard from '../components/ServiceCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ServicesPage = () => {
  

  
  return (
    <>
    <Navbar />
    <div className="py-16 px-4">
      
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Our Services</h2>
        <p className="text-lg text-gray-700 mb-8 text-left">
        1. UI Design
Create visually appealing and intuitive user interfaces that enhance user experience and engagement. Our UI design services focus on combining aesthetics with usability to deliver interfaces that are both beautiful and functional.
<br />
<br />
2. UX Design
Craft seamless and user-centric experiences across digital platforms. Our UX design services prioritize understanding user behaviors and preferences to optimize interaction flows and drive conversions.
<br />
<br />
3. Web Development
Develop high-performance websites tailored to meet your business objectives. From responsive design to robust backend solutions, we ensure your website not only looks great but also performs efficiently across all devices.
<br />
<br />
Why Choose Us?
Expertise: Our team comprises skilled designers and developers dedicated to delivering top-notch solutions.
Customization: Tailored designs and functionalities to align with your brand and user expectations.
Innovation: Constantly evolving strategies and technologies to stay ahead in the digital landscape.
Whether you're looking to revamp your existing website or start from scratch, we're here to transform your vision into reality. Partner with us to elevate your online presence and achieve your business goals.
   
        </p>
        
          <ServiceCard/>
         
      </div>
      
    </div>
    <Footer />
    </>
  );
};

export default ServicesPage;
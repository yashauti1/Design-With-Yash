import React from 'react';
import uiimage from '../assets/representations-user-experience-interface-design.jpg';
import uximage from '../assets/3593965.jpg';
import devimage from '../assets/3426526.jpg';
import { useNavigate } from 'react-router-dom';
const ServiceCard = () => {
const navigate=useNavigate();
  const handleBookNow=()=>{
    navigate('/bookingpage');
  }
  const services = [
    {
      title: 'UI Design',
      description: 'We provide top-notch UI design services to create visually appealing and user-friendly interfaces.',
      image: uiimage,
      price: '$500'
    },
    {
      title: 'UX Design',
      description: 'Our UX design services ensure a seamless and engaging user experience for your applications.',
      image: uximage,
      price: '$600'
    },
    {
      title: 'Web Development',
      description: 'We develop high-performance websites with clean code and responsive designs.',
      image: devimage,
      price: '$800'
    },
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <p className="text-lg font-bold text-gray-800 mt-4">{service.price}</p>
              <button onClick={handleBookNow} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;

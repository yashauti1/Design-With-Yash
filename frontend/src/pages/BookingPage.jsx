//src/pages/BookingPage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { baseUrl } from '../apiConfig';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// const BookingPage = () => {

  
//   const [formData, setFormData] = useState({
//     email: '',
//     serviceName: '',
//     serviceRequest: '',
//   });
//   const [showPopup, setShowPopup] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(`${baseUrl}/api/user/booking`, formData);
//       if (response.status === 201) {
//         setShowPopup(true);
//         setTimeout(() => setShowPopup(false), 3000);
//         setFormData({
//           email: '',
//           serviceName: '',
//           serviceRequest: '',
//         });
//       }
//     } catch (error) {
//       console.error('Error booking service:', error);
//     }
   
//   };

//   return (
//     <>
//     <Navbar/>
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">Book a Service</h2>
//       <form className="bg-white shadow-md rounded p-4" onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
//             Email:
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="w-full px-3 py-2 border border-gray-300 rounded-md"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="serviceName">
//             Service Name:
//           </label>
//           <input
//             type="text"
//             id="serviceName"
//             name="serviceName"
//             value={formData.serviceName}
//             onChange={handleChange}
//             required
//             className="w-full px-3 py-2 border border-gray-300 rounded-md"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="serviceRequest">
//             What You Want in Service:
//           </label>
//           <textarea
//             id="serviceRequest"
//             name="serviceRequest"
//             value={formData.serviceRequest}
//             onChange={handleChange}
//             required
//             className="w-full px-3 py-2 border border-gray-300 rounded-md"
//           ></textarea>
//         </div>
//         <button onClick={handleSubmit}
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//         >
//           Book Service
//         </button>
//       </form>
//       {showPopup && (
//         <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-md">
//           Your request is accepted. We will contact you soon.
//         </div>
//       )}
//       <Footer/>
//     </div>
//     </>
//   );
// };

// export default BookingPage;


const BookingPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    serviceName: '',
    customerNeed: '', // Adjusted to match backend expectation
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}/api/user/booking`, formData);
      if (response.status === 201) {
        toast.success('Booking request sent successfully!');
        setFormData({
          email: '',
          serviceName: '',
          customerNeed: '', // Reset the field after successful booking
        });
      }
    } catch (error) {
      toast.error('Error booking service. Please try again.');
      console.error('Error booking service:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Book a Service</h2>
        <form className="bg-white shadow-md rounded p-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="serviceName">
              Service Name:
            </label>
            <input
              type="text"
              id="serviceName"
              name="serviceName"
              value={formData.serviceName}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="customerNeed">
              What You Want in Service:
            </label>
            <textarea
              id="customerNeed"
              name="customerNeed"
              value={formData.customerNeed}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Book Service
          </button>
        </form>
        <ToastContainer />
      </div>
      <Footer />
    </>
  );
};

export default BookingPage;


// import React, { useState } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';
// import { baseUrl } from '../apiConfig';

// const ContactSection = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const validateForm = () => {
//     let valid = true;
//     let errors = {};

//     if (!formData.name) {
//       valid = false;
//       errors.name = 'Name is required';
//     }

//     if (!formData.email) {
//       valid = false;
//       errors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       valid = false;
//       errors.email = 'Email address is invalid';
//     }

//     if (!formData.subject) {
//       valid = false;
//       errors.subject = 'Subject is required';
//     }

//     if (!formData.message) {
//       valid = false;
//       errors.message = 'Message is required';
//     }

//     setErrors(errors);
//     return valid;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       try {
//         const response = await axios.post(`${baseUrl}/api/user/contact`, formData);
//         if (response.status === 200) {
//           toast.success('Message sent successfully!');
//           setFormData({
//             name: '',
//             email: '',
//             subject: '',
//             message: "",
//           });
//           setErrors({});
//         } else {
//           toast.error('Failed to send message. Please try again.');
//         }
//       } catch (error) {
//         toast.error('An error occurred. Please try again.');
//         console.error('Contact form submission error:', error);
//       }
//     }
//   };

//   return (
//     <section className="bg-gray-100 py-20 px-4">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-4xl font-bold text-gray-800 mb-12">Contact Us</h2>
//         <form  className="bg-white p-8 rounded-lg shadow-md">
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''}`}
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//             />
//             {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
//               placeholder="Your Email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//             {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
//               Subject
//             </label>
//             <input
//               type="text"
//               id="subject"
//               name="subject"
//               className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.subject ? 'border-red-500' : ''}`}
//               placeholder="Subject"
//               value={formData.subject}
//               onChange={handleChange}
//             />
//             {errors.subject && <p className="text-red-500 text-xs italic">{errors.subject}</p>}
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
//               Message
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.message ? 'border-red-500' : ''}`}
//               rows="4"
//               placeholder="Your Message"
//               value={formData.message}
//               onChange={handleChange}
//             />
//             {errors.message && <p className="text-red-500 text-xs italic">{errors.message}</p>}
//           </div>
//           <div className="flex items-center justify-between">
//             <button onClick={handleSubmit}
//               type="submit"
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//               Send Message
//             </button>
//           </div>
//         </form>
//         <ToastContainer />
//       </div>
//     </section>
//   );
// };

// export default ContactSection;


import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { baseUrl } from '../apiConfig';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let valid = true;
    let errors = {};

    if (!formData.name) {
      valid = false;
      errors.name = 'Name is required';
    }

    if (!formData.email) {
      valid = false;
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      valid = false;
      errors.email = 'Email address is invalid';
    }

    if (!formData.subject) {
      valid = false;
      errors.subject = 'Subject is required';
    }

    if (!formData.message) {
      valid = false;
      errors.message = 'Message is required';
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await axios.post(`${baseUrl}/api/user/contact`, formData);
        console.log('Response status:', response.status);
        console.log('Response data:', response.data);

        if (response.status === 201) {
          toast.success('Message sent successfully!');
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: "",
          });
          setErrors({});
        } else {
          toast.error(`Failed to send message. Status code: ${response.status}`);
          console.error('Unexpected response:', response);
        }
      } catch (error) {
        toast.error(`An error occurred: ${error.message}`);
        console.error('Contact form submission error:', error);
      }
    }
  };

  return (
    <section className="bg-gray-100 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Contact Us</h2>
        <form className="bg-white p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''}`}
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.subject ? 'border-red-500' : ''}`}
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
            {errors.subject && <p className="text-red-500 text-xs italic">{errors.subject}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.message ? 'border-red-500' : ''}`}
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <p className="text-red-500 text-xs italic">{errors.message}</p>}
          </div>
          <div className="flex items-center justify-between">
            <button onClick={handleSubmit}
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </section>
  );
};

export default ContactSection;

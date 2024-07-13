
import React from 'react'
import { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginPage() {

  const navigate=useNavigate();
    const [formData,setFormData]=useState({
        email: '',
        password: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('/api/user/login', formData);
          if (response.data.token) {
            // Store the token in localStorage or cookies
            localStorage.setItem('token', response.data.token);
            // Navigate to profile or home page
            navigate('/home');
          } else {
            toast.error('Login failed. Please check your credentials.');
          }
        } catch (error) {
          toast.error('An error occurred during login. Please try again.');
          console.error('Login error:', error);
        }
      };
  return (
    <>
      <div className="login max-w-md mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Login</h1>
      <form className="bg-white p-8 rounded-lg shadow-md" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center justify-between mb-4">
          <Link to="/forgot-password" className="text-blue-500 hover:text-blue-700 text-sm">Forgot Password?</Link>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </div>
        <div className="mt-4">
          <p className="text-gray-700 text-sm">
            No account? <Link to="/register" className="text-blue-500 hover:text-blue-700">Register</Link>
          </p>
        </div>
      </form>
      <ToastContainer />
      </div>
    </>
  )
}

export default LoginPage


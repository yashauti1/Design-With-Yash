// // src/App.jsx
// import React from 'react'
// import {
//   createBrowserRouter,
//   RouterProvider,
  
  
// } from "react-router-dom";
// import Header from './components/Header'
// import HeroSection from './components/HeroSection'
// import ServicesSection from './components/ServicesSection'
// import ContactSection from './components/ContactSection'
// import Footer from './components/Footer'
// import ServicesPage from './pages/ServicesPage';
// import RegisterPage from './pages/RegisterPage';
// import LoginPage from './pages/LoginPage';
// import Hero from './components/Hero';
// import Navbar from './components/Navbar';
// import ServiceCard from './components/ServiceCard';
// import HomePage from './pages/HomePage';
// import GalaryPage from './pages/GalaryPage';
// import BookingPage from './pages/BookingPage';
// import ContactPage from './pages/ContactPage';
// import AboutPage from './pages/AboutPage';
// import Profile from './components/Profile';
// import Layout from './components/Layout';
// import PortfolioPage from './pages/PortfolioPage';
// import axios from "axios";
// import { Toaster } from "react-hot-toast";
// import LandingPage from './pages/LandingPage';
// import { baseUrl } from './apiConfig';
// import { ProfileProvider } from './context/profileContext';


// import { AuthProvider } from './context/authContext';
// function App() {


//   const router= createBrowserRouter([
//     {
//       path:"/",
//       element:<Layout/>,
//       children:[
//         {
//           path:"/",
//           element:<LandingPage/>,
//         },
//         {
//           path:"/home",
//           element:<HomePage/>
//         },
//         {
//           path:"/galary",
//           element:<GalaryPage/>,
//         },
//         {
//           path:"/contact",
//           element:<ContactPage/>,
//         },
//         {
//           path:"/about",
//           element:<AboutPage/>,

//         },
//         {
//           path:"/login",
//           element:<LoginPage/>,
//         },
//         {
//           path:"/register",
//           element:<RegisterPage/>,
//         },
//         {
//           path:"/services",
//           element:<ServicesPage/>,
//         },
//         {
//           path:"/profile",
//           element:<Profile/>,
//         },
//         {
//           path:"/portfolio",
//           element:<PortfolioPage/>,
//         },
//        {
//         path:"/bookingpage",
//         element:<BookingPage/>,
//        }
//       ],
//     },
//   ])
//   axios.defaults.baseURL = baseUrl;
//   axios.defaults.withCredentials = true;

//   return (
//     <AuthProvider>
//       <ProfileProvider>
//         <RouterProvider router={router} />
//         <Toaster />
//       </ProfileProvider>
//     </AuthProvider>
//   );
// }

//export default App

// src/App.jsx
import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  
  
} from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider, useAuth } from "./context/authContext";
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import ServicesPage from './pages/ServicesPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ServiceCard from './components/ServiceCard';
import HomePage from './pages/HomePage';
import GalaryPage from './pages/GalaryPage';
import BookingPage from './pages/BookingPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import Profile from './components/Profile';
import Layout from './components/Layout';
import PortfolioPage from './pages/PortfolioPage';
import axios from "axios";
import { Toaster } from "react-hot-toast";
import LandingPage from './pages/LandingPage';
import { baseUrl } from './apiConfig';
import { ProfileProvider } from './context/profileContext';








function App() {


  const router= createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<LandingPage/>,
        },
        {
          path:"/home",
          element:<HomePage/>
        },
        {
          path:"/galary",
          element:<GalaryPage/>,
        },
        {
          path:"/contact",
          element:<ContactPage/>,
        },
        {
          path:"/about",
          element:<AboutPage/>,

        },
        {
          path:"/login",
          element:<LoginPage/>,
        },
        {
          path:"/register",
          element:<RegisterPage/>,
        },
        {
          path:"/services",
          element:<ServicesPage/>,
        },
        {
          path:"/profile",
          element:<Profile/>,
        },
        {
          path:"/portfolio",
          element:<PortfolioPage/>,
        },
       {
        path:"/bookingpage",
        element:<BookingPage/>,
       }
      ],
    },
  ])
  axios.defaults.baseURL = baseUrl;
  axios.defaults.withCredentials = true;

  return (

    
    <>
    <AuthProvider>
        <RouterProvider router={router} />
        <Toaster />
        </AuthProvider>
        </>
    
   
  );
}


export default App;
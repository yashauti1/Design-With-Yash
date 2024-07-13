// src/AuthContext.js
// import React, { createContext, useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// // Create a Context
// const AuthContext = createContext();

// // Provider component
// const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Check authentication status on component mount
//     checkAuth();
//   }, []);

//   const checkAuth = async () => {
//     try {
//       const response = await axios.get('/api/user/check-auth');
//       if (response.data.isAuthenticated) {
//         setIsAuthenticated(true);
//         setUser(response.data.user);
//       } else {
//         setIsAuthenticated(false);
//         setUser(null);
//       }
//     } catch (error) {
//       console.error('Error checking authentication status', error);
//       setIsAuthenticated(false);
//       setUser(null);
//     }
//   };

//   const login = async (credentials) => {
//     try {
//       const response = await axios.post('/api/user/login', credentials);
//       if (response.data.isAuthenticated) {
//         setIsAuthenticated(true);
//         setUser(response.data.user);
//         navigate('/');
//       } else {
//         setIsAuthenticated(false);
//         setUser(null);
//       }
//     } catch (error) {
//       console.error('Error logging in', error);
//     }
//   };

//   const logout = async () => {
//     try {
//       await axios.post('/api/user/logout');
//       setIsAuthenticated(false);
//       setUser(null);
//       navigate('/login');
//     } catch (error) {
//       console.error('Error logging out', error);
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export { AuthContext, AuthProvider };

import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuth(); // Check authentication on component mount
  }, []);

  const checkAuth = () => {
    const token = Cookies.get("authToken");
    console.log("Checking authentication...");
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
    // Logging to verify the value of isAuthenticated
    console.log("isAuthenticated after checkAuth:", token ? true : false);
  };

  const logout = () => {
    Cookies.remove("authToken");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, checkAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

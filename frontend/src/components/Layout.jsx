import React, { useEffect } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { useAuth } from '../context/authContext';

const Layout = () => {
  
  
  // Logging to verify the value of isAuthentica
    const { isAuthenticated, checkAuth } = useAuth();
    
    // Logging to verify the value of isAuthenticated
    console.log("isAuthenticated:", isAuthenticated);
  
    useEffect(() => {
      checkAuth();
    }, [checkAuth]);
  

  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
};

export default Layout;

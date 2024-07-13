// import React from 'react'
// import { Link,useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/authContext';
// function Header() {
//   const navigate = useNavigate();
//   const { isAuthenticated } = useAuth();

//   const handleclick = () => {
//     if (isAuthenticated) {
//       navigate('/contact');
//     } else {
//       // Redirect to login page or show message
//       navigate('/login'); // Example redirect to login page
//     }
//   };
//   return (
//     <div className="p-8 flex justify-between items-center bg-[#c4c4c5]">
//      <div className="logo text-[#0000ff] text-2xl font-bold font-poppins">
//         DesignWithYash
//      </div>

//      <div className="mid  text-1xl font-bold font-poppins flex gap-8">
//       <Link to="/home">Home</Link>
//     <Link to="/about">About</Link>
//     <Link to="/services">Services</Link>
//     <Link to="/galary">Galary</Link>
    
//      </div>

//      <div className="left mr-5">
//      <button onClick={handleclick} className="bg-[#5fa306] text-white py-2 px-4 rounded hover:bg-[#79ad1a]">Contact Us</button>
//      </div>
//     </div>
//   )
// }

// export default Header;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext'; // Adjust the path as per your project structure

function Header() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleNavigation = (path) => {
    if (isAuthenticated) {
      navigate(path);
    } else {
      // Redirect to login page or show message
      navigate('/login'); // Example redirect to login page
    }
  };

  return (
    <div className="p-8 flex justify-between items-center bg-[#c4c4c5]">
      <div className="logo text-[#0000ff] text-2xl font-bold font-poppins">
        DesignWithYash
      </div>

      <div className="mid text-1xl font-bold font-poppins flex gap-8">
        <button onClick={() => handleNavigation('/home')}>Home</button>
        <button onClick={() => handleNavigation('/about')}>About</button>
        <button onClick={() => handleNavigation('/services')}>Services</button>
        <button onClick={() => handleNavigation('/gallery')}>Gallery</button>
        <button onClick={() => handleNavigation('/portfolio')}>Portfolio</button>
      </div>

      <div className="left mr-5">
        <button
          onClick={() => handleNavigation('/contact')}
          className="bg-[#5fa306] text-white py-2 px-4 rounded hover:bg-[#79ad1a]"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default Header;

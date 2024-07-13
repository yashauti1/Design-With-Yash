import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  //const { logout, isAuthenticated } = useAuth();
  const navigate=useNavigate();
  //useEffect(() => {
   // if (!isAuthenticated) {
    //  navigate("/login");
  //  }
  //}, [isAuthenticated, navigate]);

  const handleLogout = () => {
    
    navigate("/");
  };
  return (
    <div className="p-8 flex justify-between items-center bg-[#c4c4c5]">
    <div className="logo text-[#0000ff] text-2xl font-bold font-poppins">
       DesignWithYash
    </div>

    <div className="mid  text-1xl font-bold font-poppins flex gap-8">
    <Link to="/home" className="hover:text-gray-400">Home</Link>
    <Link to="/about" className="hover:text-gray-400">About</Link>
    <Link to="/services" className="hover:text-gray-400">Services</Link>
    <Link to="/portfolio" className="hover:text-gray-400">Portfolio</Link>
    <Link to="/galary" className="hover:text-gray-400">Galary</Link>
    {/* <Link to="/profile" className="hover:text-gray-400">Profile</Link> */}
    
   
    </div>

    <div className="left mr-5">
    <button onClick={handleLogout} className="bg-[#e534b9] text-white py-2 px-4 rounded hover:bg-[#ec68cb] ">logout</button>
    </div>
   </div>
  )
}

export default Navbar

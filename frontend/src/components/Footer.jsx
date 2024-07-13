// src/components/Footer.jsx
import React from 'react';
import { FaInstagram, FaTwitter } from 'react-icons/fa'; // Import social media icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-white text-lg mb-4">Follow us on social media</p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.instagram.com/yashauti.in?igsh=Y3N5ajU3d243a2py"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://x.com/auti_yash66698"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaTwitter size={24} />
          </a>
        </div>
        <p className="text-gray-400 mt-4">&copy; {new Date().getFullYear()} DesignWithYash. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

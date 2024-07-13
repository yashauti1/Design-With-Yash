import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import Chatapp from "../assets/chattapp.jpg"
import portfolioimg from "../assets/portfolio.png"
import designimg from "../assets/designwithyash.png"
const projects = [
  {
    title: 'Chat Application',
    image: Chatapp,
    description: 'Developed a real time chatt application using MERN.',
    Visit: 'https://github.com/yourusername/project-one',
  },
  {
    title: 'Portfolio Website',
    image: portfolioimg,
    description: 'Developed a portfolio website using (Html,Css,Javascript,Gsap,Locomotivejs)',
    Visit: 'https://yashautiportfolio.netlify.app/',
  },
  {
    title: 'DesignWithYash Website',
    image: designimg,
    description: 'Developed a website using MERN STACK .Which offers service related to design and development of the website to make customes happy',
    Visit: 'https://github.com/yourusername/project-three',
  },
];

const Portfolio = () => {
  return (
    <section className="bg-gray-100 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.Visit}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                <FaGithub className="inline-block mr-2" />
                Visit
              </a>
            </div>
          ))}
        </div>
        <div className="flex justify-center space-x-4">
          <a href="https://www.linkedin.com/in/yashauti/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-500">
            <FaLinkedin size={30} />
          </a>
          <a href="https://x.com/auti_yash66698" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
            <FaTwitter size={30} />
          </a>
          <a href="https://www.instagram.com/yashauti.in?igsh=Y3N5ajU3d243a2py" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-400">
            <FaInstagram size={30} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;


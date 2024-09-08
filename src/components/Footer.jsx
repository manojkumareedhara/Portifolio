import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import { SectionWrapper } from '../hoc';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-transparent border-2 rounded-xl text-white py-8 z-10">
          <div className="container mx-auto">
              </div>
              <div className='flex  flex-wrap flex-1 px-6 pb-4'>
               <h2 className="text-gray-300 text-2xl font-bold ml-32">Download my CV here </h2>
            <a
              href='/Manoj_Kumar_Eedhara_CV.pdf'
              download
              className="text-white hover:text-green-400 transition duration-300"
            >
              <HiDownload className='ml-56' size={32} />
            </a>
              </div>
        <div className="flex flex-col md:flex-row justify-between items-center px-6">
          
            <h2 className="text-2xl font-bold ml-32">You can Follow my work here</h2>
            
          
          <div className="flex space-x-4 px-20 mr-80">
            <a
              href="https://www.linkedin.com/in/your-linkedin-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition duration-300"
            >
              <FaLinkedin size={32} />
            </a>
            <a
              href="https://github.com/your-github-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition duration-300"
            >
              <FaGithub size={32} />
            </a>
            
          </div>
             
      </div>
    </footer>
  );
};

export default SectionWrapper(Footer,'resume');
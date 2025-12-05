import { useState } from 'react';
import { Shield } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className="fixed top-0 w-full bg-(--background) text-(--foreground) border-b border-(--ring)/30 ">
      <div className="max-w-7xl  sm:px-6 lg:px-8 flex items-center justify-between h-16">
        
   
        <div className="flex  md:flex md:items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
          <Shield className="w-8 h-8 text-(--primary)" />
          <span className="text-xl font-bold bg-linear-to-r from-[#3399ff] to-[#00eaff]  bg-clip-text text-transparent">
            CyberGuardians
          </span>
        </div>

        
        <button
          className="sm:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-(--primary) ml-auto mx-8"
          onClick={handleToggle}
          aria-label="Toggle menu"
        >
          {mobileMenu ? (
            <span className="text-2xl">&times;</span>
          ) : (
            <span className="text-2xl">&#9776;</span>
          )}
        </button>


        <ul className={`sm:flex gap-6 absolute sm:static top-16 left-0 w-full sm:w-auto bg(--background) sm:bg-transparent transition-all duration-300 text-left px-4 space-y-2 pt-2 ${mobileMenu ? 'block' : 'hidden'}`}>
         
          <li>
            <a href="#about" className=" px-4 py-2 text-(--foreground) hover:text-(--primary)">
              About
            </a>
          </li>
          <li>
            <a href="#services" className=" px-4 py-2 text-(--foreground) hover:text-(--primary)">
             Services
            </a>
          </li>
          <li>
            <a href="#contact" className=" px-4 py-2 text-(--foreground) hover:text-(--primary)">
             Contact
            </a>
          </li>
          {/* <li>
            <a href="#testimonials" className="px-4 py-2 text-(--foreground) hover:text-(--primary)">
              Testimonials
            </a>
          </li> */}
        </ul>

        <div className='me-4 '>
            <button className='bg-linear-to-r from-[#3399ff] to-[#00eaff] w-40 h-10 text-gray-700 font-bold rounded-sm hidden sm:block' onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                Get Started
            </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;

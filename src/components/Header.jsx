// Header.js
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const navLinks = [
  {
    text: "Home",
    to: "/"
  },
  {
    text: "About Us",
    to: "/about"
  },
  {
    text: "Academics",
    to: "/academics"
  },
  {
    text: "Admissions",
    to: "/admissions"
  },
  {
    text: "Faculty",
    to: "/faculty"
  },
  {
    text: "Students",
    to: "/students"
  },
  {
    text: "Gallery",
    to: "/gallery"
  },
  {
    text: "Contact Us",
    to: "/contact"
  },
]

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(window.innerWidth > 1024)

  useEffect(() => {
    const handleResize = () => {
      setMenuOpen(window.innerWidth > 1024);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="bg-blue-900 text-white px-4 py-6">
      <nav className="container mx-auto flex justify-between">
        <div className="text-xl font-bold ">
          <Link to="/">Springdale Public School</Link>
        </div>
        {!menuOpen && <div className='lg:hidden' onClick={() => setMenuOpen(true)}><FontAwesomeIcon icon={faBars} size='xl' /></div>}

        <ul className={`${!menuOpen ? "w-[0%]" : "max-lg:w-[60%]"} transition-all duration-00 flex space-x-5 max-lg:flex-col max-lg:fixed max-lg:z-20 max-lg:bg-blue-900 max-lg:top-0 max-lg:pt-16 max-lg:left-0 max-lg:h-screen max-lg:items-center max-lg:space-x-0 max-lg:space-y-8`}>
          {menuOpen && <div className='absolute top-8 right-10 lg:hidden' onClick={() => setMenuOpen(false)}><FontAwesomeIcon icon={faXmark} size='xl' /></div>}
          {
            navLinks.map(navLink => (
              <li key={navLink.text}><NavLink to={navLink.to} className={({ isActive }) =>
                `${!menuOpen ? 'hidden' : ''} ${isActive ? 'hover:text-gray-300 border-b-2' : 'hover:text-gray-300'}`
              }>{navLink.text}</NavLink></li>
            ))
          }

        </ul>
      </nav>
    </header>
  );
};

export default Header;

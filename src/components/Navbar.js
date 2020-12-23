import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
   const [show, setShow] = useState(false);

   useEffect(() => {
      window.addEventListener('scroll', () => {
         if (window.scrollY > 100) {
            setShow(true);
         } else setShow(false);
      });
      return () => {
         window.removeEventListener('scroll');
      };
   }, []);

   return (
      <div className={`nav ${show && 'nav-black'}`}>
         <div className="nav-container">
            <Link to="/" className="link">
               <img className="nav-logo" src={logo} alt="Movieflix Logo" />
            </Link>

            <img
               className="nav-avatar"
               src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
               alt="Avatar"
            />
         </div>
      </div>
   );
}

export default Navbar;

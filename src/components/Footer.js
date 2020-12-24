import React from 'react';
import './Footer.css';
import GitHub from '../github.svg';
import Linkedin from '../linkedin.svg';

function Footer() {
   return (
      <div className="footer">
         <div className="footer-info">
            <p>
               Movieflix is an open-source application created by Adnan Hakim
            </p>
            <p>
               The entire source code of this application can be found{' '}
               <a
                  href="https://github.com/adnanhakim/react-movieflix"
                  target="_blank"
                  rel="noreferrer"
                  className="link footer-link">
                  here
               </a>
            </p>
         </div>

         <div className="footer-links">
            <a
               href="https://github.com/adnanhakim/"
               target="_blank"
               rel="noreferrer"
               title="View my Projects on GitHub"
               className="link footer-link">
               <img src={GitHub} alt="" />
            </a>
            <a
               href="https://www.linkedin.com/in/adnanhakim/"
               target="_blank"
               rel="noreferrer"
               title="View my Profile on Linkedin"
               className="link footer-link">
               <img src={Linkedin} alt="" />
            </a>
         </div>
      </div>
   );
}

export default Footer;

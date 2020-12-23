import React from 'react';
import './Backdrop.css';
import requests from '../requests';

function Backdrop({ url, title, date, tagline, overview }) {
   function getYear(release_date) {
      if (release_date) return release_date.substr(0, 4);
      else return '';
   }

   return (
      <header
         className="backdrop"
         style={{
            backgroundSize: 'cover',
            backgroundImage: `url(${requests.imageUrl}${url})`,
            backgroundPosition: 'center center',
         }}>
         <div className="backdrop-card">
            <div className="movie-header-info">
               <h1 className="backdrop-title title">{title}</h1>
               <h2 className="backdrop-tagline title">
                  {getYear(date)} &#8226; {tagline}
               </h2>
               <p className="backdrop-overview">{overview}</p>
            </div>
         </div>

         <div className="backdrop-fade-bottom"></div>
      </header>
   );
}

export default Backdrop;

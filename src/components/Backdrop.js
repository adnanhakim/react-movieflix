import React from 'react';
import './Backdrop.css';
const imageUrl = 'https://image.tmdb.org/t/p/original';

function Backdrop({ url }) {
   return (
      <header
         className="backdrop"
         style={{
            backgroundSize: 'cover',
            backgroundImage: `url(${imageUrl}${url})`,
            backgroundPosition: 'center center',
         }}>
         <div className="banner-fade-bottom"></div>
      </header>
   );
}

export default Backdrop;

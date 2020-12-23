import React from 'react';
import './Credit.css';
const imageUrl = 'https://image.tmdb.org/t/p/original';

function Credit({ url, name, character }) {
   return (
      <div className="credit">
         <img className="credit-image" src={imageUrl + url} alt="" />
         <p className="credit-character">
            <span className="credit-name">{name}</span>
            <br /> as {character}
         </p>
      </div>
   );
}

export default Credit;

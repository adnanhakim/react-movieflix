import React from 'react';
import Season from './Season';
import './Seasons.css';

function Seasons({ seasons }) {
   return (
      <div className="seasons">
         <h1 className="seasons-title title">Seasons</h1>
         <div className="seasons-list">
            {seasons && seasons.map((season) => <Season season={season} />)}
         </div>
      </div>
   );
}

export default Seasons;

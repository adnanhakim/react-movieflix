import React from 'react';
import './Season.css';
import requests from '../requests';

function Season({ season }) {
   return (
      <div className="season-card">
         <div className="season-card-poster">
            <img
               src={requests.imageUrl + season.poster_path}
               alt={season.name}
            />
         </div>
         <div className="season-card-info">
            <h1 className="season-card-title title">{season.name}</h1>
            <p className="season-card-overview description">
               {season.overview}
            </p>
            <p className="season-card-details title">
               Season{' '}
               <span className="season-card-seasons">
                  {season.season_number}
               </span>{' '}
               &#8226;{' '}
               <span className="season-card-episodes">
                  {season.episode_count} episodes
               </span>
            </p>
         </div>
      </div>
   );
}

export default Season;

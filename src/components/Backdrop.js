import React from 'react';
import './Backdrop.css';
import requests from '../requests';
import { getReleaseYear } from '../methods';

function Backdrop({ movie, mediaType }) {
   return (
      <header
         className="backdrop"
         style={{
            backgroundSize: 'cover',
            backgroundImage: `url(${requests.imageUrl}${movie.backdrop_path})`,
            backgroundPosition: 'center center',
         }}>
         <div className="backdrop-card">
            <div className="movie-header-info">
               <h1 className="backdrop-title title">
                  {movie.title || movie.name || movie.original_name}
               </h1>
               <h2 className="backdrop-tagline title">
                  {getReleaseYear(movie, mediaType)} &#8226; {movie.tagline}
               </h2>
               <p className="backdrop-overview">{movie.overview}</p>
            </div>
         </div>

         <div className="backdrop-fade-bottom"></div>
      </header>
   );
}

export default Backdrop;

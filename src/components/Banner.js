import React, { useState, useEffect } from 'react';
import './Banner.css';
import requests from '../requests';
import axios from '../axios';

function Banner() {
   const [movie, setMovie] = useState({});

   useEffect(() => {
      async function fetchData() {
         const request = await axios.get(requests.fetchNetflixOriginals);
         setMovie(
            request.data.results[
               Math.floor(Math.random() * request.data.results.length - 1)
            ]
         );
      }
      fetchData();
   }, []);

   function truncate(str, n) {
      return str?.length > n ? str.substr(0, n - 1) + '...' : str;
   }

   return (
      <header
         className="banner"
         style={{
            backgroundSize: 'cover',
            backgroundImage: `url(${requests.imageUrl}${movie?.backdrop_path})`,
            backgroundPosition: 'center center',
         }}>
         <div className="banner-contents">
            <h1 className="banner-title title">
               {movie?.title || movie?.name || movie?.original_name}
            </h1>

            <div className="banner-buttons">
               <button className="banner-button play-button button">
                  Play
               </button>
               <button className="banner-button button">More Info</button>
            </div>

            <p className="banner-description description">
               {truncate(movie?.overview, 200)}
            </p>
         </div>

         <div className="banner-fade-bottom"></div>
      </header>
   );
}

export default Banner;

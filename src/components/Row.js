import React, { useState, useEffect } from 'react';
import './Row.css';
import axios from '../axios';
const imageUrl = 'https://image.tmdb.org/t/p/original';

function Row({ title, fetchUrl, isLargeRow }) {
   const [movies, setMovies] = useState([]);

   useEffect(() => {
      async function fetchData() {
         const request = await axios.get(fetchUrl);
         setMovies(request.data.results);
         return request;
      }
      fetchData();
   }, [fetchUrl]);

   return (
      <div className="row">
         <h2>{title}</h2>

         <div className="row-posters">
            {movies.map((movie) => (
               <img
                  key={movie.id}
                  className={`row-poster ${isLargeRow && 'row-poster-large'}`}
                  src={`${imageUrl}${
                     isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie?.title || movie?.name || movie?.original_name}
                  title={movie?.title || movie?.name || movie?.original_name}
               />
            ))}
         </div>
      </div>
   );
}

export default Row;

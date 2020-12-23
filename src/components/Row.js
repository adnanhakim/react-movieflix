import React, { useState, useEffect } from 'react';
import './Row.css';
import axios from '../axios';
import Detail from './Detail';
const imageUrl = 'https://image.tmdb.org/t/p/original';

function Row({ title, fetchUrl, isLargeRow, mediaType }) {
   const [movies, setMovies] = useState([]);
   const [id, setId] = useState('');

   useEffect(() => {
      async function fetchData() {
         const request = await axios.get(fetchUrl);
         setMovies(request.data.results);
         return request;
      }
      fetchData();
   }, [fetchUrl]);

   function handleClick(movie) {
      if (id && id !== movie.id) setId(movie.id);
      else if (id) setId('');
      else setId(movie.id);
   }

   return (
      <div className="row">
         <h2
            style={{
               color: isLargeRow ? '#db202c' : '#ffffff',
            }}
            className="row-title">
            {title}
         </h2>

         <div className="row-posters">
            {movies.map((movie) =>
               movie.poster_path ? (
                  <img
                     key={movie.id}
                     onClick={() => handleClick(movie)}
                     className={isLargeRow ? 'row-poster-large' : 'row-poster'}
                     src={`${imageUrl}${
                        isLargeRow ? movie.poster_path : movie.backdrop_path
                     }`}
                     alt={movie?.title || movie?.name || movie?.original_name}
                     title={movie?.title || movie?.name || movie?.original_name}
                  />
               ) : (
                  <></>
               )
            )}
         </div>

         {id && <Detail id={id} mediaType={mediaType} />}
      </div>
   );
}

export default Row;

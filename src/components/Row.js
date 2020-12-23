import React, { useState, useEffect } from 'react';
import './Row.css';
import axios from '../axios';
import Detail from './Detail';
import requests from '../requests';

function Row({ title, fetchUrl, mediaType }) {
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
         <h2 className="row-title title">{title}</h2>

         <div className="row-posters">
            {movies.map((movie) =>
               movie.poster_path ? (
                  <img
                     key={movie.id}
                     onClick={() => handleClick(movie)}
                     className="row-poster"
                     src={`${requests.imageUrl}${movie.poster_path}`}
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

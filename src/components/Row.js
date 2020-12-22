import React, { useState, useEffect } from 'react';
import './Row.css';
import YouTube from 'react-youtube';
import MovieTrailer from 'movie-trailer';
import axios from '../axios';
const imageUrl = 'https://image.tmdb.org/t/p/original';

function Row({ title, fetchUrl, isLargeRow }) {
   const [movies, setMovies] = useState([]);
   const [trailerUrl, setTrailerUrl] = useState('');

   useEffect(() => {
      async function fetchData() {
         const request = await axios.get(fetchUrl);
         setMovies(request.data.results);
         return request;
      }
      fetchData();
   }, [fetchUrl]);

   const opts = {
      height: '390',
      width: '100%',
      playerVars: {
         autoplay: 1,
      },
   };

   function handleClick(movie) {
      if (trailerUrl) {
         setTrailerUrl('');
      } else {
         MovieTrailer(movie?.name || movie?.title || movie?.original_name || '')
            .then((url) => {
               console.log(url);
               const urlParams = new URLSearchParams(new URL(url).search);
               setTrailerUrl(urlParams.get('v'));
            })
            .catch((error) => console.log(error));
      }
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

         {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
   );
}

export default Row;

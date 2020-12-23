import React, { useState, useEffect } from 'react';
import './Detail.css';
import axios from '../axios';
const imageUrl = 'https://image.tmdb.org/t/p/original';

function Detail({ id, mediaType }) {
   const [movie, setMovie] = useState({});

   useEffect(() => {
      async function fetchDetails(id, mediaType) {
         const request = await axios.get(
            `/${mediaType}/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
         );
         console.log(request.data);
         setMovie(request.data);
      }
      fetchDetails(id, mediaType);
   }, [id, mediaType]);

   function getGenres(genres) {
      if (!genres) return '';
      let genre = '';
      for (let i = 0; i < genres.length - 1; i++) {
         genre += genres[i]?.name + ', ';
      }
      genre += genres[genres.length - 1]?.name;
      return genre;
   }

   function getReleaseDate(movie, mediaType) {
      if (mediaType === 'movie') {
         return movie?.release_date?.substr(0, 4);
      } else {
         const firstAirDate = movie.first_air_date?.substr(0, 4);
         const lastAirDate = movie.last_air_date?.substr(0, 4);
         if (firstAirDate === lastAirDate) {
            return firstAirDate;
         } else return firstAirDate + ' - ' + lastAirDate;
      }
   }

   function getRuntime(runtime) {
      if (runtime === 0) return '';
      else if (runtime < 60) {
         return `${runtime}m`;
      } else {
         return `${Math.floor(runtime / 60)}h ${runtime % 60}m`;
      }
   }

   return (
      <div className="detail">
         <div className="detail-contents">
            <h1 className="detail-title">
               {movie.title || movie.name || movie.original_name}
            </h1>
            <p className="detail-info">
               <span className="detail-release">
                  {getReleaseDate(movie, mediaType)}
               </span>{' '}
               &#8226;{' '}
               <span
                  className={`detail-votes ${
                     movie.vote_average <= 10 &&
                     movie.vote_average >= 7.5 &&
                     'detail-hit'
                  } ${
                     movie.vote_average < 7.5 &&
                     movie.vote_average >= 4 &&
                     'detail-average'
                  } ${
                     movie.vote_average < 4 &&
                     movie.vote_average >= 0 &&
                     'detail-flop'
                  }`}>
                  {movie.vote_average * 10}%
               </span>{' '}
               &#8226;{' '}
               <span className="detail-release">
                  {getRuntime(
                     movie.runtime || movie.episode_run_time?.[0] || 0
                  )}
               </span>
            </p>
            <p className="detail-tagline">{movie.tagline}</p>
            <p className="detail-overview">{movie.overview}</p>
            <p className="detail-genres">
               <span className="bold">Genres: </span>
               {getGenres(movie.genres)}
            </p>
            <div className="detail-buttons">
               <button className="detail-button">More Info</button>
               {mediaType === 'movie' && (
                  <a
                     href={`https://www.imdb.com/title/${movie.imdb_id}/`}
                     target="_blank"
                     rel="noreferrer">
                     <button className="detail-button imdb-button">
                        View on IMDb
                     </button>
                  </a>
               )}
               {mediaType === 'tv' && (
                  <a href={movie.homepage} target="_blank" rel="noreferrer">
                     <button className="detail-button imdb-button">
                        View Home
                     </button>
                  </a>
               )}
            </div>
            {/* <p className="detail-starring">Starring: ABC</p> */}
         </div>
         <div className="detail-fade"></div>
         <div className="detail-poster-container">
            <img
               className="detail-poster"
               src={`${imageUrl}${movie.backdrop_path}`}
               alt={movie.title || movie.name || movie.original_name}
               title={movie.title || movie.name || movie.original_name}
            />
         </div>
      </div>
   );
}

export default Detail;
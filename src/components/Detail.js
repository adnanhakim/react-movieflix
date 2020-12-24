import React, { useState, useEffect } from 'react';
import './Detail.css';
import axios from '../axios';
import { Link } from 'react-router-dom';
import requests from '../requests';
import { getReleaseYear, getRuntime, getGenres } from '../methods';

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

   return (
      <div className="detail">
         <div className="detail-contents">
            <h1 className="detail-title title">
               {movie.title || movie.name || movie.original_name}
            </h1>
            <p className="detail-info bold">
               {getReleaseYear(movie, mediaType)} &#8226;{' '}
               <span
                  className={`detail-votes ${
                     movie.vote_average <= 10 &&
                     movie.vote_average >= 7.5 &&
                     'hit'
                  } ${
                     movie.vote_average < 7.5 &&
                     movie.vote_average >= 4 &&
                     'average'
                  } ${
                     movie.vote_average < 4 && movie.vote_average >= 0 && 'flop'
                  }`}>
                  {movie.vote_average * 10}%
               </span>{' '}
               &#8226;{' '}
               {getRuntime(movie?.runtime || movie?.episode_run_time?.[0] || 0)}
            </p>
            <p className="detail-tagline bold">{movie.tagline}</p>
            <p className="detail-overview">{movie.overview}</p>
            <p className="detail-genres">
               <span className="bold">Genres: </span>
               {getGenres(movie.genres)}
            </p>
            <div className="detail-buttons">
               <Link to={`/${mediaType}/${id}`}>
                  <button className="detail-button button">More Info</button>
               </Link>
               {mediaType === 'movie' && (
                  <a
                     href={`https://www.imdb.com/title/${movie.imdb_id}/`}
                     target="_blank"
                     rel="noreferrer">
                     <button className="button detail-button imdb-button">
                        View on IMDb
                     </button>
                  </a>
               )}
               {mediaType === 'tv' && (
                  <a href={movie.homepage} target="_blank" rel="noreferrer">
                     <button className="button detail-button imdb-button">
                        View Home
                     </button>
                  </a>
               )}
            </div>
         </div>
         <div className="detail-fade"></div>
         <div className="detail-poster-container">
            <img
               className="detail-poster"
               src={`${requests.imageUrl}${movie.backdrop_path}`}
               alt={movie.title || movie.name || movie.original_name}
               title={movie.title || movie.name || movie.original_name}
            />
         </div>
      </div>
   );
}

export default Detail;

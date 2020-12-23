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
      let info = '';
      if (mediaType === 'movie') {
         info += movie?.release_date?.substr(0, 4);
      } else {
         const firstAirDate = movie.first_air_date?.substr(0, 4);
         const lastAirDate = movie.last_air_date?.substr(0, 4);
         if (firstAirDate === lastAirDate) {
            info += firstAirDate;
         } else info += firstAirDate + ' - ' + lastAirDate;
      }
      return info;
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
               |{' '}
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
            </p>
            <p className="detail-tagline">{movie.tagline}</p>
            <p className="detail-overview">{movie.overview}</p>
            <p className="detail-genres">
               <span className="bold">Genres: </span>
               {getGenres(movie.genres)}
            </p>
            <div className="detail-buttons">
               <button className="detail-button">More Info</button>
               <button className="detail-button imdb-button">
                  View on IMDb
               </button>
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

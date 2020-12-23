import React, { useState, useEffect } from 'react';
import './Movie.css';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router';
import axios from '../axios';
import Backdrop from './Backdrop';
import Credits from './Credits';
import YouTube from 'react-youtube';
import Videos from './Videos';
const imageUrl = 'https://image.tmdb.org/t/p/original';

function Movie() {
   const history = useHistory();
   const { id } = useParams();
   const [movie, setMovie] = useState({});

   useEffect(() => {
      async function fetchMovie(id) {
         try {
            const request = await axios.get(
               `/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
            );
            setMovie(request.data);
         } catch (error) {
            history.replace('/');
         }
      }

      fetchMovie(id);
   }, [id, history]);

   function getReleaseDate(release_date) {
      if (release_date) return release_date.substr(0, 4);
      else return '';
   }

   const opts = {
      height: '280',
      width: '500',
      playerVars: {
         autoplay: 0,
      },
   };

   return (
      <div>
         <Backdrop url={movie?.backdrop_path} />
         <header className="movie-header">
            <img
               className="movie-poster"
               src={imageUrl + movie?.poster_path}
               alt="Poster"
            />
            <div className="movie-header-info">
               <h1 className="movie-name">{movie?.title}</h1>
               <h2 className="movie-tagline">
                  {getReleaseDate(movie?.release_date)} &#8226; {movie?.tagline}
               </h2>
            </div>
         </header>
         <div className="movie-overview-container">
            <div className="movie-title">Overview</div>
            <p className="movie-overview">{movie.overview}</p>
         </div>
         <Credits id={id} />
         <Videos id={id} />
         {/* <YouTube videoId="XW2E2Fnh52w" opts={opts} /> */}
      </div>
   );
}

export default Movie;

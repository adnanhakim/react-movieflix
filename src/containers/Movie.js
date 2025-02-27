import React, { useState, useEffect } from 'react';
import './Movie.css';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router';
import axios from '../axios';
import Backdrop from '../components/Backdrop';
import Credits from '../components/Credits';
import Videos from '../components/Videos';
import MoreDetails from '../components/MoreDetails';

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

   return (
      <div>
         <Backdrop movie={movie} mediaType="movie" />
         <Credits id={id} mediaType="movie" />
         <MoreDetails movie={movie} mediaType="movie" />
         <Videos id={id} />
      </div>
   );
}

export default Movie;

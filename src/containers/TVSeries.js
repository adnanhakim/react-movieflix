import React, { useState, useEffect } from 'react';
import './TVSeries.css';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router';
import axios from '../axios';
import Backdrop from '../components/Backdrop';
import Credits from '../components/Credits';
import MoreDetails from '../components/MoreDetails';
import Seasons from '../components/Seasons';

function TVSeries() {
   const history = useHistory();
   const { id } = useParams();
   const [series, setSeries] = useState({});

   useEffect(() => {
      async function fetchMovie(id) {
         try {
            const request = await axios.get(
               `/tv/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
            );
            setSeries(request.data);
         } catch (error) {
            history.replace('/');
         }
      }

      fetchMovie(id);
   }, [id, history]);

   return (
      <div>
         <Backdrop movie={series} mediaType="tv" />
         <Credits id={id} mediaType="tv" />
         <MoreDetails movie={series} mediaType="tv" />
         <Seasons seasons={series?.seasons} />
      </div>
   );
}

export default TVSeries;

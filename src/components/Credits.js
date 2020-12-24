import React, { useState, useEffect } from 'react';
import './Credits.css';
import axios from '../axios';
import Credit from './Credit';

function Credits({ id, mediaType }) {
   const [credits, setCredits] = useState([]);

   useEffect(() => {
      async function fetchCredits(id) {
         const request = await axios.get(
            `/${mediaType}/${id}/credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
         );

         let cast = [];
         for (let i = 0; i < 9 && i < request.data?.cast?.length; i++)
            cast.push(request.data.cast[i]);
         setCredits(cast);

         // for (let i = 3; i < 6 && i < request.data?.cast?.length; i++)
         //    castRight.push(request.data.cast[i]);
         // setCreditsRight(castRight);
      }
      fetchCredits(id);
   }, [id, mediaType]);

   return (
      <div className="credits">
         <h1 className="credits-title title">Starring</h1>
         <div className="credits-list">
            {credits.map((credit) => (
               <Credit
                  key={credit.id}
                  name={credit.name}
                  url={credit.profile_path}
                  character={credit.character}
               />
            ))}
         </div>
      </div>
   );
}

export default Credits;

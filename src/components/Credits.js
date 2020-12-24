import React, { useState, useEffect } from 'react';
import './Credits.css';
import axios from '../axios';
import Credit from './Credit';

function Credits({ id, mediaType }) {
   const [creditsLeft, setCreditsLeft] = useState([]);
   const [creditsRight, setCreditsRight] = useState([]);

   useEffect(() => {
      async function fetchCredits(id) {
         const request = await axios.get(
            `/${mediaType}/${id}/credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
         );

         let castLeft = [],
            castRight = [];
         for (let i = 0; i < 3 && i < request.data?.cast?.length; i++)
            castLeft.push(request.data.cast[i]);
         setCreditsLeft(castLeft);

         for (let i = 3; i < 6 && i < request.data?.cast?.length; i++)
            castRight.push(request.data.cast[i]);
         setCreditsRight(castRight);
      }
      fetchCredits(id);
   }, [id, mediaType]);

   return (
      <div className="credits">
         <h1 className="credits-title title">Starring</h1>
         <div className="credits-list">
            <div className="credits-list-left">
               {creditsLeft.map((credit) => (
                  <Credit
                     key={credit.id}
                     name={credit.name}
                     url={credit.profile_path}
                     character={credit.character}
                  />
               ))}
            </div>
            <div className="credits-list-right">
               {creditsRight.map((credit) => (
                  <Credit
                     key={credit.id}
                     name={credit.name}
                     url={credit.profile_path}
                     character={credit.character}
                  />
               ))}
            </div>
         </div>
      </div>
   );
}

export default Credits;

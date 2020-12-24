import React from 'react';
import './MoreDetails.css';
import { getGenres, getRuntime, formatDate } from '../methods';

function MoreDetails({ movie, director }) {
   return (
      <div>
         <h1 className="more-details-title title">More Details</h1>
         <div className="more-details-container">
            <div className="more-details-card">
               <div className="more-details-header title">Genre</div>
               <div className="more-details-content">
                  {getGenres(movie?.genres)}
               </div>
            </div>
            <div className="more-details-card">
               <div className="more-details-header title">Status</div>
               <div className="more-details-content">{movie?.status}</div>
            </div>
            <div className="more-details-card">
               <div className="more-details-header title">Release Date</div>
               <div className="more-details-content">
                  {formatDate(movie?.release_date)}
               </div>
            </div>
            <div className="more-details-card">
               <div className="more-details-header title">Runtime</div>
               <div className="more-details-content">
                  {getRuntime(movie?.runtime)}
               </div>
            </div>
            <div className="more-details-card">
               <div className="more-details-header title">Directed By</div>
               <div className="more-details-content">{director}</div>
            </div>
         </div>
      </div>
   );
}

export default MoreDetails;

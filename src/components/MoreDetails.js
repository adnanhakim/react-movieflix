import React from 'react';
import './MoreDetails.css';

function MoreDetails({ movie, director }) {
   function getGenres(genres) {
      if (!genres) return '';
      let genre = '';
      for (let i = 0; i < genres.length - 1; i++)
         genre += genres[i]?.name + ', ';
      genre += genres[genres.length - 1]?.name;
      return genre;
   }

   function formatDate(date) {
      if (!date) return '';

      const arr = date.split('-');
      if (arr.length !== 3) return '';

      const months = [
         '',
         'Jan',
         'Feb',
         'Mar',
         'Apr',
         'May',
         'Jun',
         'Jul',
         'Aug',
         'Sep',
         'Oct',
         'Nov',
         'Dec',
      ];
      let str = arr[2];

      if (
         arr[2] === '1' ||
         arr[2] === '11' ||
         arr[2] === '21' ||
         arr[2] === '31'
      )
         str += 'st ';
      else if (arr[2] === '2' || arr[2] === '12' || arr[2] === '22')
         str += 'nd ';
      else if (arr[2] === '3' || arr[2] === '13' || arr[2] === '23')
         str += 'rd ';
      else str += 'th ';

      str += months[arr[1]];
      str += ' ' + arr[0];
      return str;
   }

   return (
      <div>
         <h1 className="more-details-title title">More Details</h1>
         <div className="more-details-container">
            <div className="more-details-card">
               <div className="more-details-header title">Status</div>
               <div className="more-details-content">{movie?.status}</div>
            </div>
            <div className="more-details-card">
               <div className="more-details-header title">Genre</div>
               <div className="more-details-content">
                  {getGenres(movie?.genres)}
               </div>
            </div>
            <div className="more-details-card">
               <div className="more-details-header title">Release Date</div>
               <div className="more-details-content">
                  {formatDate(movie?.release_date)}
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

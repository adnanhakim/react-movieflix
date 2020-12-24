import React from 'react';
import './MoreDetails.css';
import {
   getGenres,
   getRuntime,
   getRuntimes,
   formatDate,
   getNetworks,
} from '../methods';
import MoreDetailsCard from './MoreDetailsCard';

function MoreDetails({ movie, mediaType }) {
   return (
      <div>
         <h1 className="more-details-title title">More Details</h1>
         <div className="more-details-container">
            <MoreDetailsCard
               header="Genre"
               content={getGenres(movie?.genres)}
            />
            <MoreDetailsCard header="Status" content={movie?.status} />
            <MoreDetailsCard
               header={
                  mediaType === 'movie' ? 'Release Date' : 'First Aired On'
               }
               content={
                  mediaType === 'movie'
                     ? formatDate(movie?.release_date)
                     : formatDate(movie?.first_air_date)
               }
            />
            <MoreDetailsCard
               header="Runtime"
               content={
                  mediaType === 'movie'
                     ? getRuntime(movie?.runtime)
                     : getRuntimes(movie?.episode_run_time)
               }
            />
            {mediaType === 'tv' && (
               <MoreDetailsCard
                  header="Networks"
                  content={getNetworks(movie?.networks)}
               />
            )}
            {mediaType === 'tv' && (
               <MoreDetailsCard
                  header="Created By"
                  content={movie?.created_by?.[0].name}
               />
            )}
            {mediaType === 'tv' && (
               <MoreDetailsCard
                  header={'Seasons'}
                  content={`${movie.number_of_seasons} seasons`}
               />
            )}

            {mediaType === 'tv' && (
               <MoreDetailsCard
                  header={'Episodes'}
                  content={`${movie.number_of_episodes} episodes`}
               />
            )}
         </div>
      </div>
   );
}

export default MoreDetails;

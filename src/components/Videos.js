import React, { useState, useEffect } from 'react';
import './Videos.css';
import axios from '../axios';
import YouTube from 'react-youtube';

function Videos({ id }) {
   const [videos, setVideos] = useState([]);

   useEffect(() => {
      async function fetchVideos(id) {
         const request = await axios.get(
            `/movie/${id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
         );

         console.log(request.data);
         let youtubeVideos = [];
         for (let i = 0; i < request.data?.results?.length; i++) {
            if (request.data.results[i]?.site === 'YouTube')
               youtubeVideos.push(request.data.results[i]);
         }

         setVideos(youtubeVideos);
      }
      fetchVideos(id);
   }, [id]);

   const opts = {
      height: '280',
      width: '500',
      playerVars: {
         autoplay: 0,
      },
   };

   return (
      <div className="videos">
         <h1 className="videos-title title">Videos</h1>
         <div className="videos-list">
            {videos.map((video) => (
               <YouTube videoId={video.key} opts={opts} />
            ))}
         </div>
      </div>
   );
}

export default Videos;

import React from 'react';
import './Home.css';
import Banner from './Banner';
import Navbar from './Navbar';
import Row from './Row';
import requests from '../requests';

function Home() {
   return (
      <>
         <Navbar />
         <Banner />
         <Row
            title="Netflix Originals"
            fetchUrl={requests.fetchNetflixOriginals}
            mediaType="tv"
            isLargeRow
         />
         <Row
            title="Amazon Prime Originals"
            fetchUrl={requests.fetchPrimeOriginals}
            mediaType="tv"
            isLargeRow
         />
         <Row
            title="Disney+ Hotstar Originals"
            fetchUrl={requests.fetchHotstarOriginals}
            mediaType="tv"
            isLargeRow
         />
         <Row
            title="TV Series Trending Now"
            fetchUrl={requests.fetchTrendingTVSeries}
            mediaType="tv"
            isLargeRow
         />
         <Row
            title="Movies Trending Now"
            fetchUrl={requests.fetchTrendingMovies}
            mediaType="movie"
            isLargeRow
         />
         <Row
            title="Action Movies"
            fetchUrl={requests.fetchActionMovies}
            mediaType="movie"
            isLargeRow
         />
         <Row
            title="Comedy Movies"
            fetchUrl={requests.fetchComedyMovies}
            mediaType="movie"
            isLargeRow
         />
         <Row
            title="Horror Movies"
            fetchUrl={requests.fetchHorrorMovies}
            mediaType="movie"
            isLargeRow
         />
         <Row
            title="Romance Movies"
            fetchUrl={requests.fetchRomanceMovies}
            mediaType="movie"
            isLargeRow
         />
         <Row
            title="Thriller Movies"
            fetchUrl={requests.fetchThrillerMovies}
            mediaType="movie"
            isLargeRow
         />
      </>
   );
}

export default Home;
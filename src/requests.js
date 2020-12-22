const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const requests = {
   fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
   fetchPrimeOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=1024&with_original_language=hi`,
   fetchHotstarOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=3919&with_original_language=hi`,
   fetchTrendingTVSeries: `/trending/tv/week?api_key=${API_KEY}&language=en-US`,
   fetchTrendingMovies: `/trending/movie/week?api_key=${API_KEY}&language=en-US`,
   fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
   fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
   fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
   fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
   fetchThrillerMovies: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
};

export default requests;

import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Row from './components/Row';
import requests from './requests';

function App() {
   return (
      <div className="App">
         <Navbar />
         <Banner />
         <Row
            title="Netflix Originals"
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow
         />
         <Row
            title="Amazon Prime Originals"
            fetchUrl={requests.fetchPrimeOriginals}
            isLargeRow
         />
         <Row
            title="Disney+ Hotstar Originals"
            fetchUrl={requests.fetchHotstarOriginals}
            isLargeRow
         />
         <Row
            title="TV Series Trending Now"
            fetchUrl={requests.fetchTrendingTVSeries}
            isLargeRow
         />
         <Row
            title="Movies Trending Now"
            fetchUrl={requests.fetchTrendingMovies}
            isLargeRow
         />
         <Row
            title="Action Movies"
            fetchUrl={requests.fetchActionMovies}
            isLargeRow
         />
         <Row
            title="Comedy Movies"
            fetchUrl={requests.fetchComedyMovies}
            isLargeRow
         />
         <Row
            title="Horror Movies"
            fetchUrl={requests.fetchHorrorMovies}
            isLargeRow
         />
         <Row
            title="Romance Movies"
            fetchUrl={requests.fetchRomanceMovies}
            isLargeRow
         />
         <Row
            title="Thriller Movies"
            fetchUrl={requests.fetchThrillerMovies}
            isLargeRow
         />
      </div>
   );
}

export default App;

import './App.css';
import Home from './containers/Home';
import Movie from './containers/Movie';
import TVSeries from './containers/TVSeries';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

function App() {
   return (
      <Router>
         <ScrollToTop>
            <div className="App">
               <Navbar />
               <Switch>
                  <Route path="/movie/:id" exact component={Movie} />
                  <Route path="/tv/:id" exact component={TVSeries} />
                  <Route path="/" component={Home} />
               </Switch>
               <Footer />
            </div>
         </ScrollToTop>
      </Router>
   );
}

export default App;

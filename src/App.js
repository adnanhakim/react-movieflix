import './App.css';
import Home from './containers/Home';
import Movie from './containers/Movie';
import Navbar from './components/Navbar';
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
                  <Route path="/" component={Home} />
               </Switch>
            </div>
         </ScrollToTop>
      </Router>
   );
}

export default App;

import './App.css';
import Home from './components/Home';
import Movie from './components/Movie';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
   return (
      <Router>
         <div className="App">
            <Navbar />
            <Switch>
               <Route path="/movie/:id" exact component={Movie} />
               <Route path="/" component={Home} />
            </Switch>
         </div>
      </Router>
   );
}

export default App;

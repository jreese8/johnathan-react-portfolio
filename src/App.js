import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Nav/Navigation';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Cocktails from './components/Cocktails/Cocktails';
import Overeats from './components/Overeats/Overeats';
import HouseShow from './components/HouseShow/HouseShow';

function App() {
  return (
      <Router>
        <div className="wrapper">
          <main className="main">
            <Switch>
              <Route exact path="/" component={About} />
              <Route exact path="/Portfolio" component={Portfolio} />
              <Route exact path="/Contact" component={Contact} />
              <Route exact path="/Cocktails" component={Cocktails} />
              <Route exact path="/Overeats" component={Overeats} />
              <Route exact path="/HouseShow" component={HouseShow} />
            </Switch>
          </main>

          <Navigation />
        </div>
      </Router>
  );
}

export default App;
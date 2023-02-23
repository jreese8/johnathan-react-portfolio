import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Navigation from './components/Nav/Navigation';
import PetIntelligent from './components/PetIntelligent/PetIntelligent';
import RunningGame from './components/RunningGame/RunningGame';
import PianoPlay from './components/PianoPlay/PianoPlay';
import Cocktails from './components/Cocktails/Cocktails';
import Overeats from './components/Overeats/Overeats';
import HouseShow from './components/HouseShow/HouseShow';
import Footer from './components/Footer/Footer';

function App() {
  return (
      <Router>
        <div>
            <Navigation />
            <Routes>
              <Route 
                path="/" 
                element={<About />} 
              />
              <Route
                path="/portfolio"
                element={<Portfolio />}
              />
              <Route 
                path="/contact"
                element={<Contact />}
              />
              <Route 
                path="/petintelligent" 
                element={<PetIntelligent />} 
              />
              <Route 
                path="/runninggame" 
                element={<RunningGame />} 
              />
              <Route 
                path="/pianoplay" 
                element={<PianoPlay />} 
              />
              <Route 
                path="/cocktails" 
                element={<Cocktails />} 
              />
              <Route 
                path="/overeats" 
                element={<Overeats />} 
              />
              <Route 
                path="/houseshow" 
                element={<HouseShow />} 
              />
            </Routes>
            <Footer />
        </div>
      </Router>
  );
}

export default App;


import React, { useState } from 'react';

import Navigation from '../Nav/Navigation';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import Cocktails from '../Cocktails/Cocktails';
import Overeats from '../Overeats/Overeats';
import HouseShow from '../HouseShow/HouseShow';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Cocktails') {
      return <Cocktails />;
    }
    if (currentPage === 'Overeats') {
      return <Overeats />;
    }
    if (currentPage === 'HouseShow') {
      return <HouseShow />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}

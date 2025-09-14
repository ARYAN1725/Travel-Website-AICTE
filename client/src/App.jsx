// App.jsx
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './Pages/Components/Header';
import Footer from './Pages/Components/Footer';
import TourCards from './Pages/Components/TourCards';
import France from './Pages/Components/France';
import './App.css';

const App = () => {
  const location = useLocation();

  // For now, only hide Header/Footer on France page
  const hideHeaderFooter = location.pathname === '/france';

  return (
    <>
      {!hideHeaderFooter && <Header />}

      <div style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<TourCards />} />
          <Route path="/france" element={<France />} />
        </Routes>
      </div>

      {!hideHeaderFooter && <Footer />}
    </>
  );
};

export default App;

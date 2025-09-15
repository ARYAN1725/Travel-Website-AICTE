// App.jsx
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './Pages/Components/Header';
import Footer from './Pages/Components/Footer';
import TourCards from './Pages/Components/TourCards';
import France from './Pages/Components/france';
import India from './Pages/Components/India';
import Usa from './Pages/Components/Usa';
import Australia from './Pages/Components/Australia';
import England from './Pages/Components/England';
import Italy from './Pages/Components/Italy';
import './App.css';

const App = () => {
  const location = useLocation();

  // For now, only hide Header/Footer on France page
  const hideHeaderFooter = 
  location.pathname === '/france' || location.pathname === '/india' || location.pathname === '/usa' || location.pathname === '/australia' || location.pathname === '/england' || location.pathname === '/italy' ;

  return (
    <>
      {!hideHeaderFooter && <Header />}

      <div style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<TourCards />} />
          <Route path="/france" element={<France />} />
          <Route path="/India" element={<India />} />
          <Route path="/Usa" element={<Usa />} />
          <Route path="/Australia" element={<Australia />} />
          <Route path="/England" element={<England />} />
          <Route path="/Italy" element={<Italy />} />
        </Routes>
      </div>

      {!hideHeaderFooter && <Footer />}
    </>
  );
};

export default App;

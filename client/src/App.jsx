import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './Pages/Components/Header';
import Footer from './Pages/Components/Footer';
import TourCards from './Pages/Components/TourCards';
import France from './Pages/Components/France';
import India from './Pages/Components/India';
import Usa from './Pages/Components/Usa';
import Australia from './Pages/Components/Australia';
import England from './Pages/Components/England';
import Italy from './Pages/Components/Italy';
import LandingPage from './Pages/Components/LandingPage';
import AboutUs from './Pages/Components/AboutUs';
import Login from './Pages/Components/Login';
import Signup from './Pages/Components/Signup';
import './App.css';
import Card from './Pages/Components/Card';

const App = () => {
  const location = useLocation();

  // Hide header/footer on country pages only
  const hideHeaderFooter =
    location.pathname === '/france' ||
    location.pathname === '/india' ||
    location.pathname === '/usa' ||
    location.pathname === '/australia' ||
    location.pathname === '/england' ||
    location.pathname === '/italy';

  return (
    <>
      {/* {!hideHeaderFooter && <Header />} */}

      <div style={{ minHeight: '80vh' }}>
        <Routes>
          {/* Landing page at root */}
          <Route path="/" element={<LandingPage />} />

          {/* Other pages */}
          {/* <Route path="/plans" element={<Card />} /> */}
          <Route path="/aboutus" element={<AboutUs />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Country pages */}
          <Route path="/france" element={<France />} />
          <Route path="/india" element={<India />} />
          <Route path="/usa" element={<Usa />} />
          <Route path="/australia" element={<Australia />} />
          <Route path="/england" element={<England />} />
          <Route path="/italy" element={<Italy />} />
        </Routes>
      </div>

      {/* {!hideHeaderFooter && <Footer />} */}
    </>
  );
};

export default App;

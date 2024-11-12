// App.js
import React, { useRef } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './comp/Navbar';
import Home from './comp/Home';
import About from './comp/About';
import LevelCards from './comp/LevelCards';
import Contact from './comp/Contact';
import MotivationCards from "./comp/MotivationCards ";
import VideoPage from './pages/VideoPage';
import TrainingPage from './pages/TrainingPage'; // Import the TrainingPage

function App() {
  const homeRef = useRef(null);
  const motvaRef = useRef(null);
  const aboutRef = useRef(null);
  const levelRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <Router>
      <div className="App">
        <Navbar 
          scrollToSection={scrollToSection} 
          homeRef={homeRef} 
          motvaRef={motvaRef} 
          aboutRef={aboutRef} 
          servicesRef={levelRef} 
          contactRef={contactRef} 
        />

        <Routes>
          {/* Main Page with all sections */}
          <Route path="/" element={
            <>
              <Home ref={homeRef} />
              <MotivationCards ref={motvaRef} />
              <About ref={aboutRef} />
              <LevelCards ref={levelRef} />
              <Contact ref={contactRef} />
            </>
          } />

          {/* Video Page */}
          <Route path="/level/:levelId" element={<VideoPage />} />

          {/* Training Page */}
          <Route path="/training/:levelId" element={<TrainingPage />} /> {/* Add this line for training page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;



// src/comp/Navbar.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = ({ scrollToSection, homeRef, motvaRef, aboutRef, servicesRef, contactRef }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (ref) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(ref), 100); // Delay to allow route change
    } else {
      scrollToSection(ref);
    }
  };

  return (
    <nav>
      <button onClick={() => handleNavigation(homeRef)}>Home</button>
      <button onClick={() => handleNavigation(motvaRef)}>Motivation</button>
      <button onClick={() => handleNavigation(aboutRef)}>About</button>
      <button onClick={() => handleNavigation(servicesRef)}>Level</button>
      <button onClick={() => handleNavigation(contactRef)}>Contact</button>
    </nav>
  );
};

export default Navbar;

// src/LevelContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a context
const LevelContext = createContext();

// Custom hook for using the LevelContext
export const useLevelContext = () => useContext(LevelContext);

// Provider component to wrap around App
export const LevelProvider = ({ children }) => {
  const [completedLevels, setCompletedLevels] = useState(0); // Track number of completed levels

  // Function to mark a level as completed and unlock the next one
  const completeLevel = (level) => {
    if (level > completedLevels) {
      setCompletedLevels(level);
    }
  };

  return (
    <LevelContext.Provider value={{ completedLevels, completeLevel }}>
      {children}
    </LevelContext.Provider>
  );
};

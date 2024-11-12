// src/pages/TrainingPage.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './TrainingPage.css'; // Create this CSS file for styles

const wordsData = {
  1: { word: "حاضر", options: ["حاضر", "في انتظار", "موجود", "غائب"] },
  2: { word: "شكرا", options: ["شكرا", "مرحبًا", "وداعا", "آسف"] },
  3: { word: "الله يحفظك", options: ["الله يحفظك", "أراك لاحقا", "أهلا وسهلا", "لا بأس"] },
  4: { word: "كيف حالك", options: ["كيف حالك", "ما أخبارك", "أين أنت", "ماذا تفعل"] },
};

const TrainingPage = () => {
  const { levelId } = useParams();
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const { word, options } = wordsData[levelId] || {};

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsCorrect(option === word);
  };

  const handleBackToVideo = () => {
    navigate(-1); // Go back to the previous page
  };

  const handleBackToHome = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="training-container">
      <h1 className="training-title">Level {levelId}: Word Learning</h1>
      <p>Rewrite the word: <strong>{word}</strong></p>
      <input 
        type="text" 
        value={userInput} 
        onChange={handleInputChange} 
        placeholder="Rewrite the word here" 
        className="input-field"
      />
      <h2>Select the correct word:</h2>
      <ul className="option-list">
        {options.map((option) => (
          <li 
            key={option} 
            className={`option-item ${selectedOption === option ? (isCorrect ? 'correct' : 'incorrect') : ''}`} 
            onClick={() => handleOptionSelect(option)}
          >
            {option}
          </li>
        ))}
      </ul>
      {selectedOption && (
        <div className="feedback">
          {isCorrect ? <span className="correct-feedback">Correct!</span> : <span className="incorrect-feedback">Incorrect! Try again.</span>}
        </div>
      )}
      <div className="back-buttons">
        <button onClick={handleBackToVideo}>Back to Video</button>
        <button onClick={handleBackToHome}>Back to Home</button>
      </div>
    </div>
  );
};

export default TrainingPage;

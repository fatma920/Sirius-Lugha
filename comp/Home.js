import './Home.css'; // Import the CSS styling for the Home component
import React, { useState, useEffect, useRef } from 'react';

const Home = React.forwardRef((props, ref) => {
  const [readerMessage, setReaderMessage] = useState("");
  const [chat, setChat] = useState([]); // Chat history
  const [listening, setListening] = useState(false);
  const [speakerLanguage, setSpeakerLanguage] = useState("en-US");
  const [voices, setVoices] = useState([]); // List of available voices
  const [selectedVoice, setSelectedVoice] = useState(null); // Selected voice for Reader

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.lang = speakerLanguage;

  // Load available voices when component mounts
  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
      if (availableVoices.length > 0) {
        // Default to first available voice
        setSelectedVoice(availableVoices.find((voice) => voice.lang === speakerLanguage));
      }
    };
    loadVoices();

    // Refresh voices list when available (some browsers require this event listener)
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, [speakerLanguage]);

  // Function for Speaker to start voice-to-text
  const startListening = () => {
    setListening(true);
    recognition.start();
    recognition.onresult = (event) => {
      const speechToText = event.results[0][0].transcript;
      setChat((prevChat) => [...prevChat, { sender: "Speaker", message: speechToText }]);
      setListening(false);
    };
  };

  // Function to convert text to speech with selected voice
  const readTextAloud = (message) => {
    const speech = new SpeechSynthesisUtterance(message);
    if (selectedVoice) {
      speech.voice = selectedVoice;
    }
    window.speechSynthesis.speak(speech);
  };

  // Function for Reader to send typed message
  const sendReaderMessage = () => {
    if (readerMessage.trim()) {
      setChat((prevChat) => [...prevChat, { sender: "Reader", message: readerMessage }]);
      readTextAloud(readerMessage); // Automatically read message for Speaker
      setReaderMessage(""); // Clear input after sending
    }
  };

  // Function to clear chat
  const clearChat = () => {
    setChat([]); // Clear the chat history
  };

  return (
    <section ref={ref} id="home">
      <h1>Impression Lugha</h1>
      <div className="chat-display">
        {chat.map((entry, index) => (
          <div key={index} className={`chat-bubble ${entry.sender}`}>
            {entry.message}
            {/* Adding a timestamp */}
            <span className="timestamp">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          </div>
        ))}
      </div>
      <button onClick={clearChat} className="clear-chat-button">
        Clear Chat
      </button>
      <div className="input-container">
        <input
          type="text"
          value={readerMessage}
          onChange={(e) => setReaderMessage(e.target.value)}
          placeholder="Type your message here"
          className="input-box"
        />
        <button onClick={sendReaderMessage} className="send-button">
          Send
        </button>
      </div>
      <div className="button-container">
        <label>Speaker Language: </label>
        <select value={speakerLanguage} onChange={(e) => setSpeakerLanguage(e.target.value)}>
          <option value="en-US">English</option>
          <option value="ar-SA">Arabic</option>
        </select>
        <button onClick={startListening} disabled={listening} className="btn-listen">
          {listening ? "Listening..." : "Speak"}
        </button>
      </div>
    </section>
  );
});

export default Home;

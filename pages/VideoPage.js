// src/pages/VideoPage.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import video1 from '../videos/video1.mp4'; // Update with your actual video paths
import video2 from '../videos/video2.mp4';
import video3 from '../videos/video3.mp4';
import video4 from '../videos/video4.mp4';

const VideoPage = () => {
  const { levelId } = useParams();
  const navigate = useNavigate();

  // Data for each level
  const videoData = {
    1: { title: "", videoUrl: video1 },
    2: { title: "", videoUrl: video2 },
    3: { title: "", videoUrl: video3 },
    4: { title: "", videoUrl: video4 },
  };

  const { title, videoUrl } = videoData[levelId] || {};

  const handleBackToHome = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleGoToTraining = () => {
    navigate(`/training/${levelId}`); // Navigate to the training page for the current level
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>{title}</h1>
      {videoUrl ? (
        <video controls style={{ maxWidth: "100%", height: "auto" }}>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <p>Video not available for this level</p>
      )}
      <div style={{ marginTop: "20px" }}>
        <button onClick={handleGoToTraining} style={{ marginRight: "20px", padding: "10px 20px", cursor: "pointer" }}>
          Go to Training
        </button>
        <button onClick={handleBackToHome} style={{ padding: "10px 20px", cursor: "pointer" }}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default VideoPage;

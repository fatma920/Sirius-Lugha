import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';  

// Updated lighter and hopeful color gradients
const cardsData = [
  { id: 1, text: "Level 1: ", pageUrl: "/level/1" },
  { id: 2, text: "Level 2: ", pageUrl: "/level/2" },
  { id: 3, text: "Level 3: ", pageUrl: "/level/3" },
  { id: 4, text: "Level 4: ", pageUrl: "/level/4" },
  // Add more levels as needed
];

// Define lighter blue gradients for a hopeful vibe
const hopefulGradients = [
  "linear-gradient(135deg, #a3caff, #7ec8e8)", // Soft light blue gradient
  "linear-gradient(135deg, #a2d8f3, #5fa8d0)", // Bright blue gradient
  "linear-gradient(135deg, #69b0d7, #99d6f0)", // Warm blue gradient
  "linear-gradient(135deg, #7dc9eb, #61b6f2)", // Light pastel blue gradient
];

const LevelCards = React.forwardRef((props, ref) => {
  const navigate = useNavigate();

  const handleCardClick = (pageUrl) => {
    navigate(pageUrl);
  };

  return (
    <section ref={ref} id="levels">
      <Container className="my-4">
        <header className="header-section">
          <h1 className="header-title">Learning  Levels</h1>
          <p className="header-subtitle">Click on a level to discover more</p>
        </header>

        <Row>
          {cardsData.map((card, index) => (
            <Col key={card.id} md={3} className="mb-4"> {/* Changed md value to 3 for 4 cards in a row */}
              <Card
                className="level-card"
                onClick={() => handleCardClick(card.pageUrl)}
                style={{
                  background: hopefulGradients[index % hopefulGradients.length], // Apply new gradient
                  cursor: 'pointer',
                  transition: 'transform 0.2s', // Smooth hover effect
                  borderRadius: '12px', // Rounded corners for warmth
                  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)', // Soft shadow for comfort
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)'; // Scale up on hover
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'; // Scale back on mouse leave
                }}
              >
                <Card.Body>
                  <Card.Text>{card.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
});

export default LevelCards;

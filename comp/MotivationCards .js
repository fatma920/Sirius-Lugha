// src/components/MotivationCards.js
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./MotivationCards.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// Import your local image
import MotivationCardsimg from './MotivationCards.jpg';

const cardsData = [
  {
    id: 1,
    text: "انت قادر على تحقيق احلامك ثق بنفسك ",
    imageUrl: MotivationCardsimg 
  },
  {
    id: 2,
    text: "انتم جزء من هذا المجتمع الجميل",
    imageUrl: MotivationCardsimg
  },
  {
    id: 3,
    text: "نحن معكم وفخورين فيكم نحبكم ",
    imageUrl: MotivationCardsimg 
  },
  {
    id: 4,
    text: "كل يوم هو فرصة جديدة ",
    imageUrl: MotivationCardsimg 
  },
  {
    id: 5,
    text: "You are the lead of our future",
    imageUrl: MotivationCardsimg 
  },
  {
    id: 6,
    text: "موفقين باذن الله ومنها للاعلى ",
    imageUrl: MotivationCardsimg 
  },
  {
    id: 7,
    text: "Do not lose hope",
    imageUrl: MotivationCardsimg 
  },
  {
    id: 8,
    text: "انتم منا ",
    imageUrl: MotivationCardsimg 
  },
  {
    id: 9,
    text: "اتمنى لكم التوفيق والنجاح",
    imageUrl: MotivationCardsimg // Use the local image
  },
];

const initialColors = ["#FFB6C1", "#FFDEAD", "#AFEEEE", "#E6E6FA", "#F0E68C", "#ADD8E6"];

const MotivationCards = React.forwardRef((props, ref) => {
  const [visibleCards, setVisibleCards] = useState([]);

  const getRandomCards = () => {
    const shuffledCards = cardsData.sort(() => 0.5 - Math.random());
    return shuffledCards.slice(0, 3);
  };

  useEffect(() => {
    setVisibleCards(getRandomCards());
    const interval = setInterval(() => {
      setVisibleCards(getRandomCards());
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} id="services">
      <Container className="my-4">
        <header className="header-section">
          <h1 className="header-title">ابحث عن شرارة الإلهام اليومية</h1>
          <p className="header-subtitle">دع الأفكار الإيجابية توجه يومك</p>
        </header>

        <Row>
          {visibleCards.map((card, index) => (
            <Col key={card.id} md={4} className="mb-4">
              <Card
                className="motivation-card"
                style={{
                  backgroundColor: initialColors[index % initialColors.length],
                  backgroundImage: `url(${card.imageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="overlay"></div>
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
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

export default MotivationCards;

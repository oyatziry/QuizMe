import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import DeckModel from '../models/deck';
import DeckCard from '../Components/DeckCard';

import './Jumbotron.scss';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
  const [decks, setDecks] = useState([]);

  useEffect(function(){
    // console.log('useEffect was called');
    fetchDecks();
  }, []);

  function fetchDecks(){
    DeckModel.all().then((data) => {
      setDecks(data.decks);
    });
  };

  function generateDeckCards(decks){
    return decks.map((deck, index) => (
      <Col>
        <Link to={`/${deck._id}`} key={index}>
          <DeckCard {...deck}/>
        </Link>
      </Col>
    )); 
  }

  return (
    <div>
      <Jumbotron>
        <Row xs={1} md={2}>
          <Col>
            <h1> QuizMe </h1>
            <p> Let's starting acing </p>
          </Col>
          <Col>
            <img src="icons/books.png" alt="landing-image" />
          </Col>
        </Row>
      </Jumbotron>
      <Container>
        <Row xs={1} md={2} lg={3}>
        { decks.length ? generateDeckCards(decks) : "Loading decks..." }
        </Row>
      </Container>
    </div>
  )
}

export default Home;
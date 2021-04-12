import React, { useState, useEffect } from 'react';
import DeckModel from '../models/deck';

import './Flashcard.scss';
import './DeckHeader.scss';
import './Aside.scss';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function Show(props){
  const deckId = props.match.params.id;
  let [index, setIndex] = useState(0);
  let [progress, setProgress] = useState(0);
  let [tally, setTally] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showPosReaction, setShowPosReaction] = useState(false);
  const [deck, setDeck] = useState([]);

  useEffect(function(){
    fetchDeckInfo(deckId);
  }, []);

  function fetchDeckInfo(id){
    DeckModel.findOne(id).then((data) => {
      setDeck(data.deck);
    })
  };

  function handleCardClick(){
    setShowAnswer(!showAnswer);
  }

  function handleNextBtn(){
    if(showAnswer === true){
      setShowAnswer(!showAnswer);
    }
    if( index === deck.flashcards.length ){
      setIndex(index = 0);
    }
    else{
      setIndex(index++);
    }
    handleProgressBar();
  }

  function handlePreviousBtn(){
    if(showAnswer === true){
      setShowAnswer(!showAnswer);
    }
    if( index <= 0){
      setIndex(deck.flashcards.length - 1);
    }
    if( index > 0 ){
      setIndex(index--);
    }
    handleProgressBar();
  }

  function handleProgressBar(){
    setProgress( (index/deck.flashcards.length) * 100 );
  }

  function plusTally(){
    if (tally <= deck.flashcards.length) setTally(tally++);
  }

  function minusTally(){
    if (tally > 0) setTally(tally--);
  }

  return (
    <div>
      <Row>
        { deck && deck.name ? 
          <>
            <Col xs={12} md={8}>
              <div className="deck-header">
                <h3> {deck.name} </h3>
              </div>
              { deck.flashcards.length ?
                <div>
                  <div className="flashcard" onClick={handleCardClick}>
                    {showAnswer ? <h3>{deck.flashcards[index].back}</h3> : <h3>{deck.flashcards[index].front}</h3> }
                  </div>
                  <h4 onClick={handlePreviousBtn}> Previous </h4>
                  <h4 onClick={handleNextBtn}> Next </h4>
                  <ProgressBar now={progress}/>
                </div>
              : "Loading flashcards"}
            </Col>
            <Col xs={12} md={4}>
              <div className="aside">
                <p> {tally} / {deck.flashcards.length} </p>
                <Button variant="light" onClick={plusTally}> Correct </Button>
                <Button variant="light" onClick={minusTally}> Wrong </Button>
              </div>
            </Col>
          </>
          : "Loading..." }
        </Row>
    </div>
  );
}

export default Show;
import React, { useState, useEffect } from 'react';

import './Flashcard.scss';
import DeckModel from '../models/deck';

function Show(props){
  const deckId = props.match.params.id;
  let [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [deck, setDeck] = useState([]);

  console.log('------>',deck);

  useEffect(function(){
    fetchDeckInfo(deckId);
  }, []);

  function fetchDeckInfo(id){
    DeckModel.findOne(id).then((data) => {
      // console.log(data);
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
    console.log(index);
  }

  function handlePreviousBtn(){
    if(showAnswer === true){
      setShowAnswer(!showAnswer);
    }
    if( index <= 0){
      setIndex(index = (deck.flashcards.length - 1));
    }
    if( index > 0 ){
      setIndex(index--);
    }
    console.log(index);
  }

  return (
    <div>
      <h1> This is the show page </h1>
      { deck.name ? 
        <>
          <h3> {deck.name} </h3>
          { deck.flashcards.length ?
            <div className="flashcard" onClick={handleCardClick}>
              {showAnswer ? <h3>{deck.flashcards[index].back}</h3> : <h3>{deck.flashcards[index].front}</h3> }
            </div>
          : "Loading flashcards"}
          <h4 onClick={handleNextBtn}> next </h4>
          <h4 onClick={handlePreviousBtn}> previous </h4>
        </>
      : "Loading..." }
    </div>
  );
}

export default Show;
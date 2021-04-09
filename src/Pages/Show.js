import React, { useState, useEffect } from 'react';

import DeckModel from '../models/deck';

function Show(props){
  const deckId = props.match.params.id;
  const [deck, setDeck] = useState([]);

  useEffect(function(){
    console.log('useEffect was called');
    fetchDeckInfo(deckId);
  }, []);

  function fetchDeckInfo(id){
    DeckModel.findOne(id).then((data) => {
      console.log(data);
      setDeck(data.deck);
    })
  };

  return (
    <div>
      <h1> This is the show page </h1>
      <h3> {deck.name} </h3>
      <p> This deck has {deck.flashcards.length} flashcards.</p>
    </div>
  );
}

export default Show;
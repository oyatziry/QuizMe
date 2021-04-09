import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import DeckModel from '../models/deck';
import DeckCard from '../Components/DeckCard';

function Home() {
  const [decks, setDecks] = useState([]);

  useEffect(function(){
    console.log('useEffect was called');
    fetchDecks();
  }, []);

  function fetchDecks(){
    DeckModel.all().then((data) => {
      setDecks(data.decks);
    });
  };

  function generateDeckCards(decks){
    // console.log(decks);
    return decks.map((deck, index) => {
      <Link to={`deck/${deck._id}`} key={index}>
        <DeckCard {...deck}/>
      </Link>
    });
  }

  return (
    <div>
      <h1> This is the home page </h1>
      { decks.length ? generateDeckCards(decks) : "Loading decks..." }
    </div>
  )
}

export default Home;
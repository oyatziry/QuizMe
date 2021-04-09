import React from 'react';

function DeckCard(props){
  return(
    <div>
      <h3> {props.name} </h3>
      <p> This Deck has {props.flashcards.length} flashcards. </p>
    </div>
  )
};

export default DeckCard;
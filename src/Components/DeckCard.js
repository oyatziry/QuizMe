import React from 'react';

import './DeckCard.scss';

function DeckCard(props){
  return(
    <div className="deck-card">
      <h3> {props.name} </h3>
    </div>
  )
};

export default DeckCard;
import React, {useState} from 'react';
import Card from './Card.js'
import axios from 'axios';

function Button(){
  const [deck, setDeck] = useState(null);
  const [pile,setPile] = useState([]);
  
  
  
  
  const getDeck = async () => {
    setDeck(await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle").then(res => res.data));
  }
  if(deck === null){
    getDeck();
  }
  
  const drawCard = async (e) => {
    
    let card = await axios.get(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`).then(res => res.data.cards[0]);
    
    
    setPile([...pile,card])
    
  } 
  

  let transform = Math.random() *360;
  let visualPile = pile.map(card => <Card image={card.image} style={{position:"absolute",
  transform: `rotate(${transform}deg)`}} />)
  
  return(
    <div>
          <button
    onClick={drawCard}
    >Get A Card
    </button>
    <div style={{margin: "5rem"}}>
    {visualPile}
    </div>
    </div>
    
  )
}

export default Button;
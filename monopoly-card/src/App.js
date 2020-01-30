import React from 'react';
import './App.css';
import MonopolyCard from './components/MonopolyCard';

const cards = [
  {
    name: "Disney World",
    color: "red",
    price: 2200000,
    rent: 200000,
    houseCost: 1000000,
    rentPerHouse: 500000
  }
]

function App() {
  return (
    <div className="App">
      {cards.map( (card, index) => 
        <MonopolyCard 
          name={card.name} 
          color={card.color}
          price={card.price}
          rent={card.rent}
          houseCost={card.houseCost}
          rentPerHouse={card.rentPerHouse}
          index={index}/>
      )}
    </div>
  );
}

export default App;

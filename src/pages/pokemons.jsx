import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './App.css';
import Main from '../components/main';

function Pokemons() {
  return (
    <div className="App">
      <link rel="stylesheet" href="static/css/cards.css"/>
      <link rel="stylesheet" href="static/css/card.css"/>
      
      <Main/>
    </div>
  );
}

export default Pokemons;
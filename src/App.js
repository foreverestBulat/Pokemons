import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pokemons from './pages/pokemons';
import Pokemon from './pages/pokemon';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="" exact element={<Pokemons/>}/>
      <Route path="/" exact element={<Pokemons/>}/>
        <Route path="/my-app" exact element={<Pokemons/>}/>
        <Route path="/pokemons" element={<Pokemons/>} />
        <Route path="/pokemons/:id" element={<Pokemon/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
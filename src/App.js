import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pokemons from './pages/pokemons';
import Pokemon from './pages/pokemon';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/my-app" exact element={<Pokemons/>}/>
        <Route path="/pokemons" element={<Pokemons/>} />
        <Route path="/pokemons/:id" element={<Pokemon/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './App.css';
// import Main from './components/main';
// import { BrowserRouter, Route } from 'react-router-dom';
// import Pokemons from './pages/pokemons';

// function App() {
//   return (
//     <BrowserRouter>
//       <Route path="/pokemon">
//         <Pokemons/>  
//       </Route>
//     </BrowserRouter>
//   );
// }

// export default App;

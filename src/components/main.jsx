import React, {useMemo, useEffect, useState} from "react";
import SearchEngine from './search_engine';
import Cards from './cards'
import axios from "axios"
import MyInput from './UI/input/MyInput'
import Card from './card'

function Main() {
  const [url, setUrl]= useState("https://pokeapi.co/api/v2/pokemon?offset=0&limit=30");
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [pokemons, setPokemons] = useState([]);
  const [obversedPokemons, setObversedPokemons] = useState([])
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPokemons, setCurrentPokemons] = useState(0);

  useEffect(() => {
    const fetchData = async() => {
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1302");
      setPrevUrl(res.data.previous);
      setNextUrl(res.data.next);
      setPokemons(res.data.results);
      setObversedPokemons(res.data.results.slice(currentPokemons, currentPokemons + 100));
    };
    fetchData();
  }, [])

  useEffect(() => {
    const fetchData = async() => {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1302")
      const pokemonsAll = response.data.results;
      if (Array.isArray(pokemonsAll)){
        const filtered = pokemonsAll.filter(pokemon => pokemon.name.toLowerCase().includes(searchQuery.toLowerCase()))
        setPokemons(filtered);
        setObversedPokemons(filtered.slice(currentPokemons, currentPokemons + 100));
      }
    };
    fetchData();
  }, [searchQuery])

  const prevOnClick = () => {
    console.log('prev');
    setCurrentPokemons(currentPokemons - 100);
    let pokemonsPrev = pokemons.slice(currentPokemons, currentPokemons + 100);
    setObversedPokemons(pokemonsPrev);
  }
  
  const nextOnClick = () => {
    console.log('next');
    setCurrentPokemons(currentPokemons + 100);
    let pokemonsNext = pokemons.slice(currentPokemons, currentPokemons + 100);
    setObversedPokemons(pokemonsNext);
    // console.log(pokemonsNext);
  }

  return (
    <div className="App">
      {/* <link rel="stylesheet" href="static/css/cards.css"/>
      <link rel="stylesheet" href="static/css/card.css"/> */}

      <SearchEngine
        value={searchQuery}
        placeholder="Pokemon search..."
        onChange={e => setSearchQuery(e.target.value)}
      />
      <Cards
        pokemons={obversedPokemons}
      />

      <div class="pagination">
        <button class="prev" onClick={prevOnClick}>
          PREVIOUS
        </button>
        <button class="next" onClick={nextOnClick}>
          NEXT
        </button>
      </div>

    </div>
  );
}

export default Main;
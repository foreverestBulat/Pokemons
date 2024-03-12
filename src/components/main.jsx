import React, {useEffect, useState} from "react";
import SearchEngine from './search_engine';
import Cards from './cards'
import axios from "axios"

function Main() {
  const [url, setUrl]= useState("https://pokeapi.co/api/v2/pokemon?offset=0&limit=30");
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [pokemons, setPokemons] = useState([]);
  const [obversedPokemons, setObversedPokemons] = useState([])
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPokemons, setCurrentPokemons] = useState(0);
  const [fetching, setFetching] = useState(false)

  useEffect(() => {
    const fetchData = async() => {
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1302");
      setPrevUrl(res.data.previous);
      setNextUrl(res.data.next);
      setPokemons(res.data.results);
      setObversedPokemons(res.data.results.slice(currentPokemons, currentPokemons + 30));
      setCurrentPokemons(currentPokemons + 30);
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
        setObversedPokemons(filtered.slice(currentPokemons, currentPokemons + 30));
      }
    };
    fetchData();
  }, [searchQuery])


  useEffect(() => {
    if (fetching){
      console.log('fetching');
      setCurrentPokemons(currentPokemons + 30);
      setObversedPokemons([...obversedPokemons, ...pokemons.slice(currentPokemons, currentPokemons + 30)]);
      setFetching(false);
    }
  }, [fetching])

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return function() {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100){
      setFetching(true)
    }
  }


  return (
    <div className="App">
      <SearchEngine
        value={searchQuery}
        placeholder="Pokemon search..."
        onChange={e => setSearchQuery(e.target.value)}
      />
      <Cards
        pokemons={obversedPokemons}
      />

    </div>
  );
}

export default Main;
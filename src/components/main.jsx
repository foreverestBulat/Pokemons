import React, {useMemo, useEffect, useState} from "react";
import SearchEngine from './search_engine';
import Cards from './cards'
import axios from "axios"

function Main() {
  const [url, setUrl]= useState("https://pokeapi.co/api/v2/pokemon?offset=20&limit=1000");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokemons, setPokemons] = useState();

  const [filter, setFilter] =useState({query: ''});

  const [searchTerm, setSearchTerm] = useState();

  useEffect(() => {
      loadingData();
  }, []);

  const loadingData = async() => {
      const res = await axios.get(url);
      setNextUrl(res.data.next);
      setPrevUrl(res.data.previous);
      const pokeDatas = []
      for (let i = 0; i < res.data.results.length; i++){
          const pokeData = await axios.get(res.data.results[i].url);
          pokeDatas.push(pokeData);
      }
      setPokemons(pokeDatas);
      console.log(pokemons)
  }


  const [searchQuery, setSearchQuery] = useState('')

  const searchedPokemons = useMemo(async() => {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1302");
    if (Array.isArray(res.data.results)){
      res.data.results.filter(pokemon => pokemon.name.toLowerCase().includes(filter.query.toLowerCase()))}
  }, [searchQuery])

  return (
    <div className="App">
      <link rel="stylesheet" href="static/css/cards.css"/>
      <link rel="stylesheet" href="static/css/card.css"/>
      <SearchEngine
        filter={filter}
        setFilter={setFilter}
      />
      <Cards/>
    </div>
  );
}

export default Main;
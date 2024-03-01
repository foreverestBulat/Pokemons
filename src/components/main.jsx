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
  const [searchQuery, setSearchQuery] = useState('');


  // useEffect(() => {
  //   const fetchData = async() => {
  //     const res = await axios.get(url);
  //     setPrevUrl(res.data.previous);
  //     setNextUrl(res.data.next);
  //     setPokemons(res.data.results);
  //   };
  //   fetchData();
  // }, [])

  useEffect(() => {
      loadingData(url);
  }, [url]);

  const loadingData = async(url) => {
    const res = await axios.get(url);
    setPrevUrl(res.data.previous);
    setNextUrl(res.data.next);
    if (Array.isArray(res.data.results)){
      let pokeDatas = []
      // console.log(res.data.results);
      for (let i = 0; i < res.data.results.length; i++){
        let poke = await axios.get(res.data.results[i].url);
        pokeDatas.push(poke.data);
      }
      setPokemons(pokeDatas);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1302")
        const pokemonsAll = response.data.results;
        if (Array.isArray(pokemonsAll)){
          const filtered = pokemonsAll.filter(pokemon => pokemon.name.toLowerCase().includes(searchQuery.toLowerCase()))
          let pokeDatas = [];
          for (let i = 0; i < filtered.length; i++){
            let poke = await axios.get(filtered[i].url);
            pokeDatas.push(poke.data);
          }
          setPokemons(pokeDatas);
        }
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (searchQuery) {
      fetchData();
    }
  }, [searchQuery]);


  const prevOnClick = async() => {
    if (prevUrl){
      setUrl(prevUrl);
    }
  }

  const nextOnClick = async() => {
    if (nextUrl){
      setUrl(nextUrl);
    }
  }

  return (
    <div className="App">
      <link rel="stylesheet" href="static/css/cards.css"/>
      <link rel="stylesheet" href="static/css/card.css"/>

      <SearchEngine
        value={searchQuery}
        placeholder="Pokemon search..."
        onChange={e => setSearchQuery(e.target.value)}
      />
      <Cards
        pokemons={pokemons}
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
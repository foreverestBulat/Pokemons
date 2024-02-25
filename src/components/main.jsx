import React, {useMemo, useEffect, useState} from "react";
import SearchEngine from './search_engine';
import Cards from './cards'
import axios from "axios"
import MyInput from './UI/input/MyInput'
import Card from './card'

function Main() {
  const [url, setUrl]= useState("https://pokeapi.co/api/v2/pokemon?offset=0&limit=30");
  const [pokemons, setPokemons] = useState([]);

  // const [searchedPokemons, setSearchedPokemons] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
      loadingData();
  }, []);

  const loadingData = async() => {
    const res = await axios.get(url);

    if (Array.isArray(res.data.results)){
      let pokeDatas = []
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
        // console.log(searchQuery)

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



  return (
    <div className="App">
      <link rel="stylesheet" href="static/css/cards.css"/>
      <link rel="stylesheet" href="static/css/card.css"/>

      <div class="search">
            <link rel="stylesheet" href="static/css/search.css"/>
            <div class="horizontal">
                <div class="vertical">
                    <div class="block-text">
                        <div class="text">Who are you looking for?</div>
                    </div>
                    <form>
                        <div class="form">
                            <MyInput
                              value={searchQuery}
                              placeholder="Pokemon search..."
                              onChange={e => setSearchQuery(e.target.value)}
                            />
                            <div class="vertical-btn">
                                <button class="button">
                                GO
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

      {/* <Cards/> */}

      <div class="cards">
            {Array.isArray(pokemons) && pokemons.length !== 0
                ? pokemons.map(pokemon => 
                    <Card pokemon={pokemon}/>
                )
                :<div class="no-pokemons">
                    <div><h1>Oops! Try again.</h1></div>
                    <div class="message">The pokemon you're looking for is a unicorn. It doesn't exist in this list</div>
                    <div><img src="https://i.pinimg.com/originals/35/19/21/3519217837a15cb807890d874ad65400.gif"/></div>
                </div>
            }
        </div>

    </div>
  );
}

export default Main;


{/* <SearchEngine
value={searchQuery}
onChange={e => setSearchQuery(e.target.value)}
placeholder="pokemon search..."
/> */}
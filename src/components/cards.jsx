import React, {useEffect, useState} from "react";
import Card from './card'
import axios from "axios"

const Cards = (props) => {
    const [url, setUrl]= useState("https://pokeapi.co/api/v2/pokemon?limit=100");
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();
    const [pokemons, setPokemons] = useState();

    useEffect(() => {
        loadingData();
    }, []);

    const loadingData = async() => {
        console.log(props);
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

    return (
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
    )
}

export default Cards;
import axios from "axios";
import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Stats from "../components/stats";
import Breeding from "../components/Breeding";
import Moves from "../components/moves";
import Abilities from "../components/abilities";
import MainState from "./main-state";
import Loading from "./loading";

const Poke = () => {
    
    const params = useParams();
    const [pokemon, setPokemon] = useState();

    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
            setPokemon(res.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
        fetchData();
    }, [params.id]);

    return (
        <div class="page-pokemon">
            {pokemon ? 
            <div class="pokemon">
                <MainState pokemon={pokemon}/>
                <Breeding height={pokemon.height} weight={pokemon.weight}/>
                <Moves moves={pokemon.moves}/>
                <Abilities abilities={pokemon.abilities}/>
            </div>:
            <div>
                <Loading/>
            </div>}
        </div>
    )
}

export default Poke;


// const types = {
//     'normal': ['#A0522D', 'Normal.png'],
//     'fighting': ['', ''],
//     'flying': ['', ''],
//     'poison': ['', ''],
//     'ground': ['', ''],
//     'rock': ['', ''],
//     'bug': ['', ''],
//     'ghost': ['', ''],
//     'steel': ['', ''],
//     'fire': ['', ''],
//     'water': ['', ''],
//     'grass': ['', ''],
//     'electric': ['', ''],
//     'phychic': ['', ''],
//     'ice': ['', ''],
//     'dragon': ['', ''],
//     'dark': ['', ''],
//     'fairy': ['', ''],
//     'unknown': ['', ''],
//     'shadow': ['', '']
// }
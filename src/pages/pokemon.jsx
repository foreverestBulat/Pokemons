import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"

const Pokemon = () => {
    const params = useParams()
    const [pokemon, setPokemon] = useState()

    useEffect(() => {
        loadingData();
    }, [])

    const loadingData = async() => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
        setPokemon(res.data);
        console.log(pokemon)
    }

    return (
        <div class="pokemon">
            <link rel="stylesheet" href="static/css/pokemonpage.css"/>
            <div class="main-state child">
                {pokemon.name}
                {pokemon.id}

            </div>
            <div class="breeding child">
                
            </div>
            <div class="moves child">

            </div>
            <div class="abilities child">

            </div>
        </div>
    )
}

export default Pokemon;
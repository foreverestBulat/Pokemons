import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import Stats from "../components/stats";
import Breeding from "../components/Breeding";
import Moves from "../components/moves";
import Abilities from "../components/abilities";

const Pokemon = () => {
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
        <div>
            {pokemon ? 
            <div class="pokemon">
                <div class="main-state child">
                    <div class="name-id-types">
                        <div class="name-id">
                            <div class="id">#{pokemon.id}</div>
                            <div class="name">{pokemon.name}</div>
                        </div>
                        <div>
                            <div class="types">
                                {pokemon.types.map(item => 
                                    <div>
                                        {item.type.name}
                                    </div>)}
                            </div>
                        </div>
                    </div>
                    <div class="stats-image">
                        <Stats stats={pokemon.stats}/>
                        <div>
                            <img src={pokemon.sprites.front_default}/>
                        </div>
                    </div>
                </div>
                <Breeding height={pokemon.height} weight={pokemon.weight}/>
                <Moves moves={pokemon.moves}/>
                <Abilities abilities={pokemon.abilities}/>
            </div>:
            <div>

            </div>}
        </div>
    )
}

export default Pokemon;
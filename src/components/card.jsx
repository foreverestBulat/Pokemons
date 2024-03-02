import axios from "axios";
import React, {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';
import PokeTypeDiv from "./UI/div/TypeDiv";

const Card = (props) => {

    const [pokemon, setPokemon] = useState();

    useEffect(() => {
        const fetchData = async() => {
            let res = await axios.get(props.pokemon.url);
            setPokemon(res.data);
        };
        fetchData();
    }, [pokemon])

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/pokemons/${pokemon.id}`);
    }


    return (
        <>
            {pokemon ? 
            <div>
                <div class="card" onClick={handleClick}>
                    <div class="top">
                        <div class="name">{pokemon.name}</div>
                        <div class="number">#{pokemon.id}</div>
                    </div>
                    <img src={pokemon.sprites.front_default}/>
                    <div class="down">
                        {Array.isArray(pokemon.types)
                            ? pokemon.types.map(item => 
                                <PokeTypeDiv name={item.type.name}/>
                            )
                            :<div>Abilities not found</div>
                        }
                    </div>
                </div>
            </div>
            :
            <div>
            </div>}
        </>
    )
}

export default Card;
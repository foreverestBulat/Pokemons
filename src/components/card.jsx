import axios from "axios";
import React, {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';
import PokeTypeDiv from "./UI/div/TypeDiv";

const Card = (props) => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/pokemons/${props.pokemon.id}`);
    }


    return (
        <div class="card" onClick={handleClick}>
            <div class="top">
                <div class="name">{props.pokemon.name}</div>
                <div class="number">#{props.pokemon.id}</div>
            </div>
            <img src={props.pokemon.sprites.front_default}/>
            <div class="down">
                {Array.isArray(props.pokemon.types)
                    ? props.pokemon.types.map(item => 
                        <PokeTypeDiv name={item.type.name}/>
                    )
                    :<div>Abilities not found</div>
                }
            </div>
        </div>
    )
}

export default Card;
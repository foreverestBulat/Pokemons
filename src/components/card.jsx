import axios from "axios";
import React, {useEffect, useState} from "react";

const Card = (props) => {
    return (
        <div class="card">
            <div class="top">
                <div class="name">{props.pokemon.name}</div>
                <div class="number">#{props.pokemon.id}</div>
            </div>
            <img src={props.pokemon.sprites.front_default}/>
            <div class="down">
                <button>Grass</button>
                <button>Poison</button>
            </div>
        </div>
    )
}

export default Card;
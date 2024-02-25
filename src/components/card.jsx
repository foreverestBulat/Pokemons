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
                {Array.isArray(props.pokemon.types)
                    ? props.pokemon.types.map(item => 
                        <div><p>{item.type.name}</p></div>
                    )
                    :<div>Abilities not found</div>
                }

                {/* <button>Grass</button>
                <button>Poison</button> */}
            </div>
        </div>
    )
}

export default Card;
import axios from "axios";
import React, {useEffect, useState} from "react";




const Type = ({name}) => {

    const types = {
        'normal': ['#A0522D', 'Normal.png'],
        'fighting': ['', ''],
        'flying': ['', ''],
        'poison': ['', ''],
        'ground': ['', ''],
        'rock': ['', ''],
        'bug': ['', ''],
        'ghost': ['', ''],
        'steel': ['', ''],
        'fire': ['', ''],
        'water': ['', ''],
        'grass': ['', ''],
        'electric': ['', ''],
        'phychic': ['', ''],
        'ice': ['', ''],
        'dragon': ['', ''],
        'dark': ['', ''],
        'fairy': ['', ''],
        'unknown': ['', ''],
        'shadow': ['', '']
    }
    
    return (
        <div>
            <p>{name}</p>
        </div>
        // <div class="card" onClick={handleClick}>
        //     <div class="top">
        //         <div class="name">{props.pokemon.name}</div>
        //         <div class="number">#{props.pokemon.id}</div>
        //     </div>
        //     <img src={props.pokemon.sprites.front_default}/>
        //     <div class="down">
        //         {Array.isArray(props.pokemon.types)
        //             ? props.pokemon.types.map(item => 
        //                 <div><p>{item.type.name}</p></div>
        //             )
        //             :<div>Abilities not found</div>
        //         }
        //     </div>
        // </div>
    )
}

export default Type;
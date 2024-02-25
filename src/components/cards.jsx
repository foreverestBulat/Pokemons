import React, {useEffect, useState} from "react";
import Card from './card'
import axios from "axios"

const Cards = (props) => {
    return (
        <div class="cards">
            {Array.isArray(props.pokemons) && props.pokemons.length !== 0
                ? props.pokemons.map(pokemon => 
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
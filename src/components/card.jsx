import axios from "axios";
import React, {useEffect, useState} from "react";

const Card = (props) => {

    // const [pokemonData, setPokemonData] = useState();

    useEffect(() => {
        loadingData();
    })

    const loadingData = async() => {
        // const res = await axios.get(props.pokemon.url)
        // console.log(props.pokemon.url)
        // setPokemonData(res.data);

        console.log(props.pokemon);
    }


    // const handleClick = async() => {
    //     const pokemonData = await axios.get(props.pokemon.url)
    //     await alert(
    //         <div class="data">
    //             <h1>{props.pokemon.name}</h1>
    //             <div>
    //                 <p>Height: {pokemonData.height}</p>
    //             </div>
    //             <div>
    //                 <h2>Stats</h2>
    //                 <div>
                        
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // }
     
    // onClick={handleClick}
    return (
        <div class="card">
            <div class="top">
                <div class="name">{props.pokemon.data.name}</div>
                <div class="number">#{props.pokemon.data.id}</div>
            </div>
            <img src={props.pokemon.data.sprites.front_default}/>
            <div class="down">
                <button>Grass</button>
                <button>Poison</button>
            </div>
        </div>
    )
}

export default Card;
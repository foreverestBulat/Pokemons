import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from './loading';

import bug from '../images/poke_types/Bug.png'
import dark from '../images/poke_types/Dark.png'
import dragon from '../images/poke_types/Dragon.png'
import electric from '../images/poke_types/Electric.png'
import fairy from '../images/poke_types/Fairy.png'
import fight from '../images/poke_types/Fight.png'
import fire from '../images/poke_types/Fire.png'
import flying from '../images/poke_types/Flying.png'
import ghost from '../images/poke_types/Ghost.png'
import grass from '../images/poke_types/Grass.png'
import ground from '../images/poke_types/Ground.png'
import ice from '../images/poke_types/Ice.png'
import normal from '../images/poke_types/Normal.png'
import poison from '../images/poke_types/Poison.png'
import psychic from '../images/poke_types/Psychic.png'
import rock from '../images/poke_types/Rock.png'
import steel from '../images/poke_types/Steel.png'
import water from '../images/poke_types/Water.png'

const Move = ({move}) => {

    const images = {
        "bug": bug,
        "dark": dark,
        "dragon": dragon,
        "electric": electric,
        "fairy": fairy,
        "fighting": fight,
        "fire": fire,
        "flying": flying,
        "ghost": ghost,
        "grass": grass,
        "ground": ground,
        "ice": ice,
        "normal": normal,
        "poison": poison,
        "psychic": psychic,
        "rock": rock,
        "steel": steel,
        "water": water
    }

    const types = {
        'normal':['#A52A2A', 'white'],
        'fighting':['#FFA500', 'black'], 
        'flying': ['#5F9EA0', 'white'], 
        'poison': ['#9400D3', 'white'], 
        'ground': ['#D2691E', 'black'], 
        'rock': ['#8B4513', 'white'], 
        'bug': ['#006400', 'white'], 
        'ghost': ['#483D8B', 'white'],
        'steel': ['#00FF7F', 'black'],
        'fire': ['#FF0000', 'white'], 
        'water': ['#0000FF', 'white'],
        'grass': ['#008000', 'white'], 
        'electric': ['#FFFF00', 'black'],
        'phychic': ['#DB7093', 'black'],
        'ice': ['#ADD8E6', 'black'],
        'dragon': ['#00FFFF', 'black'],
        'dark': ['#000000', 'white'],
        'fairy': ['#DC143C', 'black'],
        'unknown': ['#A9A9A9', 'black'],
        'shadow': ['#191970', 'black']
    }

    const [moveData, setMoveData] = useState([]);
    const [backgroundColor, setBackgroundColor] = useState();
    const [textColor, setTextColor] = useState();
    const [pathImage, setPathImage] = useState('');

    useEffect(() => {
        const fetchData = async() => {
            let res = await axios.get(move.url);
            setMoveData(res.data);
            if (Array.isArray(types[res.data.type.name])){
                setBackgroundColor(types[res.data.type.name][0]);
                setTextColor(types[res.data.type.name][1]);
            }
            setPathImage(images[res.data.type.name]);
        };
        fetchData();
    }, [])

    return (
        <div class="container-move">
            {moveData ? 
            <div class="move" style={{backgroundColor: backgroundColor, color: textColor}}>    
                <img src={pathImage}/>
                {moveData.name}
            </div>:
            <div>
                <Loading/>
            </div>}
        </div>
    );
};

export default Move;
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from './loading';

const Move = ({move}) => {

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
            setPathImage(`../static/images/poke_types/${res.data.type.name}.png`);
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
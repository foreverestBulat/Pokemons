import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Move = ({move}) => {

    const types = {
        'normal':'#A52A2A',
        'fighting':'#FFA500', 
        'flying': '#5F9EA0', 
        'poison': '#9400D3', 
        'ground': '#D2691E', 
        'rock': '#8B4513', 
        'bug': '#006400', 
        'ghost': '#483D8B',
        'steel': '#00FF7F',
        'fire': '#FF0000', 
        'water': '#0000FF',
        'grass': '#008000', 
        'electric': '#FFFF00',
        'phychic': '#DB7093',
        'ice': '#ADD8E6',
        'dragon': '#00FFFF',
        'dark': '#000000',
        'fairy': '#DC143C',
        'unknown': '#A9A9A9',
        'shadow': '#191970'
    }

    const [moveData, setMoveData] = useState([]);
    const [backgroundColor, setBackgroundColor] = useState();
    const [pathImage, setPathImage] = useState('');

    useEffect(() => {
        const fetchData = async() => {
            let res = await axios.get(move.url);
            setMoveData(res.data);
            setBackgroundColor(types[res.data.type.name]);
            setPathImage(`../static/images/poke_types/${res.data.type.name}.png`);
        };
        fetchData();
    }, [])

    return (
        <div>
            {moveData ? 
            <div class="move" style={{backgroundColor: backgroundColor}}>    
                <img src={pathImage}/>
                {moveData.name}
            </div>:
            <div>
                Загрузка...
            </div>}
        </div>
    );
};

export default Move;
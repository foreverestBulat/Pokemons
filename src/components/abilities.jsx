import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from './loading';

const Abilities = ({abilities}) => {

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

    const [abilitiesData, setAbilitiesData] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            abilities.map(async(item) => {
                let res = await axios.get(item.ability.url);
                abilitiesData.push(res.data);
            })
        };
        fetchData();
    }, [])

    return (
        <div class="Abilities child">
            <h1>Abilities</h1>
            <div>
                {abilities ?
                <div class="list-abilities">
                    {abilities.map(item => 
                        <div class="ability" style={{backgroundColor: "#C0C0C0"}}>
                            {item.ability.name}
                        </div>)}
                </div>:
                <Loading/>
                }
            </div>
        </div>
    );
};

export default Abilities;
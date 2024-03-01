import axios from "axios";
import React, {useEffect, useState} from "react";




const PokeTypeDiv = ({name, ...props}) => {

    const types = {
        'normal': ['#A52A2A', 'white'],
        'fighting': ['#FFA500', 'white'],
        'flying': ['#5F9EA0', 'white'],
        'poison': ['#9400D3', 'white'],
        'ground': ['#D2691E', 'white'],
        'rock': ['#8B4513', 'white'],
        'bug': ['#006400', 'white'],
        'ghost': ['#483D8B', 'white'],
        'steel': ['#00FF7F', 'white'],
        'fire': ['#FF0000', 'white'],
        'water': ['#0000FF', 'white'],
        'grass': ['#008000', 'white'],
        'electric': ['#FFFF00', 'black'],
        'phychic': ['#DB7093', 'black'],
        'ice': ['#ADD8E6', 'white'],
        'dragon': ['#00FFFF', 'white'],
        'dark': ['#000000', 'white'],
        'fairy': ['#DC143C', 'white'],
        'unknown': ['#A9A9A9', 'white'],
        'shadow': ['#191970', 'white']
    }

    const [backgroundColor, setBackgroundColor] = useState();
    const [textColor, setTextColor] = useState();

    useEffect(() => {
        if (name in types){
            setBackgroundColor(types[name][0])
            setTextColor(types[name][1])
        }
    },[])
    
    return (
        <div style={{backgroundColor: backgroundColor, color: textColor}} {...props}>
            <p>{name}</p>
        </div>
    )
}

export default PokeTypeDiv;
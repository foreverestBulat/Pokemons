import React from 'react';
import ProgressBar from './UI/progress-bar';

const Stats = ({stats}) => {

    const statsColor = {
        'hp': '#00FF00',
        'attack': '#FF0000',
        'defense': '#0000FF',
        'special-attack': '#800000',
        'special-defense': '#000080',
        'speed': '#FFFF00',
        'accuracy': '#D2691E',
        'evasion': '#6A5ACD',
    }    

    return (
        <div class="stats">
            {stats.map(item => 
                <div>
                    <h1>{item.stat.name}</h1>
                    <ProgressBar color={statsColor[item.stat.name]} percent={item.base_stat}/>
                </div>)
            }
        </div>
    );
};

export default Stats;
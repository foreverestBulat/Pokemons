import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Move from './move';

const Moves = ({moves}) => {
    return (
        <div class="Moves child">
            <h1>Moves</h1>
            <div class="list-moves">
                {moves.map(item => {
                    return <Move move={item.move}/>
                })}
            </div>
        </div>
    );
};

export default Moves;
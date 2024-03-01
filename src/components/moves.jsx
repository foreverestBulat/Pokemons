import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Move from './move';

const Moves = ({moves}) => {
    return (
        <div class="Moves child">
            <h1>Moves</h1>
            <div>
                {moves.map(item => {
                    return <Move move={item.move}/>
                })}
            </div>
        </div>
    );
};

export default Moves;
import React from 'react';
import Stats from './stats';
import PokeTypeDiv from './UI/div/TypeDiv';

const MainState = ({pokemon}) => {
    return (
        <div class="main-state child">
            <div class="name-id-types">
                <div class="name-id">
                    <div class="id">#{pokemon.id}</div>
                    <div class="name">{pokemon.name}</div>
                </div>
                <div>
                    <div class="types">
                        {pokemon.types.map(item => 
                            <div>
                                <PokeTypeDiv name={item.type.name}/>
                            </div>)}
                    </div>
                </div>
            </div>
            <div class="stats-image">
                <Stats stats={pokemon.stats}/>
                <div>
                    <img src={pokemon.sprites.front_default}/>
                </div>
            </div>
        </div>
    )
}

export default MainState;
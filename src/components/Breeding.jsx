import React from 'react';

const Breeding = ({height, weight}) => {

    return (
        <div class="breeding child">
            <h1>Breeding</h1>
            <div class="values">
                <div class="height value">
                    <div>Height</div>
                    <div>{height}</div>
                </div>
                <div class="weight value">
                    <div>Weight</div>
                    <div>{weight}</div>
                </div>
            </div>
        </div>
    );
};

export default Breeding;
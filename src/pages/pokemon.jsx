import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import Stats from "../components/stats";
import Breeding from "../components/Breeding";
import Moves from "../components/moves";
import Abilities from "../components/abilities";
import Poke from "../components/poke";
// import * from ".../public/static/css/pokemonpage.css";

const Pokemon = () => {
    return (
        <div>
            <link rel="stylesheet" href="static/css/pokemonpage.css"/>
            <Poke/>
        </div>
    )
}

export default Pokemon;
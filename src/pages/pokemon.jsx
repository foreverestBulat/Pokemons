import Poke from "../components/poke";
import {useNavigate} from 'react-router-dom';

const Pokemon = () => {

    const navigate = useNavigate()
    const backOnClick = () => {
        navigate('/pokemons');
    }

    return (
        <div>
            <link rel="stylesheet" href="static/css/pokemonpage.css"/>
            <div class="nav back">
                <div class="btn-back" onClick={backOnClick}>
                    back
                </div>
            </div>
            <Poke/>
        </div>
    )
}

export default Pokemon;
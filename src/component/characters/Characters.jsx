import CharactersList from "../charactersList/CharactersList";
import {useEffect} from "react";
import '../../assets/style/style.scss'
function Characters () {
    useEffect(() => {
        document.title = 'Characters'
    }, []);
    return (
        <div className='characters_main'>
            <div className="characters_header">
                <h2>MARVEL CHARACTERS</h2>
                <h3>Get hooked on a hearty helping of heroes and villains from the humble House of Ideas!</h3>
            </div>
            <CharactersList/>
        </div>
    )
}

export default Characters;
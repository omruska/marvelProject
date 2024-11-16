import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import '../../assets/style/style.scss';

const baseURL = 'http://gateway.marvel.com/v1/public/characters';
const apiKey = '59dc8eb1676af58e22f0f1df09a45b0d';
const ts = '1700567371';
const hash = '9b9c632b81366fa0cf7a23ca28252b1e';

function CharacterDetails() {
    const characterId = useParams().id;
    const [character, setCharacter] = useState(null);
    const [error, setError] = useState(null);
    const size = 'portrait_uncanny';

    async function fetchData() {
        try {
            const response = await axios.get(`${baseURL}/${characterId}`, {
                params: {
                    apikey: apiKey,
                    hash: hash,
                    ts: ts,
                },
            });
            setCharacter(response.data.data.results[0]);
        } catch (error) {
            setError(error.response.data.message);
        }
    }

    useEffect(() => {
        fetchData();
    }, [characterId]);

    if (error) {
        return <div className='error'><h2>{error}</h2></div>;
    } else if (character) {
        return (
            <div className='characters-details'>
                <div className="characters-details-header">
                    <img
                        src={`${character.thumbnail.path}/${size}.${character.thumbnail.extension}`}
                        alt={character.name}
                    />
                    <div className="name">
                        <h3>{character.name}</h3>
                        <p>{character.description}</p>
                    </div>
                </div>
                <div className="characters-main">
                    <div className="series">
                        <h4>Series:</h4>
                        {character.series.items.map((serie, index) => (
                            <div key={index}>
                                <p>{serie.name}</p>
                            </div>
                        ))}
                    </div>
                    <div className="character-comics">
                        <h4>Comics:</h4>
                        {character.comics.items.map((comic, index) => (
                            <div key={index}>
                                <p>{comic.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                
            </div>
        );
    }

    return null;
}

export default CharacterDetails;

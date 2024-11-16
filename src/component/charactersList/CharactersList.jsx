import React, { useEffect, useState } from "react";
import axios from "axios";
import '../../assets/style/style.scss'
import {Link} from "react-router-dom";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';



const baseURL = 'http://gateway.marvel.com/v1/public/characters';
const apiKey ='59dc8eb1676af58e22f0f1df09a45b0d';
const ts = '1700567371';
const hash = '9b9c632b81366fa0cf7a23ca28252b1e';


function CharactersList() {
    const [characters, setCharacters] = useState([]);
    const [search, setSearch] = useState('');
    const [error, setError] = useState(null);
    const [total_pages, setTotalPages] = useState(1);
    const [page, setPage] = useState(1);
    const size = 'portrait_fantastic';



    function searchCharacters(e){
        e.preventDefault()
       getCharacters(search, page)
    }
    function setCharactersPage(e, value){
        setPage(value);
        getCharacters(search, value);
    }

    function getCharacters(search){
        let params;
        if(search){
             params = {
                apikey: apiKey,
                hash: hash,
                ts: ts,
                nameStartsWith: search,
                 offset: page,
            }
        } else {
            params = {
                apikey: apiKey,
                hash: hash,
                ts: ts,
                limit: 96,
                offset:page,

            }
        }

        axios.get(baseURL, {
            params: params
        })
            .then(response => {
                setCharacters(response.data.data.results);
                let totalPages = response.data.data.total;
                if(totalPages && totalPages <= 500){
                    setTotalPages(totalPages)
                } else {
                    setTotalPages(500)
                }

            })
            .catch(error => {
                setError(error.response.data.message);
            })
    }

    useEffect(() => {
        getCharacters(search, page)
    }, []);

    if (error) {
        return <div className='error'>Error: {error}</div>;
    }

    if (!characters) {
        return null;
    }

    return (
        <>
            <form
                onSubmit={searchCharacters}
            >
                <input
                    className='search'
                    type="text"
                    value={search}
                    onChange={(e)=> setSearch(e.target.value)}
                />
                <button type='submit'>SEARCH</button>
            </form>
            {characters.length === 0 && !error && (
                <div className='no-results'>
                    <h2>No results found</h2>
                </div>
            )}
            <div className='characters'>
                {characters.map(character => (
                    character.thumbnail && !character.thumbnail.path.includes("image_not_available") ? (
                        <div key={character.id} className='card'>
                            <Link to={"/characters/" + character.id} className='link'>
                                <img
                                    src={`${character.thumbnail.path}/${size}.${character.thumbnail.extension}`}
                                    alt={character.name}
                                />
                                <div className="name">
                                    <h3>{character.name}</h3>
                                </div>
                            </Link>
                        </div>
                    ) : null
                ))}
            </div>
            <div className="pagination">
                <Stack spacing={2}>
                    <Pagination
                        count={total_pages}
                        onChange={setCharactersPage}
                    />
                </Stack>
            </div>
        </>

    );
}

export default CharactersList;

import React, { useEffect, useState } from "react";
import axios from "axios";
import '../../assets/style/style.scss';
import { Link } from "react-router-dom";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const baseURL = 'https://gateway.marvel.com/v1/public/characters';
const apiKey = 'da0242ba1b3eb6958263ae370c098841';
const ts = '1700567371';
const hash = '9b9c632b81366fa0cf7a23ca28252b1e';

function CharactersList() {
    const [characters, setCharacters] = useState([]);
    const [search, setSearch] = useState('');
    const [error, setError] = useState(null);
    const [totalPages, setTotalPages] = useState(1);
    const [page, setPage] = useState(1);
    const size = 'portrait_fantastic';

    function searchCharacters(e) {
        e.preventDefault();
        setPage(1);
        getCharacters(search, 1);
    }

    function setCharactersPage(e, value) {
        setPage(value);
        getCharacters(search, value);
    }

    function getCharacters(searchTerm, pageNumber) {
        const offset = (pageNumber - 1) * 96;
        const params = {
            apikey: apiKey,
            hash: hash,
            ts: ts,
            limit: 96,
            offset: offset
        };

        if (searchTerm) {
            params.nameStartsWith = searchTerm;
        }

        axios.get(baseURL, { params })
            .then(response => {
                setCharacters(response.data.data.results);
                const totalResults = response.data.data.total;
                const totalPages = Math.ceil(totalResults / 96);
                setTotalPages(Math.min(totalPages, 500)); // Marvel API максимум 500
                setError(null);
            })
            .catch(error => {
                console.error(error);
                setError(error?.response?.data?.message || 'Something went wrong.');
                setCharacters([]);
            });
    }

    useEffect(() => {
        getCharacters(search, page);
    }, []);

    if (error) {
        return <div className='error'>Error: {error}</div>;
    }

    if (!characters) {
        return null;
    }

    return (
        <>
            <form onSubmit={searchCharacters}>
                <input
                    className='search'
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
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
                        count={totalPages}
                        page={page}
                        onChange={setCharactersPage}
                    />
                </Stack>
            </div>
        </>
    );
}

export default CharactersList;

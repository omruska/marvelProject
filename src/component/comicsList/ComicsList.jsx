import React, { useEffect, useState } from "react";
import axios from "axios";
import '../../assets/style/style.scss'
import ModalBuyForm from "../modalBuyForm/ModalBuyForm";
import BuyForm from "../buyForm/BuyForm";

const baseURL = 'http://gateway.marvel.com/v1/public/comics';
const apiKey ='59dc8eb1676af58e22f0f1df09a45b0d';
const ts = '1700567371';
const hash = '9b9c632b81366fa0cf7a23ca28252b1e';


function ComicsList() {
    const [comics, setComics] = useState([]);
    const [error, setError] = useState(null);
    const [users, setUsers] = useState([]);
    const [comicModals, setComicModals] = useState(comics.map(() => false));
    const [showBuyNowForm, setShowBuyNowForm] = useState(false);
    const size = 'portrait_incredible';

    useEffect(() => {
        axios.get(baseURL, {
            params: {
                apikey: apiKey,
                hash: hash,
                ts: ts,
                limit: 100,
            }
        })
            .then(response => {
                const shuffledComics = response.data.data.results.sort(() => Math.random() - 0.5);
                setComics(shuffledComics);
            })
            .catch(error => {
                setError(error.response.data.message);
            });
    }, []);

    if (error) {
        return <div className='error'>Error: {error}</div>;
    }

    if (!comics) {
        return null;
    }
    const handleCloseBuyNowForm = () => {
        setShowBuyNowForm(false);
    };
    const handleBuyNow = (newUser) => {
        setUsers([...users, newUser]);
        console.log('Handling sign in:', newUser);
        setShowBuyNowForm(false);
    };


    const openBuyNowModal = (index) => {
        setComicModals(prevState => {
            const newState = [...prevState];
            newState[index] = true;
            return newState;
        });
    };

    const closeBuyNowModal = (index) => {
        setComicModals(prevState => {
            const newState = [...prevState];
            newState[index] = false;
            return newState;
        });
    };

    return (
        <div className='comics'>
            {comics.map((comic, index) => (
                comic.thumbnail && !comic.thumbnail.path.includes("image_not_available") ? (
                    <div key={comic.id} className='card'>
                        <img
                            src={`${comic.thumbnail.path}/${size}.${comic.thumbnail.extension}`}
                            alt={comic.title}
                        />
                        <div className="name">
                            <h3>{comic.title}</h3>
                            <button onClick={() => openBuyNowModal(index)}>Buy now!</button>
                            <ModalBuyForm
                                isOpen={comicModals[index]}
                                onClose={() => closeBuyNowModal(index)}
                                onBuyNow={handleBuyNow}
                            />
                            {comicModals[index] && (
                                <BuyForm
                                    onClose={handleCloseBuyNowForm}
                                    onBuyNow={handleBuyNow}
                                    users={users}
                                />)}
                        </div>
                    </div>

                ) : null
            ))}

        </div>
    );
}

export default ComicsList;
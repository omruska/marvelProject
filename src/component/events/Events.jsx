import React, { useEffect, useState } from "react";
import axios from "axios";
import '../../assets/style/style.scss'

const baseURL = 'http://gateway.marvel.com/v1/public/events';
const apiKey ='59dc8eb1676af58e22f0f1df09a45b0d';
const ts = '1700567371';
const hash = '9b9c632b81366fa0cf7a23ca28252b1e';

function Events () {
    useEffect(() => {
        document.title = 'Events'
    }, []);


    const [events, setEvents] = useState([]);
    const [error, setError] = useState(null);
    const size = 'portrait_uncanny';

    useEffect(() => {
        axios.get(baseURL, {
            params: {
                apikey: apiKey,
                hash: hash,
                ts: ts,
                limit: 30,
            }
        })
            .then(response => {
                const shuffledEvents = response.data.data.results;
                setEvents(shuffledEvents);

            })
            .catch(error => {
                setError(error.response.data.message);
            })
    }, []);

    if (error) {
        return <div className='error'>Error: {error}</div>;
    }

    if (!events) {
        return null;
    }

    return (
        <div className='events'>
            <div className="events-header">
                <h1>"Marvelous Chronicles:Dive into the Realm of Captivating Comic Events and Epic Crossovers in the Marvel Universe!"</h1>
            </div>
            <div className="events-card">
                {events.map(event => (
                        <div key={event.id} className='card-events'>
                            <h3>{event.title}</h3>
                            <img
                                src={`${event.thumbnail.path}/${size}.${event.thumbnail.extension}`}
                                alt={event.title}
                            />
                            <p className='description'>{event.description}</p>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}

export default Events;
import React, { useEffect} from 'react';
import '../../assets/style/style.scss';
import picture1 from '../../assets/img/home_picture1.jpg';
import picture2 from '../../assets/img/home_picture2.jpg';
import picture3 from '../../assets/img/home_picture3.jpg';
import { bounce, pulse, tada } from 'react-animations';
import Radium, {StyleRoot} from 'radium';


function Home () {
    useEffect(() => {
        document.title = 'MARVEL'
    }, []);

    const styles = {
        bounce: {
            animation: 'bounce 1s infinite',
            animationName: Radium.keyframes(bounce, 'bounce'),
        },
        pulse: {
            animation: 'pulse 4s infinite',
            animationName: Radium.keyframes(pulse, 'pulse'),
        },
        tada: {
            animation: 'pulse 4s infinite',
            animationName: Radium.keyframes(tada, 'tada'),
        }
    };

    return (
        <div className='wrapper'>
            <div className="home-header">
                <h1>The best stories in the world, all in one place!</h1>
            </div>
            <div className="home-description">
                <h2>Marvel movies: the official timeline to watch</h2>
                <h3>If you have long been planning to get to know more about the Marvel universe, then it is best to take on this serious endeavor, well prepared. Namely - making a list of movies in the correct chronology to maximize immersion in the fantastic movie universe.</h3>
                <div className="poster-container">
                    <StyleRoot>
                        <img src={picture3} className="poster" style={styles.bounce}/>
                    </StyleRoot>
                </div>
                <p>Whether you want to "go" in Marvel's release order, chronological order, or the final order that includes each project, short or feature film, we've put together a list for you that covers it all!</p>
                <p>Get ready to sit down to watch with a huge bucket of popcorn because you're in for a long, long time, but trust me, it's worth i.</p>
                <h3>So, option 1. How to watch Marvel movies in chronological order:</h3>
                <div className="timeline">
                    <ul>
                        <li>Captain America: Captain America: Captain America: The First Avenger</li>
                        <li>Captain Marvel</li>
                        <li>Iron Man</li>
                        <li>The Incredible Hulk</li>
                        <li>Iron Man 2</li>
                        <li>Torus</li>
                        <li>Avengers</li>
                        <li>Thor: The Dark World</li>
                        <li>Iron Man 3</li>
                        <li>Captain America: The Winter Soldier</li>
                        <li>Guardians of the Galaxy</li>
                        <li>Guardians of the Galaxy Tom. 2</li>
                        <li>Avengers: Age of Ultron</li>
                        <li>Ant-Man</li>
                        <li>Captain America: Civil War</li>
                        <li>Black Panther</li>
                        <li>Spider-Man: Homecoming</li>
                        <li>Black Widow</li>
                        <li>Doctor Strange</li>
                        <li>Thor: Ragnarok</li>
                        <li>Ant-Man and the Wasp</li>
                        <li>Avengers: Infinity War</li>
                        <li>Avengers: Endgame</li>
                        <li>Shang-Chi and the Legend of the Ten Rings</li>
                        <li>Spider-Man: Far From Home</li>
                        <li>Eternal</li>
                        <li>Spider-Man: No Way Home</li>
                        <li>Doctor Strange in the Multiverse of Madness</li>
                    </ul>
                    <div className="poster-container">
                        <StyleRoot>
                            <img src={picture2} className="poster" style={styles.pulse}/>
                        </StyleRoot>
                    </div>
                </div>
                <div className="timeline">
                    <div className="option">
                        <h3>Option 2. How to watch Marvel movies in order by release date:</h3>
                        <h4>Phase 1:</h4>
                        <ul>
                            <li>Iron Man</li>
                            <li>Iron Man 2</li>
                            <li>Torus</li>
                            <li>Captain America: Captain America: Captain America: The First Avenger</li>
                            <li>Avengers</li>
                        </ul>
                        <h4>Phase 2:</h4>
                        <ul>
                            <li>Iron Man 3</li>
                            <li>Thor: The Dark World</li>
                            <li>Captain America: The Winter Soldier</li>
                            <li>Guardians of the Galaxy</li>
                            <li>Avengers: Age of Ultron</li>
                            <li>Ant-Man</li>
                        </ul>
                        <h4>Phase 3:</h4>
                        <ul>
                            <li>Captain America. Civil war</li>
                            <li>Doctor Strange</li>
                            <li>Guardians of the Galaxy Vol. 2</li>
                            <li>Spider-Man: Homecoming</li>
                            <li>Thor: Ragnarok</li>
                            <li>Black Panther</li>
                            <li>Avengers: Infinity War</li>
                            <li>Ant-Man and the Wasp</li>
                            <li>Captain Marvel</li>
                            <li>Avengers: Endgame</li>
                            <li>Spider-Man: Far From Home</li>
                        </ul>
                        <h4>Phase 4:</h4>
                        <ul>
                            <li>Black Widow</li>
                            <li>Shang-Chi and the Legend of the Ten Rings</li>
                            <li>Eternal</li>
                            <li>Spider-Man: No Way Home</li>
                            <li>Doctor Strange in the Multiverse of Madness</li>
                        </ul>
                    </div>
                    <div className="poster-container">
                        <StyleRoot>
                            <img src={picture1} className="poster" style={styles.tada}/>
                        </StyleRoot>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
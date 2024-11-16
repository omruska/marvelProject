import logo from "../../assets/img/logo.png";
import '../../assets/style/style.scss';
import MainMenu from "../mainMenu/MainMenu";
import { Link } from "react-router-dom";
import FormSignUp from "../formSignUp/FormSignUp";
import FormSignIn from "../formSignIn/FormSignIn";
import ModalFormUp from "../modalFormUp/ModalFormUp";
import ModalFormIn from "../modalFormIn/ModalFormIn";
import React, { useState, useEffect } from 'react';



const links = {
    class: 'main-menu',
    link: [
        {
            link:'HOME',
            path: '/home',
        },
        {
            link:'COMICS',
            path: '/comics',
        },
        {
            link:'CHARACTERS',
            path: '/characters',
        },
        {
            link:'EVENTS',
            path: '/events',
        },
    ],
}

function Header() {
    const [isActive, setActive] = useState(false);
    const [showSignUpForm, setShowSignUpForm] = useState(false);
    const [showSignInForm, setShowSignInForm] = useState(false);
    const [signUpModalIsOpen, setSignUpModalIsOpen] = useState(false);
    const [signInModalIsOpen, setSignInModalIsOpen] = useState(false);
    const [users, setUsers] = useState([]);
    const [loggedIn, setLoggedIn] = useState()

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        setUsers(storedUsers);
    }, []);
    function burgerMenu(){
        setActive(!isActive);
    }
    const handleSignUp = (newUser) => {
        const updatedUsers = [...users, newUser];
        setUsers(updatedUsers);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        console.log(updatedUsers);
    };

    const handleSignIn = async (values) => {
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            setUsers([...users, values]);
            const userExists = users.some(
                (user) => user.email === values.email && user.password === values.password
            );
            if (userExists) {
                setShowSignInForm(false);
                setLoggedIn(true);
                localStorage.setItem('users', JSON.stringify([...users, values]));
            } else {
                console.log('User not found. Display error message or handle accordingly.');
            }
        } catch (error) {
            console.error('Error during sign-in:', error);
        }
    };
    const handleSignOut = () => {
        setLoggedIn(false);
        setUsers([]);
    };

    const handleCloseSignUpForm = () => {
        setShowSignUpForm(false);
    };



    const handleCloseSignInForm = () => {
        setShowSignInForm(false);
    };



    const openSignUpModal = () => {
        setSignUpModalIsOpen(true);
    };

    const closeSignUpModal = () => {
        setSignUpModalIsOpen(false);
    };

    const openSignInModal = () => {
        setSignInModalIsOpen(true);
    };

    const closeSignInModal = () => {
        setSignInModalIsOpen(false);
    };


    return (
        <header>
            <div className='header'>
                <div className="logo">
                    <Link to="/"><img src={logo} alt="logo" /></Link>
                </div>
                <div className={isActive ? 'main-menu active' : 'main-menu'}>
                    <MainMenu links={links.link}/>
                </div>
                <div className="btn">
                    {loggedIn ? (
                        <>
                            <span className='log'>{users.find(user => user.name)?.name}</span>
                            <button onClick={handleSignOut}>LOG OUT</button>
                        </>
                    ) : (
                        <>
                        <button onClick={openSignUpModal}>SIGN UP</button>
                            <ModalFormUp isOpen={signUpModalIsOpen} onClose={closeSignUpModal} onSignUp={handleSignUp} />
                            <button onClick={openSignInModal}>SIGN IN</button>
                            <ModalFormIn isOpen={signInModalIsOpen} onClose={closeSignInModal} onSignIn={handleSignIn} />
                        </>
                    )}
                </div>
                <div
                    className={isActive ? 'burger active' : 'burger'}
                    onClick={burgerMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            {showSignUpForm && <FormSignUp onClose={handleCloseSignUpForm} onSignUp={handleSignUp} />}
            {showSignInForm && <FormSignIn onClose={handleCloseSignInForm} onSignIn={handleSignIn}  users={users} />}
        </header>
    );
}

export default Header;
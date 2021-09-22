import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar(props) {

    const BoldAboutActive = ()=> {
        if(AboutActive==='active') {
            setAboutActive('');
        }
        else {
            setAboutActive('active');
            setHomeActive('');
            setContactActive('');
        }
    }

    const BoldHomeActive = ()=> {
        if(HomeActive ==='active') {
            setHomeActive('');
        }
        else {
            setHomeActive('active');
            setContactActive('');
            setAboutActive('');
        }
    }

    const BoldContactActive = ()=> {
        if(ContactActive==='active') {
            setContactActive('');
        }
        else {
            setContactActive('active');
            setHomeActive('');
            setAboutActive('');
        }
    }

    const [AboutActive, setAboutActive] = useState('');
    const [HomeActive, setHomeActive] = useState('active');
    const [ContactActive, setContactActive] = useState('');

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-warning">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.name}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className={`nav-link ${HomeActive}`} aria-current="page" to="/" onClick={BoldHomeActive}>Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className={`nav-link ${AboutActive}`} to="/about" onClick={BoldAboutActive}>About</Link>
                    </li>
                    <li className="nav-item">
                    <Link className={`nav-link ${ContactActive}`} to="/form" onClick={BoldContactActive}>Contact</Link>
                    </li>
                    </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-dark" type="submit">Search</button>
                </form>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default Navbar

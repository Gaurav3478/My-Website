import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
function Navbar(props) {

    const boldify = ()=> {
        <strong></strong>
    }

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
                    <Link className="nav-link active" aria-current="page" to="/"><strong>Home</strong></Link>
                    </li>
                    <li className="nav-item" onClick={boldify}>
                    <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/form">Contact</Link>
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
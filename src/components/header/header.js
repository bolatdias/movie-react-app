import React from "react";
import { Link } from 'react-router-dom'
import './header.css'
import logo from '../../assets/netflix-logo.png'
const Header = () => {

    return (
        <div className="header-container">
            <div className="right-container">
                <Link to="/" className="logo"><img src={logo} /></Link>
            </div>
            <div className="left-container">
                <Link to="/movie">Movies</Link>
                <Link to="/tvshows">TV Shows</Link>
            </div>
        </div>
    )
}

export default Header
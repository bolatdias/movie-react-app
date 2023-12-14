import React from "react";
import { Link } from 'react-router-dom'
import './header.css'
import logo from '../../assets/netflix-logo.png'
import SearchBar from "../search-bar";
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid" id='start'>
                <Link to="/" className="navbar-brand logo"><img src={logo} alt="Netflix Logo" /></Link>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/movie" className="nav-link">Movies</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/tvshows" className="nav-link">TV Shows</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                More
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link to="/genre/action" className="dropdown-item">Action</Link></li>
                                <li><Link to="/genre/drama" className="dropdown-item">Drama</Link></li>
                                {/* Add more dropdown items as needed */}
                            </ul>
                        </li>
                    </ul>
                </div>

                <SearchBar placeholder={'Find Movie'} />
            </div>
        </nav>
    );
}

export default Header;

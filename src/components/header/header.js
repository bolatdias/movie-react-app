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
                                <li><Link to="/genre/28" className="dropdown-item">Action</Link></li>
                                <li><Link to="/genre/12" className="dropdown-item">Adventure</Link></li>
                                <li><Link to="/genre/16" className="dropdown-item">Animation</Link></li>
                                <li><Link to="/genre/35" className="dropdown-item">Comedy</Link></li>
                                <li><Link to="/genre/80" className="dropdown-item">Crime</Link></li>
                                <li><Link to="/genre/99" className="dropdown-item">Documentary</Link></li>
                                <li><Link to="/genre/18" className="dropdown-item">Drama</Link></li>
                                <li><Link to="/genre/10751" className="dropdown-item">Family</Link></li>
                                <li><Link to="/genre/14" className="dropdown-item">Fantasy</Link></li>
                                <li><Link to="/genre/36" className="dropdown-item">History</Link></li>
                                <li><Link to="/genre/27" className="dropdown-item">Horror</Link></li>
                                <li><Link to="/genre/10402" className="dropdown-item">Music</Link></li>
                                <li><Link to="/genre/9648" className="dropdown-item">Mystery</Link></li>
                                <li><Link to="/genre/10749" className="dropdown-item">Romance</Link></li>
                                <li><Link to="/genre/878" className="dropdown-item">Science Fiction</Link></li>
                                <li><Link to="/genre/10770" className="dropdown-item">TV Movie</Link></li>
                                <li><Link to="/genre/53" className="dropdown-item">Thriller</Link></li>
                                <li><Link to="/genre/10752" className="dropdown-item">War</Link></li>
                                <li><Link to="/genre/37" className="dropdown-item">Western</Link></li>
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

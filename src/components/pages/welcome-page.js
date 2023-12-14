// src/components/WelcomePage.js

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
    return (
        <div className="welcome-container">
            <div className="justify-content-center align-items-center welcome-row">
                <div className="text-center">
                    <h1>Welcome to Movie App</h1>
                    <p>Discover and explore a world of movies!</p>
                    <Link to={'/movie'} >
                        <button className='welcome-button'>
                            Get Started
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;

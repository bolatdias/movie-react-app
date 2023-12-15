// MoviesPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './movies-row-list.css'

const MoviesRowList = ({ title, func, movieService, isTVshow }) => {
    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        try {
            const result = await func;
            setMovies(result.results);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <div className='container'>
            <h2 className='recomadation-title'>{title}</h2>
            <div className='movie-container'>
                <div className="movie-row">
                    {movies.map((movie) => (
                        <div className='col movie-card' key={movie.id}>
                            {isTVshow ? (
                                <Link to={`/tvshow/${movie.id}`}>
                                    <img src={movieService.getPosterImageByMovie(movie)} alt={movie.title} />
                                </Link>
                            ) : (
                                <Link to={`/movie/${movie.id}`}>
                                    <img src={movieService.getPosterImageByMovie(movie)} alt={movie.title} />
                                </Link>
                            )}
                            {isTVshow ? <p>{movie.first_air_date.slice(0, 4)}</p> : <p>{movie.release_date.slice(0, 4)}</p>}
                            <h6>{movie.title}</h6>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MoviesRowList;

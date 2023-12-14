// MoviesPage.js
import React, { useState, useEffect } from 'react';
import MovieService from '../../service/movie-service';
import './movies-row-list.css'

const MoviesRowList = ({title, func, movieService}) => {
    const [page, setPage] = useState(1);
    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        try {
            const result = await func(page);
            setMovies((prevMovies) => [...prevMovies, ...result.results]);
            setPage((prevPage) => prevPage + 1);
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
                            <img src={movieService.getPosterImageByMovie(movie)} alt={movie.title} />
                            <p>{movie.release_date.slice(0,4)}</p>
                            <h6>{movie.title}</h6>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MoviesRowList;

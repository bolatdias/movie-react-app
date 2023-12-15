import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './search-items.css';

const SearchItems = ({ movieService }) => {
    const [searchParams] = useSearchParams();
    const searchTerm = searchParams.get('q') || 'DefaultSearchTerm';
    const [movies, setMovies] = useState([]);
    const [totalResults, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const moviesData = await movieService.getSearchedMovies(searchTerm, currentPage);
                setMovies(moviesData.results);
                setTotal(moviesData.total_results);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        fetchMovies();

        return () => { };
    }, [searchTerm, movieService, currentPage]);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div className='container mt-5 mb-5'>
            <h2>Searching results - {totalResults} movies</h2>
            {movies.map((movie) => (
                <div className='search-movie-card' key={movie.id}>
                    <Link to={`/movie/${movie.id}`} className='search-container'>
                        <img src={movieService.getPosterImageByMovie(movie)} alt={movie.title} />
                        <div className='search-text-container'>
                            <h5>{movie.title}</h5>
                            <p>{movie.release_date.slice(0, 4)}</p>
                            <p>{movie.overview}</p>
                        </div>
                    </Link>
                </div>
            ))}
            {totalResults >= 20 && (
                <div className='pagination'>
                    <a href='#start'>
                        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                            Previous Page
                        </button>
                    </a>

                    <span>Page {currentPage}</span>

                    <a href='#start'>
                        <button onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage * 20 >= totalResults}
                            className='btn-primary'>
                            Next Page
                        </button>
                    </a>
                </div>
            )
            }
        </div >
    );
};

export default SearchItems;

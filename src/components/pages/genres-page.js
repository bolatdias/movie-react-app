import React, { useState, useEffect } from "react";
import MovieGenreItem from "../movies-genres-list";
import { useParams } from "react-router-dom";

const GenresPage = ({ movieService }) => {
    const { id } = useParams();
    const [movies, setMovies] = useState([]);
    const [totalResults, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const moviesData = await movieService.getMoviesByGenreID(id, currentPage);
                setMovies(moviesData.results);
                setTotal(moviesData.total_results);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        fetchMovies();

    }, [movieService, id, currentPage]);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div className='container mt-5 mb-5'>
            <h2>{movieService.genresMap[id]}- {totalResults} movies</h2>

            {movies.map((movie) => (
                <MovieGenreItem key={movie.id} movieService={movieService} id={movie.id} />
            ))}


            {totalResults >= 20 && (
                <div className='pagination'>
                    <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                        Previous Page
                    </button>

                    <span>Page {currentPage}</span>

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage * 20 >= totalResults}
                        className='btn-primary'>
                        Next Page
                    </button>
                </div>
            )}
        </div>
    );
};

export default GenresPage;

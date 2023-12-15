import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MovieGenreItem = ({ id, movieService }) => {
    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const details = await movieService.getDetailsById(id);
                setMovieDetails(details);
            } catch (error) {
                console.error("Error fetching movie details:", error);
            }
        };

        fetchMovieDetails();
    }, [id, movieService]);

    if (!movieDetails) {
        // You can render a loading state or return null
        return null;
    }

    return (
        <div className='search-movie-card' key={id}>
            <Link to={`/movie/${id}`} className='search-container'>
                <img src={movieService.getPosterImageByMovie(movieDetails)} alt={movieDetails.title} />
                <div className='search-text-container'>
                    <h5>{movieDetails.title}</h5>
                    <p>{movieDetails.release_date.slice(0, 4)+' '}
                        <span>{movieDetails.genres.map(genre => <span key={genre.id}>{genre.name + ' | '}</span>)}</span>
                    </p>
                    <p>{movieDetails.overview}</p>
                    <div className="genres">

                    </div>
                </div>
            </Link>
        </div>
    );
};

export default MovieGenreItem;

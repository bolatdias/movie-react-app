import React, { useState, useEffect } from "react";
import './movie-landnig-info.css'
import MovieTrailer from "../movieTrailer/movieTrailer";

const MovieLandingInfo = ({ id, movieService, video }) => {
    const [movieDetails, setMovieDetails] = useState({});

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

    return (
        <div className="info">
            <img
                className="background-img d-sm-none d-md-block d-lg-block"
                src={movieService.getBackgroundImageByMovie(movieDetails)}
                alt={movieDetails.title}
            />
            <div className="white-container" />

            <div className="container">
                <h2 className="landing-title">{movieDetails.title}</h2>
                {movieDetails.release_date && (
                    <p className="landing-text">
                        {movieDetails.release_date.slice(0, 4)} |
                        {movieDetails.genres && movieDetails.genres.map((genre) => (
                            <span key={genre.id} className="genre-text">
                                {movieService.genresMap[genre.id] || 'Unknown Genre'}
                                {' '}
                            </span>
                        ))}
                    </p>
                )}
            </div>


            <div className="info-container">
                <div className="container">
                    <div className="row justify-content-between ">
                        <div className="col-md-5">
                            <h5>Descriptions</h5>
                            <p>{movieDetails.overview}</p>

                            <h5>Production Companies</h5>
                            {movieDetails.production_companies && movieDetails.production_companies.map((company) => (
                                <div key={company.id}>
                                    {company.name} (Country: {company.origin_country})
                                </div>
                            ))}
                            <br />
                            <h5>Production Countries</h5>
                            {movieDetails.production_countries && movieDetails.production_countries.map((country) => (
                                <div key={country.iso_3166_1}>
                                    {country.name}
                                </div>
                            ))}
                        </div>

                        <div className="col-md-5">
                            <MovieTrailer video={video} />
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default MovieLandingInfo;

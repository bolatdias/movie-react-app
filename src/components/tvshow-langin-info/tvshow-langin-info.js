import React, { useState, useEffect } from "react";
import MovieTrailer from "../movieTrailer/movieTrailer";

const TVShowLanginInfo = ({ id, movieService, video }) => {
    const [showDetails, setShowDetails] = useState({});

    useEffect(() => {
        const fetchShowDetails = async () => {
            try {
                const details = await movieService.getTVShowDetailsById(id);
                setShowDetails(details);
            } catch (error) {
                console.error("Error fetching show details:", error);
            }
        };

        fetchShowDetails();
    }, [id, movieService]);

    return (
        <div className="info">
            <img
                className="background-img d-sm-none d-md-block d-lg-block"
                src={movieService.getBackgroundImageByMovie(showDetails)}
                alt={showDetails.name}
            />
            <div className="white-container" />

            <div className="container">
                <h2 className="landing-title">{showDetails.name}</h2>
                {showDetails.first_air_date && (
                    <p className="landing-text">
                        {showDetails.first_air_date.slice(0, 4)} |
                        {showDetails.genres && showDetails.genres.map((genre) => (
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
                            <h5>Overview</h5>
                            <p>{showDetails.overview}</p>

                            <h5>Production Companies</h5>
                            {showDetails.production_companies && showDetails.production_companies.map((company) => (
                                <div key={company.id}>
                                    {company.name} (Country: {company.origin_country})
                                </div>
                            ))}
                            <br />
                            <h5>Production Countries</h5>
                            {showDetails.production_countries && showDetails.production_countries.map((country) => (
                                <div key={country.iso_3166_1}>
                                    {country.name}
                                </div>
                            ))}
                        </div>

        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TVShowLanginInfo;

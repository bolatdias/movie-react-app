// MoviesPage.js
import React, { useState, useEffect } from 'react';
import MoviesRowList from '../movies-row-list';

const MoviesPage = ({ movieService }) => {
    return (
        <div>
            <MoviesRowList title={'Now Playing'} func={movieService.getNowPlayingMovies(1)} movieService={movieService} />
            <MoviesRowList title={'Popular'} func={movieService.getTopFilmes(1)} movieService={movieService}/>
            <MoviesRowList title={'Upcoming'} func={movieService.getUpCommingFilmes(1)} movieService={movieService} />
        </div>
    );
};

export default MoviesPage;

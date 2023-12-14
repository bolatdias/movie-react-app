// MoviesPage.js
import React, { useState, useEffect } from 'react';
import MoviesRowList from '../movies-row-list';

const MoviesPage = ({ movieService }) => {
    return (
        <div>
            <MoviesRowList title={'Now Playing'} func={movieService.getNowPlayingMovies} movieService={movieService} />
            <MoviesRowList title={'Popular'} func={movieService.getTopFilmes} movieService={movieService}/>
            <MoviesRowList title={'Upcoming'} func={movieService.getUpCommingFilmes} movieService={movieService} />
        </div>
    );
};

export default MoviesPage;

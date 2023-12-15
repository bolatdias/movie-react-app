
import React, { useState, useEffect } from 'react';
import MoviesRowList from '../movies-row-list';

const TVShowsPage = ({ movieService }) => {

    const TVshowsList = { AIRING_TODAY: 'airing_today', ON_THE_AIR: 'on_the_air', POPULAR: 'popular' };

    return (
        <div>
            <MoviesRowList title={'Airing Today'} func={movieService.getListTvShows(1, TVshowsList.AIRING_TODAY)} movieService={movieService} isTVshow={true} />
            <MoviesRowList title={'On The Air'} func={movieService.getListTvShows(1, TVshowsList.ON_THE_AIR)} movieService={movieService} isTVshow={true} />
            <MoviesRowList title={'Popular'} func={movieService.getListTvShows(1, TVshowsList.POPULAR)} movieService={movieService} isTVshow={true} />
        </div>
    );
};

export default TVShowsPage;

export default class MovieService {
    _apiBase = 'https://api.themoviedb.org';
    _imageBase = 'https://image.tmdb.org/t/p/w200';
    _token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTZmZTFkNzM1NzNmNjg5ZGE1OWViYThjY2M5ZWE2MiIsInN1YiI6IjY1NzlhYjU0MzVhNjFlMDBlMzVmZWJiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ANmavAQ2dHby4D32kWgKB7-hMM2GkiGYaddiTew5ay0';

    getResource = async (url, options = {}) => {
        const res = await fetch(`${this._apiBase}${url}`, options);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }
        return await res.json();
    };

    getTopFilmes = async (page) => {
        const url = `/3/movie/top_rated?language=en-US&page=${page}`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: this._token,
            },
        };

        const res = await this.getResource(url, options);
        return res;
    };

    getNowPlayingMovies = async (page) => {
        const url = `/3/movie/now_playing?language=en-US&page=${page}`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: this._token,
            },
        };

        const res = await this.getResource(url, options);
        return res;
    };

    getPopularFilmes = async (page) => {
        const url = `/3/movie/popular?language=en-US&page=${page}`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: this._token,
            },
        };

        const res = await this.getResource(url, options);
        return res;
    };

    getUpCommingFilmes=async (page) => {
        const url = `/3/movie/upcoming?language=en-US&page=${page}`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: this._token,
            },
        };

        const res = await this.getResource(url, options);
        return res;
    };


    getPosterImageByMovie = (movie) => {
        return this._imageBase + movie.poster_path;
    }
}

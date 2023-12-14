export default class MovieService {
    _apiBase = 'https://api.themoviedb.org';
    _imageBase = 'https://image.tmdb.org/t/p/';
    _token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTZmZTFkNzM1NzNmNjg5ZGE1OWViYThjY2M5ZWE2MiIsInN1YiI6IjY1NzlhYjU0MzVhNjFlMDBlMzVmZWJiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ANmavAQ2dHby4D32kWgKB7-hMM2GkiGYaddiTew5ay0';

    genresMap = {
        28: "Action",
        12: "Adventure",
        16: "Animation",
        35: "Comedy",
        80: "Crime",
        99: "Documentary",
        18: "Drama",
        10751: "Family",
        14: "Fantasy",
        36: "History",
        27: "Horror",
        10402: "Music",
        9648: "Mystery",
        10749: "Romance",
        878: "Science Fiction",
        10770: "TV Movie",
        53: "Thriller",
        10752: "War",
        37: "Western"
    };


    getResource = async (url, options = {}) => {
        const res = await fetch(`${this._apiBase}${url}`, options);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }
        return await res.json();
    };


    getDetailsById = async (id) => {
        const url = `/3/movie/${id}?language=en-US`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: this._token,
            },
        };

        const res = await this.getResource(url, options);
        return res;
    }

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

    getUpCommingFilmes = async (page) => {
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
        return this._imageBase + 'w200/' + movie.poster_path;
    }

    getBackgroundImageByMovie = (movie) => {
        return this._imageBase + 'original/' + movie.backdrop_path;
    }


    getImage = (path) => {
        return this._imageBase + path;
    }

    getRecommendationsById = async (id) => {
        const url = `/3/movie/${id}/recommendations?language=en-US&page=1`;
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

    getVideoById = async (id) => {
        const url = `/3/movie/${id}/videos?language=en`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: this._token,
            },
        };

        const res = await this.getResource(url, options);

        if (res && res.results && res.results.length > 0) {
            const officialTrailer = res.results.find(
                (video) => video.type === 'Trailer' && video.official === true
            );

            if (officialTrailer) {
                return officialTrailer;
            }
        }

        return null;
    };



    getSearchedMovies = async (query, page) => {
        const url = `/3/search/movie?query=${query}&include_adult=true&language=en-US&page=${page}`;
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
}

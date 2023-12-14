// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { WelcomePage, MoviesPage } from '../pages';
import Header from '../header';

import MovieService from '../../service/movie-service';

function App() {
  const movieService = new MovieService()
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/movies" element={<MoviesPage movieService={movieService} />} />
      </Routes>
    </Router>
  );
}

export default App;

// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LandingPage, MoviesPage, SearchPage, WelcomePage } from '../pages';
import Header from '../header';
import MovieService from '../../service/movie-service';
import './App.css'

function App() {
  const movieService=new MovieService()
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/movie" element={<MoviesPage movieService={movieService} />} />
        <Route path="/movie/:id" element={<LandingPage />} />
        <Route path="/search" element={<SearchPage movieService={movieService} />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import  { Route, Routes } from 'react-router-dom'
import Login from './Components/Pages/Login';
import Movies from './Components/Pages/Movies';
import Netflix from './Components/Pages/Netflix';
import Player from './Components/Pages/Player';
import Signup from './Components/Pages/Signup';
import TVShows from './Components/TVShows';


export default function App() {
  return (
    
     <Routes>
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/player" element={<Player />} />
        <Route exact path="/movies" element={<Movies />} />
        <Route exact path="/tv" element={<TVShows />} />
        <Route exact path="/" element={<Netflix />} />
      </Routes>
    
    
  )
}

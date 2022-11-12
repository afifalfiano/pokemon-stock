/* eslint-disable react-hooks/exhaustive-deps */
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { useSelector } from 'react-redux';
import { selectAllPokemon } from './store/pokemon/pokemonSlice';
import Home from './page/Home/Home';
const Detail = lazy(() => import('./page/Detail/Detail'));
const Confirmation = lazy(() => import('./page/Confirmation/Confirmation'));

function App() {
  const pokemon= useSelector(selectAllPokemon);
  
  return (
    <Router>
      <React.Fragment>
      <Suspense fallback={<div className='suspense'>Please waiting for a moment...</div>}>
      <Routes>
      <Route path="/" element={<Home pokemon={pokemon} />} />
      <Route path="/detail/:name" element={<Detail/>} />
      <Route path="/detail/:name/confirmation" element={<Confirmation/>} />
      </Routes>
      </Suspense>
      </React.Fragment>
    </Router>
  );
}

export default App;

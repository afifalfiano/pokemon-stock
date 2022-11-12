/* eslint-disable react-hooks/exhaustive-deps */
import React, { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllPokemon, setData } from './store/pokemon/pokemonSlice';
import { useGet15DataMutation } from './store/pokemon/apiSlice';
const Home = lazy(() => import('./page/Home/Home'));
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

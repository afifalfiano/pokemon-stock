import React, { lazy, Suspense, useReducer } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import { pokemonReducer } from './reducers/pokemonReducer';
import { dataDummy } from './dummy';
const Home = lazy(() => import('./page/Home/Home'));
const Detail = lazy(() => import('./page/Detail/Detail'));
const Confirmation = lazy(() => import('./page/Confirmation/Confirmation'));

function App() {
  const [pokemon, dispatch] = useReducer(pokemonReducer, dataDummy);
  
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

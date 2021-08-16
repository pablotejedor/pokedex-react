import React, { useState } from 'react';
import { PokeContainer } from './components/PokeContainer';

export const Pokedex = () => {
  const [rangeOfPokemons, setRangeOfPokemons] = useState([1, 151]);
  return (
    <>
      <h1>Pokedex</h1>
      <h3>Which generation would you like to see?</h3>
      <div className="generations-container">
        <button onClick={() => setRangeOfPokemons([1, 151])}>1st Gen</button>
        <button onClick={() => setRangeOfPokemons([152, 251])}>2nd Gen</button>
        <button onClick={() => setRangeOfPokemons([252, 386])}>3rd Gen</button>
        <button onClick={() => setRangeOfPokemons([387, 494])}>4th Gen</button>
        <button onClick={() => setRangeOfPokemons([495, 649])}>5th Gen</button>
        <button onClick={() => setRangeOfPokemons([650, 721])}>6th Gen</button>
        <button onClick={() => setRangeOfPokemons([722, 809])}>7th Gen</button>
        <button onClick={() => setRangeOfPokemons([810, 891])}>8th Gen</button>
      </div>
      <PokeContainer rangeOfPokemons={rangeOfPokemons} />
    </>
  );
};

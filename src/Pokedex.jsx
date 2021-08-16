import React, { useState } from 'react';
import { PokeContainer } from './components/PokeContainer';

export const Pokedex = () => {
  const [rangeOfPokemons, setRangeOfPokemons] = useState([1, 30]);
  const rangeVariation = 30;

  const nextHandler = () => {
    if (rangeOfPokemons[1] + rangeVariation > 891) {
      setRangeOfPokemons([
        (rangeOfPokemons[0] = 870),
        rangeOfPokemons[1] + (891 - rangeOfPokemons[1]),
      ]);
    } else {
      setRangeOfPokemons(rangeOfPokemons.map(value => value + rangeVariation));
    }
  };

  const previousHandler = () => {
    if (rangeOfPokemons[0] < 30) {
      return;
    } else {
      setRangeOfPokemons(rangeOfPokemons.map(value => value - rangeVariation));
    }
  };

  return (
    <>
      <h1>Pokedex</h1>
      <h3>Gotta catch' em all!</h3>
      <div className="buttons-container">
        <button onClick={previousHandler}>Previous</button>
        <button onClick={nextHandler}>Next</button>
      </div>
      <PokeContainer rangeOfPokemons={rangeOfPokemons} />
      <div className="buttons-container">
        <button onClick={previousHandler}>Previous</button>
        <button onClick={nextHandler}>Next</button>
      </div>
    </>
  );
};

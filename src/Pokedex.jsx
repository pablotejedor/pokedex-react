import React, { useState } from 'react';
import { PokeContainer } from './components/PokeContainer';
import Buttons from './components/ui/Buttons';

export const Pokedex = () => {
  const [rangeOfPokemons, setRangeOfPokemons] = useState([1, 30]);
  const rangeVariation = 30;

  const nextHandler = () => {
    if (rangeOfPokemons[1] + rangeVariation > 898) {
      setRangeOfPokemons([
        (rangeOfPokemons[0] = 862),
        rangeOfPokemons[1] + (898 - rangeOfPokemons[1]),
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
    <div className="pokedex">
      <div className="title">
        <h1>Pokedex</h1>
        <h3>Gotta catch' em all!</h3>
      </div>
      <Buttons
        rangeOfPokemons={rangeOfPokemons}
        previousHandler={previousHandler}
        nextHandler={nextHandler}
      />

      <PokeContainer rangeOfPokemons={rangeOfPokemons} />

      <Buttons
        rangeOfPokemons={rangeOfPokemons}
        previousHandler={previousHandler}
        nextHandler={nextHandler}
      />
    </div>
  );
};

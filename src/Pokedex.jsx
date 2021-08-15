import React, { useState } from 'react';
import { PokeContainer } from './components/PokeContainer';

export const Pokedex = () => {
  const [numberOfPokemons, setNumberOfPokemons] = useState(151);
  return (
    <>
      <h1>Pokedex</h1>
      <h3>Generations:</h3>
      <div className="generations-container">
        <button onClick={() => setNumberOfPokemons(151)}>1st Gen</button>
        <button onClick={() => setNumberOfPokemons(251)}>2nd Gen</button>
        <button onClick={() => setNumberOfPokemons(386)}>3rd Gen</button>
        <button onClick={() => setNumberOfPokemons(493)}>4th Gen</button>
        <button onClick={() => setNumberOfPokemons(649)}>5th Gen</button>
        <button onClick={() => setNumberOfPokemons(721)}>6th Gen</button>
        <button onClick={() => setNumberOfPokemons(809)}>7th Gen</button>
        <button onClick={() => setNumberOfPokemons(891)}>8th Gen</button>
      </div>
      <PokeContainer numberOfPokemons={numberOfPokemons}/>
    </>
  );
};

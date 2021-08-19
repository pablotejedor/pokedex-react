import React, { useState, useEffect } from 'react';
import { Pokemon } from './Pokemon';
import { getPokemons } from '../helpers/getPokemons';
export const PokeContainer = ({ rangeOfPokemons }) => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    getPokemons(rangeOfPokemons).then(poke => {
      setPokemons(poke);
      setloading(false);
    });
  }, [rangeOfPokemons]);

  useEffect(() => {
    setloading(true);
  }, [rangeOfPokemons]);

  return (
    <>
      {loading ? <p>Loading...</p> :
      <div className="poke-container">
        {pokemons.map(poke => (
          <Pokemon pokemon={poke} key={poke.id} />
        ))}
      </div>
        }
    </>
  );
};

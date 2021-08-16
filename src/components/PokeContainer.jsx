import React, { useState, useEffect } from 'react';
import { Pokemon } from './Pokemon';
import { getPokemons } from '../helpers/getPokemons';
export const PokeContainer = ({ rangeOfPokemons }) => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    getPokemons(rangeOfPokemons).then(poke => {
      setPokemons(
        poke.map(poke => {
          return {
            img: poke.sprites.front_default,
            name: poke.name,
            id: poke.id,
            type: poke.types
              .map(
                types =>
                  types.type.name[0].toUpperCase() + types.type.name.slice(1)
              )
              .join(', '),
            types: poke.types.map(types => types.type.name),
          };
        })
      );
    });
  }, [rangeOfPokemons]);
console.log(pokemons)
  useEffect(() => setloading(false), [pokemons]);

  return (
    <div className="poke-container">
      {loading ? <p>Loading...</p> : null}
      {pokemons.map(poke => (
        <Pokemon pokemon={poke} key={poke.id} />
      ))}
    </div>
  );
};

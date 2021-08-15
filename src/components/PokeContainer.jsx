import React, { useState, useEffect } from 'react';
import { Pokemon } from './Pokemon';
import { getPokemons } from 'C:/Programación/React/pokedex-react/src/helpers/getPokemons.jsx';
export const PokeContainer = ({ numberOfPokemons }) => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    getPokemons(numberOfPokemons).then(poke => {
      setPokemons(
        poke.map(poke => {
          return {
            img: poke.sprites.front_default,
            name: poke.name,
            id: poke.id,
            type: poke.types.map(types => types.type.name[0].toUpperCase() + types.type.name.slice(1)).join(", "),
            types: poke.types.map(types => types.type.name)
          };
        })
      );
    });
  }, [numberOfPokemons]);
  return (
    <div className="poke-container">
      {pokemons.map(poke => (
        <Pokemon pokemon={poke} key={poke.id} />
      ))}
    </div>
  );
};

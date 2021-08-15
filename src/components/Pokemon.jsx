import React from 'react';

export const Pokemon = ( {pokemon} ) => {
//   console.log(pokemon);
  return (
    <div>
      <img src={pokemon.img} alt={pokemon.name}/>
      <h4>{pokemon.name}</h4>
      <p>Id:{pokemon.id} </p>
      <p>Type: {pokemon.type}</p>
    </div>
  );
};

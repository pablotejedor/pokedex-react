import React from 'react';

export const Pokemon = ({ pokemon }) => {
  //obtiene un arreglo con los tipos de cada pokemon
  // console.log(pokemon.types.map(types => types.type.name))
  // console.log(pokemon.types);
  console.log(pokemon)
  const colors = {
    fire: '#F05030',
    grass: '#78C850',
    electric: '#F8D030',
    water: '#3899F8',
    ground: '#E9D6A4',
    rock: '#B8A058',
    fairy: '#E79FE7',
    poison: '#B058A0',
    bug: '#A8B820',
    dragon: '#7860E0',
    psychic: '#F870A0',
    flying: '#98A8F0',
    fighting: '#A05038',
    normal: '#A8A090',
    steel: '#A8A8C0',
    ghost: '#6060B0',
    ice: '#58C8E0',
    dark: '#7A5848',
  };

  const gradient = {
    backgroundImage: `linear-gradient(315deg, ${
      colors[pokemon.types[pokemon.types.length - 1]]
    } 0%, ${colors[pokemon.types[0]]} 75%)`,
  };
  return (
    <div className="poke-card" style={gradient}>
      <img className='poke-img' src={pokemon.img} alt={pokemon.name} />
      <p>#{pokemon.id}</p>
      <h4>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h4>
      <p>Type: {pokemon.type}</p>
    </div>
  );
};

export const getPokemons = async numberOfPokemons => {
  let pokemons = [];
  for (let i = 1; i <= numberOfPokemons; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    const result = await fetch(url);
    const pokemon = await result.json();
    pokemons.push(pokemon);
  }
  return pokemons;
};

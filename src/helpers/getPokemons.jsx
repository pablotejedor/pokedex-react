export const getPokemons = async rangeOfPokemons => {
  let pokemons = [];
  for (let i = rangeOfPokemons[0]; i <= rangeOfPokemons[1]; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    const result = await fetch(url);
    const pokemon = await result.json();
    pokemons.push(pokemon);
  }
  return pokemons;
};

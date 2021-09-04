import { fetchPokemons } from './fetchPokemons';
export const getPokemons = async rangeOfPokemons => {
  const promises = [];
  for (let i = rangeOfPokemons[0]; i <= rangeOfPokemons[1]; i++) {
    promises.push(fetchPokemons(i));
  }
  let pokemons = await Promise.all(promises);
  let mappedPokemons = pokemons.map(poke => {
    return {
      img: poke.sprites.front_default,
      name: poke.name,
      id: poke.id,
      type: poke.types
        .map(
          types => types.type.name[0].toUpperCase() + types.type.name.slice(1)
        )
        .join(', '),
      types: poke.types.map(types => types.type.name),
    };
  });

  return mappedPokemons;

  // let pokemons = [];
  // for (let i = rangeOfPokemons[0]; i <= rangeOfPokemons[1]; i++) {
  //   const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
  //   const result = await fetch(url);
  //   const pokemon = await result.json();
  //   pokemons.push(pokemon);
  // }
  // return pokemons.map(poke => {
  //   return {
  //     img: poke.sprites.front_default,
  //     name: poke.name,
  //     id: poke.id,
  //     type: poke.types
  //       .map(
  //         types =>
  //           types.type.name[0].toUpperCase() + types.type.name.slice(1)
  //       )
  //       .join(', '),
  //     types: poke.types.map(types => types.type.name),
  //   };
  // });
};

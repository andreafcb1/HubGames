import { getPokemon } from "../services/pokemon.service"
import { typePokemon } from "./typePokemon";

export const dataPokemon = async () => {
    const data = []
    for (let i=1; i<151; i++){
        data.push(await getPokemon(i));
    }
   return dataMap(data);
};

const dataMap = (data) => {
    const filterData = data.map((pokemon) => ({
        name: pokemon.name,
        image: pokemon.sprites.other.dream_world.front_default,
        type: pokemon.types,
        height: (pokemon.height)/10,
        weight: (pokemon.weight)/10,
        id: pokemon.id,
    }));
    
    const type = typePokemon(filterData);
    return {
    type: type,
    pokemonData: filterData,
  };
};


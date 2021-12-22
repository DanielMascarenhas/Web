import Pokemons from "./models/pokemon.js";

const ListaDePokemons = [];

for(let pokemon of Pokemons.pokemons){
  ListaDePokemons.push({
    Id: pokemon.id,
    Nome: pokemon.name,
    HitPoints: pokemon.stats[0].base_stat,
    Ataque: pokemon.stats[1].base_stat,
    Defesa: pokemon.stats[2].base_stat,
    "Ataque Especial": pokemon.stats[3].base_stat,
    "Defesa Especial": pokemon.stats[4].base_stat,
    Velocidade: pokemon.stats[5].base_stat,
  })
}



export { ListaDePokemons };
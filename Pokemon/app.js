import { ListaDePokemons } from "./listar_pokemon.js"
import http from 'http';

const port = 3000;

let dados = '<div style="text-align:center"><h1>POKEDEX</h1></div>';

let dadosPokemon = "";


for(let pokemon of ListaDePokemons){
    dadosPokemon += `
         
            <p><b>Id</b>: ${pokemon["Id"]} - <b>Nome</b>: ${pokemon["Nome"]} - <b>Vida Base</b>: ${pokemon["HitPoints"]} - <b>Ataque</b>: ${pokemon["Ataque"]} - 
            <b>Defesa</b>: ${pokemon["Defesa"]} - <b>Ataque especial</b>: ${pokemon["Ataque Especial"]} - <b>Defesa especial</b>: ${pokemon["Defesa Especial"]} - 
            <b>Velocidade</b>: ${pokemon["Velocidade"]}`;
  }


const server = http.createServer((req, res) => {
        if(req.url === "/pokemons"){
            res.end(dados + dadosPokemon);
        }else{
            res.end("Erro, sem dados");
        }
})


server.listen(port, () => {
    console.log(`Servidor iniciou em http://localhost:${port}/`)
  })
const View = require("./View");
const PokemonFetcher = require("./PokemonFetcher");
const Pokemon = require("./Pokemon");

//Create our PokemonFetcher + some objects that will we use for this demo:
const pokemonFetcher = new PokemonFetcher();
const butterfreeData = { name: "", image: "" };
const pikachuData = { name: "", image: "" };

//Fetching the data for the first pokemon:
pokemonFetcher
    .promiseToGetMyPokemon(
    "https://pokeapi.co/api/v2/pokemon/butterfree"
).then((data) => {
    //That data is coming from PokemonFetcher, already formatted, so we just have to store it in our object and return it. 
    console.log(data)
    butterfreeData.name = data.name;
    butterfreeData.image = data.sprites.front_default;
    
    //Create the butterfree pokemon so that we can pass it to our View class.
    //What's butterfreeData at this stage?
    const butterfree = new Pokemon(butterfreeData);
    //Passing butterfree to the View class in order to display it on the page
    const viewPokemon1 = new View(butterfree, 1);
    viewPokemon1.createPokemonOnPage();
})

//What's butterfreeData here? 
//console.log(butterfreeData)

pokemonFetcher
  .promiseToGetMyPokemon("https://pokeapi.co/api/v2/pokemon/charmander")
  .then((data) => {
    pikachuData.name = data.name;
    pikachuData.image = data.sprites.front_default;

    const pikachu = new Pokemon(pikachuData);
    const viewPokemon2 = new View(pikachu, 2);
    viewPokemon2.createPokemonOnPage();
  });


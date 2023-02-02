(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // View.js
  var require_View = __commonJS({
    "View.js"(exports, module) {
      var View2 = class {
        constructor(pokemon, pokemonNum) {
          this.pokemon = pokemon;
          this.pokemonNum = pokemonNum;
        }
        createPokemonOnPage() {
          let pokemonId = "#pokemon" + this.pokemonNum;
          let pokemonImgId = "#pokemon_img_" + this.pokemonNum;
          const pokemonName = document.querySelector(pokemonId);
          pokemonName.textContent = this.pokemon.name;
          const img = document.querySelector(pokemonImgId);
          img.src = this.pokemon.image;
        }
      };
      module.exports = View2;
    }
  });

  // PokemonFetcher.js
  var require_PokemonFetcher = __commonJS({
    "PokemonFetcher.js"(exports, module) {
      var PokemonFetcher2 = class {
        constructor() {
        }
        promiseToGetMyPokemon(url) {
          return fetch(url, {
            method: "GET"
          }).then((response) => {
            return response.json();
          }).then((data) => {
            return data;
          });
        }
      };
      module.exports = PokemonFetcher2;
    }
  });

  // Pokemon.js
  var require_Pokemon = __commonJS({
    "Pokemon.js"(exports, module) {
      var Pokemon2 = class {
        constructor(pokemonData) {
          this.name = pokemonData.name;
          this.image = pokemonData.image;
        }
      };
      module.exports = Pokemon2;
    }
  });

  // index.js
  var View = require_View();
  var PokemonFetcher = require_PokemonFetcher();
  var Pokemon = require_Pokemon();
  var pokemonFetcher = new PokemonFetcher();
  var butterfreeData = { name: "", image: "" };
  var pikachuData = { name: "", image: "" };
  pokemonFetcher.promiseToGetMyPokemon(
    "https://pokeapi.co/api/v2/pokemon/butterfree"
  ).then((data) => {
    console.log(data);
    butterfreeData.name = data.name;
    butterfreeData.image = data.sprites.front_default;
    const butterfree = new Pokemon(butterfreeData);
    const viewPokemon1 = new View(butterfree, 1);
    viewPokemon1.createPokemonOnPage();
  });
  pokemonFetcher.promiseToGetMyPokemon("https://pokeapi.co/api/v2/pokemon/charmander").then((data) => {
    pikachuData.name = data.name;
    pikachuData.image = data.sprites.front_default;
    const pikachu = new Pokemon(pikachuData);
    const viewPokemon2 = new View(pikachu, 2);
    viewPokemon2.createPokemonOnPage();
  });
})();

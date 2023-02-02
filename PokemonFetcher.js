class PokemonFetcher {
  constructor() {}

  promiseToGetMyPokemon(url) {
    return fetch(url, {
      method: "GET",
    }).then((response) => {
        //transforms body of the response into a JSON object
        return response.json();
    }).then((data) => {
        //returning the data so that we can use it in our index.js
        return data;
    });
  }
}

module.exports = PokemonFetcher;

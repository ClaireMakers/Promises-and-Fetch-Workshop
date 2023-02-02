class View {
    constructor(pokemon, pokemonNum) {
        this.pokemon = pokemon;
        this.pokemonNum = pokemonNum;
    }

    createPokemonOnPage() {
        //Create the ids we need to isolate elements from the page
        let pokemonId = "#pokemon" + this.pokemonNum;
        let pokemonImgId = "#pokemon_img_" + this.pokemonNum;

        //Setting the elements on the page to the pokemon we have fetched:
        //name:
        const pokemonName = document.querySelector(pokemonId);
        pokemonName.textContent = this.pokemon.name;

        //image:
        const img = document.querySelector(pokemonImgId);
        img.src = this.pokemon.image;
    }
}

module.exports = View;
var pokedexIds = require('./pokedex-ids');
var pokemonNameToId = require('./pokemon-name-to-id');

function getGifByPokedexId(pokedexId) {
  
}

function getGifByPokemonName(pokemonName) {

}

function pokemonGif(identifier) {
  if (typeof identifier === 'string') {
    getGifByPokemonName(identifier);
  } else if (typeof identifier === 'number') {
    getGifByPokedexId(identifier);
  } else {
    // Error: pokemonGif input must be type string or number.
  }
}

module.exports = pokemonGif;

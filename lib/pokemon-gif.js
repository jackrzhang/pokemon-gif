var pokedexIds = require('./pokedex-ids');
var pokemonNameToId = require('./pokemon-name-to-id');

var baseUrl = 'http://randompokemon.com/sprites/animated/';
var extension = '.gif';

function getGifByPokedexId(pokedexId) {
  if (pokedexIds.hasOwnProperty(pokedexId)) {
    return [baseUrl, pokedexId.toString(), extension].join('');
  } else {
    // Error: Unable to find gif for Pokedex Id - pokedexid
  }
}

function getGifByPokemonName(pokemonName) {
  if (pokemonNameToId.hasOwnProperty(pokemonName)) {
    var pokedexId = pokemonNameToId[pokemonName];
    return [baseUrl, pokedexId.toString(), extension].join('');
  } else {
    // Error: Unable to find gif for pokemon name -  pokemonName
  }
}

function pokemonGif(identifier) {
  if (typeof identifier === 'string') {
    return getGifByPokemonName(identifier);
  } else if (typeof identifier === 'number') {
    return getGifByPokedexId(identifier);
  } else {
    // Error: pokemonGif input must be type string or number.
  }
}

module.exports = pokemonGif;

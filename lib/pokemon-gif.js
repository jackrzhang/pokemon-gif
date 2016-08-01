var pokedexIds = require('./pokedex-ids');
var pokemonNameToId = require('./pokemon-name-to-id');

var baseUrl = 'http://randompokemon.com/sprites/animated/';
var extension = '.gif';

function getGifByPokedexId(pokedexId) {
  if (pokedexIds.hasOwnProperty(pokedexId)) {
    return baseUrl + pokedexId.toString() + extension;
  } else {
    throw new Error('Unable to find gif for pokedex id ' + pokedexId);
  }
}

function getGifByPokemonName(pokemonName) {
  if (pokemonNameToId.hasOwnProperty(pokemonName)) {
    var pokedexId = pokemonNameToId[pokemonName];
    return baseUrl + pokedexId.toString() + extension;
  } else {
    throw new Error('Unable to find gif for pokemon name "' + pokemonName + '"');
  }
}

function pokemonGif(identifier) {
  if (typeof identifier === 'string') {
    return getGifByPokemonName(identifier);
  } else if (typeof identifier === 'number') {
    return getGifByPokedexId(identifier);
  } else {
    throw new TypeError('pokemonGif input must be type string or number');
  }
}

module.exports = pokemonGif;

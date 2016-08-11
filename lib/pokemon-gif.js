var pokedexNumbers = require('./pokedex-number-to-name');
var pokemonNameToNumber = require('./pokemon-name-to-number');

var baseUrl = 'http://randompokemon.com/sprites/animated/';
var extension = '.gif';

function getGifByPokedexNumber(pokedexNumber) {
  if (pokedexNumbers.hasOwnProperty(pokedexNumber)) {
    return baseUrl + pokedexNumber.toString() + extension;
  } else {
    throw new Error('Invalid pokedex number ' + pokedexNumber);
  }
}

function getGifByPokemonName(pokemonName) {
  var lowercasePokemonName = pokemonName.toLowerCase();

  if (pokemonNameToNumber.hasOwnProperty(lowercasePokemonName)) {
    var pokedexNumber = pokemonNameToNumber[lowercasePokemonName];
    return baseUrl + pokedexNumber.toString() + extension;
  } else {
    throw new Error('Invalid pokemon name "' + pokemonName + '"');
  }
}

function pokemonGif(identifier) {
  if (typeof identifier === 'string') {
    return getGifByPokemonName(identifier);
  } else if (typeof identifier === 'number') {
    return getGifByPokedexNumber(identifier);
  } else {
    throw new TypeError('pokemonGif input must be type string or number');
  }
}

module.exports = pokemonGif;

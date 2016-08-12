var pokedexNumberToName = require('./pokedex-number-to-name');
var pokemonNameToNumber = require('./pokemon-name-to-number');

var baseUrl = 'http://www.pokestadium.com/sprites/xy/';
var extension = '.gif';

function getGifByPokedexNumber(pokedexNumber) {
  if (pokedexNumberToName.hasOwnProperty(pokedexNumber)) {
    var pokemonUrlName = pokedexNumberToName[pokedexNumber]
      .toString()
      .replace(/\./g,'')
      .replace(/'/g,'')
      .replace(/\s/g, "-");

    return baseUrl + pokemonUrlName + extension;
  } else {
    throw new Error('Invalid pokedex number ' +  pokedexNumber);
  }
}

function getGifByPokemonName(pokemonName) {
  var lowercasePokemonName = pokemonName.toLowerCase();

  if (pokemonNameToNumber.hasOwnProperty(lowercasePokemonName)) {
    var pokemonUrlName = lowercasePokemonName
      .replace(/\./g,'')
      .replace(/'/g,'')
      .replace(/\s/g, "-");

    return baseUrl + pokemonUrlName + extension;
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

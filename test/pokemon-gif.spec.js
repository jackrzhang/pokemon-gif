var pokemonGif = require('./../lib/pokemon-gif');
var expect = require('chai').expect;

describe('pokemonGif', function() {
  it('returns a string URL representing a pokemon gif', function() {
    expect(pokemonGif(1)).to.be.a('string');
    expect(pokemonGif(1)).to.equal('http://randompokemon.com/sprites/animated/1.gif');
  })

  it('accepts a pokedex number as an input parameter', function() {
    expect(pokemonGif(25)).to.equal('http://randompokemon.com/sprites/animated/25.gif');
  });

  it('accepts a string pokemon name as an input parameter', function() {
    expect(pokemonGif('pikachu')).to.equal('http://randompokemon.com/sprites/animated/25.gif');
    expect(pokemonGif('PiKaChU')).to.equal('http://randompokemon.com/sprites/animated/25.gif');
  });

  it('throws a TypeError when input type is not a string or number', function() {
    expect(pokemonGif.bind(null, [])).to.throw(TypeError, 'pokemonGif input must be type string or number');
    expect(pokemonGif.bind(null, {})).to.throw(TypeError, 'pokemonGif input must be type string or number');
  });

  it('throws an Error when an input number is not a valid pokedex number', function() {
    expect(pokemonGif.bind(null, -1)).to.throw(Error, 'Invalid pokedex number -1');
    expect(pokemonGif.bind(null, 722)).to.throw(Error, 'Invalid pokedex number 722');
    expect(pokemonGif.bind(null, 25.33)).to.throw(Error, 'Invalid pokedex number 25.33');
  });

  it('throws an Error when an input string is not a valid pokemon name', function() {
    expect(pokemonGif.bind(null, 'notAPokemon')).to.throw(Error, 'Invalid pokemon name "notAPokemon"');
  });
});

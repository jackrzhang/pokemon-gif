pokemon-gif
============
[![npm](https://img.shields.io/npm/v/pokemon-gif.svg)](https://www.npmjs.com/package/pokemon-gif)
[![Build Status](https://travis-ci.org/jackrzhang/pokemon-gif.svg?branch=master)](https://travis-ci.org/jackrzhang/pokemon-gif)

> Generate a gif url for any pokemon.

## Installation
```shell
npm install pokemon-gif --save
```

## Usage
```js
const pokemonGif = require('pokemon-gif');

/* String input: must be a valid pokemon name */
pokemonGif('pikachu');
// => 'http://randompokemon.com/sprites/animated/25.gif'

/* Number input: must be a valid pokedex number (1 - 721) */
pokemonGif(25);
// => 'http://randompokemon.com/sprites/animated/25.gif'
```

## License
[MIT](https://github.com/jackrzhang/pokemon-gif/blob/master/LICENSE)

pokemon-gif
============
[![Build Status](https://travis-ci.org/jackrzhang/pokemon-gif.svg?branch=master)](https://travis-ci.org/jackrzhang/pokemon-gif)
[![npm](https://img.shields.io/npm/v/pokemon-gif.svg)](https://www.npmjs.com/package/pokemon-gif)
[![npm](https://img.shields.io/npm/dt/pokemon-gif.svg)](https://www.npmjs.com/package/pokemon-gif)

This function returns a url for a GIF for a given pokemon name or pokedex number. The sprites themselves hosted by [Pokestadium](http://www.pokestadium.com/tools/sprites).

## Installation
```shell
npm install pokemon-gif --save
```

## Usage
```js
const pokemonGif = require('pokemon-gif');

/* String input: must be a valid pokemon name */
pokemonGif('pikachu');
// => 'http://www.pokestadium.com/sprites/xy/pikachu.gif'

/* Number input: must be a valid pokedex number (1 - 721) */
pokemonGif(25);
// => 'http://www.pokestadium.com/sprites/xy/pikachu.gif'
```

## License
[MIT](https://github.com/jackrzhang/pokemon-gif/blob/master/LICENSE)

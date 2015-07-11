# is-binary-number [![Build Status](https://travis-ci.org/gillstrom/is-binary-number.svg?branch=master)](https://travis-ci.org/gillstrom/is-binary-number)

> Check if a value is a binary number.


## Install

```
$ npm install --save is-binary-number
```


## Usage

```js
var isBinaryNumber = require('is-binary-number');

isBinaryNumber('1001');
//=> true

isBinaryNumber(1001);
//=> true

isBinaryNumber('00101');
//=> false

isBinaryNumber('abc');
//=> false
```


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)

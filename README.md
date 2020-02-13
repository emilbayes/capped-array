# `@emilbayes/capped-array`

> CappedArray inherited from Array

## Usage

```js
var CappedArray = require('@emilbayes/capped-array')

var arr = new CappedArray(2) // max 100 elements

arr.push('foo')
arr.deleted // === 0
arr.length // === 1
arr.size // === 2

arr.push('bar')
arr.deleted // === 0
arr.length // === 2
arr.size // === 2

arr.push('baz')
arr.deleted // === 1
arr.length // === 2
arr.size // === 2
// arr is now ['bar', 'baz']
```

## API

### `const arr = new CappedArray(size)`

Create a new `CappedArray` with a maximum size of `size`

### `arr.deleted`

This property is updated on each mutation (`push`, `unshift`) that might have
delete elements

### `arr.size`

The maximum size of the capped array

### Inherited

Otherwise this module just inherits all methods and properties from `Array`.
Eg. `.length` will give you the current number of elements in the array, maxed
at the size

## Install

```sh
npm install @emilbayes/capped-array
```

## License

[ISC](LICENSE)

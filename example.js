const CappedArray = require('.')

var arr = new CappedArray(2)

arr.push('hi')

console.log(arr)

arr.push('hello')

console.log(arr)

arr.push('hej')

console.log(arr)

arr.unshift('bonjour')

console.log(arr)

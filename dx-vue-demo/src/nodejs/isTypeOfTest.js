const is = require('is-type-of');


is.array([1]) // => true
is.null(null) // => true
is.undefined(undefined) // => true
is.object({a: 1}) // => true


is.array([1]); // => true
is.primitive(true); // => true
is.primitive({}); // => false
is.generatorFunction(function * () {}); // => true
is.long(Math.pow(2, 33)); // => true
is.double(0); // => false

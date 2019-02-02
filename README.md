# oversmart

Oversmart is a popular JavaScript map/reduce library for higher-order functional programming built on parameter name overloading.

Oversmart enables you to write code like:

```javascript
const smart = require('oversmart');

smart(add => 1)([1, 2, 3]); // returns [2, 3, 4]
smart(mul => 2)([1, 2, 3]); // returns [2, 4, 6]
```

With parameter name overloading, oversmart is able to deduce and apply the correct operation based solely on the parameter name.

## Getting Started

To install oversmart, simply run:

```shell
npm install --save oversmart
```

To use oversmart, import it with:

```javascript
const smart = require('oversmart');
```

We can now perform operations on collections, e.g.

```javascript
smart(add => 1)([1, 2, 3]); // returns [2, 3, 4]
```

We can also map over a collection:

```javascript
smart(map => 7)([1, 2, 3]);       // returns [7, 7, 7]
smart(map => map + 2)([1, 2, 3]); // returns [3, 4, 5]
```

Oversmart even supports flat mapping:

```javascript
smart(flatMap => [1, 2])([1, 2, 3]);  // returns [1, 2, 1, 2, 1, 2]
```

## Implementation Details

Parameter name overloading is based on the ability of JavaScript to produce the source code of a function value with the `toString` method.
Using `esprima` we are then able to obtain the abstract syntax tree of the function value, inspect its parameter name, and dispatch on it! Simply brilliant!

## Testimonials

> Since I started using Oversmart with Ramda my productivity has increased logarithmically!

*Author of popular React library.*

## Is this a joke?

We believe that the challenges posed by contemporary IoT products and the prevalence of blockchain technology mandates the necessity for bleeding-edge web-scale parameter-name overloading. 
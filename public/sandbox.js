"use strict";
let greet;
// greet = 'hello'; // Error
greet = () => {
    console.log('Hello, world!');
};
const add = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10, '20');
// no required to give return type
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7);

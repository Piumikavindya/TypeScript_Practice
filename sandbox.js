// explicit types
// intialize the data type for each varible
var character;
var age;
var isLoggedIn;
//  age = 'lugi';    // this is giving an error because age is a number and we are trying to assign a string to it
age = 30;
// Arrays
var ninjas = []; // initailize an empty array of strings
ninjas.push('piumi'); // add a string to the array
// Union types
var mixed = []; // array of strings, numbers and booleans
mixed.push('hello');
mixed.push(20);
mixed.push(false);
console.log(mixed);
// can give union type for variable like this
var uid;
uid = '123';
uid = 123;
// Objects
var ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
ninjaOne = []; // this is also valid because array is an object
var ninjaTwo;
ninjaTwo = { name: 'mario', age: 20, beltColor: 'black' };

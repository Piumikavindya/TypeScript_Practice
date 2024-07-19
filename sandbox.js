// give data type as any then it can accept any type of data type
var age = 20;
age = true;
console.log(age);
age = 'hello';
console.log(age);
var mixed = [];
mixed.push(5);
mixed.push('mario');
mixed.push(false);
console.log(mixed);
var ninja; // here not giveing values to properties. here assign any type of data type to name and age
ninja = { name: 'yoshi', age: 25 };
console.log(ninja);
ninja = { name: 25, age: 'yoshi' };
console.log(ninja);

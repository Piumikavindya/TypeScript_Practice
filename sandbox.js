// Arrays
// Initial data type is string.
var names = ['luigi', 'mario', 'yoshi'];
// add element(name) to array
names.push('toad');
// names.push(3);                 // error gives because daya type is string. now we can't change the data type of array after initialization.
names[0] = 'peach'; // change the element of array
var numbers = [10, 20, 30, 40];
numbers.push(25);
// Mixed data type array
var mixed = ['ken', 4, "chun-li", 8, 9];
mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;
// Objects
var ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
ninja.age = 40;
ninja.name = 'ryu';
// ninja.age = '30';           // error gives because daya type is number. now we can't change the data type of object after initialization.
//ninja.skills = ['fighting', 'sneaking'];      // this is give error because we can't add new property to object after initialization.
// we can change the object property value but we can't change the data type of object property or proprety after initialization.
ninja = {
    name: 'yoshi',
    belt: 'orange',
    age: 40
};

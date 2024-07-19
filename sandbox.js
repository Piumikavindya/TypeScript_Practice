// no need to specify what is the data type. typescript will automatically detect the data type
var character = 'mario';
var age = 10;
var isBlackBelt = false;
// character = 20; // error
character = 'piumi'; // no error
// in typescript we can't change the data type of a variable. we can change value but not data type
// age = 'yoshi'; // error
age = 40;
// isBlackBelt = 'yes';
isBlackBelt = true;
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(7.5));

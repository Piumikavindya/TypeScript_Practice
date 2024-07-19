// no need to specify what is the data type. typescript will automatically detect the data type
let character = 'mario';
let age = 10;
let isBlackBelt = false;

// character = 20; // error
character = 'piumi' // no error

// in typescript we cant change the data type of a variable. we can change value but not data type

// age = 'yoshi'; // error
age = 40;

// isBlackBelt = 'yes';
isBlackBelt = true;


const circ = (diameter: number) => {
    return diameter * Math.PI;
}

console.log(circ(7.5));

// explicit types
// intialize the data type for each varible
    let character: string;
    let age: number;
    let isLoggedIn: boolean;

  //  age = 'lugi';    // this is giving an error because age is a number and we are trying to assign a string to it
  age = 30;


  // Arrays

  let ninjas: string[]= []; // initailize an empty array of strings

  ninjas.push('piumi'); // add a string to the array


  // Union types

  let mixed: (string|number|boolean)[] = []; // array of strings, numbers and booleans
  mixed.push('hello');
  mixed.push(20);
  mixed.push(false);
  console.log(mixed);


  // can give union type for variable like this
  let uid: string|number;
    uid = '123';
    uid = 123;

  // Objects

  let ninjaOne: object;
  ninjaOne = { name: 'yoshi', age: 30};
  ninjaOne = []; // this is also valid because array is an object
   
  let ninjaTwo: {
    name: string,
    age: number,
    beltColor: string
  }

  ninjaTwo = { name: 'mario', age: 20, beltColor: 'black'};

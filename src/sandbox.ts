let greet: Function;

// greet = 'hello'; // Error

greet =() => {
    console.log('Hello, world!');
}

const add = (a: number, b: number, c?: number | string) =>{
    console.log(a + b);
    console.log(c);
}

add(5, 10, '20');

// no required to give return type
const minus = (a: number, b: number): number => {

    return a+b;
}

let result = minus(10, 7);
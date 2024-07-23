"use strict";
// Classes
class Invoice {
    // constructor
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    // Method
    format() {
        return `${this.client} owes Rs${this.amount} for ${this.details}`;
    }
}
// create instance/object of Invoice class and pass the parameters
const invOne = new Invoice('piumi', 'work on the website', 250);
const invTwo = new Invoice('Kavindya', 'work on the website', 200);
// console.log(invOne, invTwo);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invOne, invTwo);
// we can change the properties of the class as now we created objects of the class
// we can change the properties of the class as variables are public by default
invOne.client = 'youshi';
invTwo.amount = 400;
console.log(invOne, invTwo);
// ******************************************************
const form = document.querySelector('.new-item-form');
// console.log(form.children);
// inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});

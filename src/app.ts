// Classes

class Invoice{
    // variables
    client: string;
    details: string;
    amount: number;

    // constructor
    constructor(c: string, d: string, a:number){
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    
    // Method
    format(){
        return `${this.client} owes Rs${this.amount} for ${this.details}`;
    }
}

// create instance/object of Invoice class and pass the parameters
const invOne = new Invoice('piumi', 'work on the website', 250);
const invTwo = new Invoice('Kavindya', 'work on the website', 200);

console.log(invOne, invTwo);


const form = document.querySelector('.new-item-form') as HTMLFormElement;

// console.log(form.children);

// inputs

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event)=>{
    e.preventDefault();

    console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber
    )


})


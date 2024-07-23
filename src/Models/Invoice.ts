
export class Invoice{
    // variables  (thesr varaibles are by default public)
    
//    readonly client: string;
//    private details: string;
//    public amount: number;

    // constructor
    //without making varible separatly we can pass variables in constructor as well
    constructor(
    readonly client: string,
    private details: string,
    public amount: number,
    ){}
    
    // Method
    format(){
        return `${this.client} owes Rs${this.amount} for ${this.details}`;
    }
}

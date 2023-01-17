import { Formatter } from "../interface/Formatter.js"
export class Invoice implements Formatter{
    constructor(
        public type:string,
        public toFrom:string,
        public details:string,
        public amount:number
    ){}
    format(){
        console.log("Invoice",this.amount)
        return `${this.type}: You Owe £${this.amount}  to ${this.toFrom} for ${this.details}`
    }
}
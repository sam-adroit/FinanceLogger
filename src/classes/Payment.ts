import { Formatter } from "../interface/Formatter.js";

export class Payment implements Formatter{
    constructor(
        public type:string,
        public toFrom:string,
        public details:string,
        public amount:number
    ){}
    format(){
        return `${this.toFrom} paid £${this.amount} for ${this.details}`
    }
}
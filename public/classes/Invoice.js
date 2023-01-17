export class Invoice {
    constructor(type, toFrom, details, amount) {
        this.type = type;
        this.toFrom = toFrom;
        this.details = details;
        this.amount = amount;
    }
    format() {
        console.log("Invoice", this.amount);
        return `${this.type}: You Owe £${this.amount}  to ${this.toFrom} for ${this.details}`;
    }
}

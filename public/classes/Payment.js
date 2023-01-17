export class Payment {
    constructor(type, toFrom, details, amount) {
        this.type = type;
        this.toFrom = toFrom;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.toFrom} paid £${this.amount} for ${this.details}`;
    }
}

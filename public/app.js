import { Display } from "./classes/Display.js";
import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
let type = document.querySelector("#type");
let tofrom = document.getElementById("tofrom");
let details = document.getElementById("detail");
let amount = document.getElementById("amount");
let form = document.querySelector(".new-item-form");
let ul = document.querySelector('ul');
const display = new Display(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (tofrom.value == "" || amount.valueAsNumber == null || details.value == "")
        return;
    if (type.value.toLowerCase() == "invoice") {
        let invoice = new Invoice(type.value, tofrom.value, details.value, amount.valueAsNumber);
        display.render("Invoice", invoice);
    }
    else {
        let payment = new Payment(type.value, tofrom.value, details.value, amount.valueAsNumber);
        display.render("Payment", payment);
    }
});

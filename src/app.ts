import { Display } from "./classes/Display.js";
import {Invoice} from "./classes/Invoice.js"
import { Payment } from "./classes/Payment.js";
import { Formatter } from "./interface/Formatter.js";
let type = document.querySelector("#type") as HTMLSelectElement;
let tofrom = document.getElementById("tofrom") as HTMLInputElement;
let details = document.getElementById("detail") as HTMLInputElement;
let amount = document.getElementById("amount") as HTMLInputElement;
let form = document.querySelector(".new-item-form") as HTMLFormElement

let ul = document.querySelector('ul')!;
const display = new Display(ul);
form.addEventListener('submit', (e:Event) => {
    e.preventDefault();
    if(tofrom.value==""||amount.valueAsNumber==null||details.value=="") return;
    if(type.value.toLowerCase() == "invoice"){
        let invoice = new Invoice(type.value,tofrom.value,details.value,amount.valueAsNumber);
        display.render("Invoice",invoice)
    }else {
        let payment = new Payment(type.value,tofrom.value,details.value,amount.valueAsNumber);
        display.render("Payment",payment)
    }
})
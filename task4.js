// ________________________________________________________________
// Task 1: E-Commerce Discount System

function calculateDiscount(productName, price) {
    let discount = price > 1000 ? 0.20 : 0.10;
    let finalPrice = price - (price * discount);

    console.log(`Product: ${productName}`);
    console.log(`Final Price: ${finalPrice}`);

    return finalPrice;
}

calculateDiscount("Shoes", 2000);
// ________________________________________________________________
// Task 2: Order Processing using Callback

function placeOrder(amount, paymentCallback, successCallback) {
    console.log("Order placed");
    paymentCallback(amount, successCallback);
}

function payment(amount, callback) {
    console.log(`Payment of ${amount} successful`);
    callback();
}

function orderSuccess() {
    console.log("Order delivered");
}

placeOrder(500, payment, orderSuccess);
// ________________________________________________________________
// Task 3: Employee Data Loop System

let employee = [
    {name:"Sam", salary:50000},
    {name:"Zion", salary:70000},
];

for (let salaryType of employee){
    salaryType.salary >60000 ? console.log("High Salary") : console.log("Normal Salary");
}
// ________________________________________________________________
// Task 4: Login Attempts (While Loop)

let attempt = 1;
let password;

while (attempt <= 3){
    password = prompt("Please Enter your password")
    if (password === "abc"){
        console.log("Login Success");
        break;
    } else {
        console.log("Attempt " + attempt);
    }
    attempt++
}
if (attempt>3){
    console.log("Login Failed");
}
// ________________________________________________________________
// Task 5: Coupon Generator (Generator Function)

function* offers(){
    yield "10% OFF";
    yield "20% OFF";
    yield "Free Delivery";
    yield "Cashback";
}
let output = offers();

confirm(output.next().value);
confirm(output.next().value);
confirm(output.next().value);
confirm(output.next().value);
// ________________________________________________________________
// Task 6: Shopping Cart Total (for...of)

let cart = [100, 200, 300, 400];
let total = 0;

for (let item of cart){
    item = Number(item);
    total = total + item;
}

console.log("Final amount:", total);
// ________________________________________________________________
//  Task 7: User Profile System (for...in)

let user = {
    name: "Navi",
    role: "Developer",
    location: "India"
};

for (let key in user) {
    console.log(`${key} : ${user[key]}`);
}
// ________________________________________________________________
// Task 8: Factory Pattern (Function Reuse)

function createPhone(product){
    return product;
}
let phoneName = createPhone("VivoV50")

function createBattery(product){
    return product;
}
let battery = createBattery("6000mah")

function createCharger(product){
    return product;
}
let charger = createCharger("1")

function order(){
    console.log("Your Order:", phoneName, battery, charger);
    
}

order()
// ________________________________________________________________
// Task 9: College Form with Default Values

let form = function(name, age, department="Not Assigned"){
    console.log("Name: ", name);
    console.log("Age: ", age);
    console.log("Department: ", department);
}

form('Samuel Jonathan R', '31', 'Mech')
form('Roy R', '27')
form('Mercy Ramya A', '26', 'EEE')
// ________________________________________________________________
// Task 10: Currying - EMI Calculator

function emi(p){
    return function b(e){
        return function c(t){
            console.log((p+e+t)/100); 
        }
    }
}

emi(1000)(2)(12)
// ________________________________________________________________
// Task 11: Even/Odd Analyzer

for (let a=1 ; a<=10 ; a++){
    a%2===0 ? console.log(a + " -> Even") : console.log(a + " -> Odd")
}
// ________________________________________________________________
// Task 12: Function Scope Debugging

// Why var works outside block?
// var is global scope so it works outside and anywhere.
// Ex: 
function scopeCheck(){
    if(true){
        var z1 = "global scope and function scope";
        console.log(z1);
    } 
    console.log(z1);
}

scopeCheck()

//Why let/const fails?
//Because they are block scope and will work only inside a block and it won't work outside a block.
// Ex: 
function scopeCheck(){
    if(true){
        let z2 = "block scope"
        const z3 = "block scope"
        console.log(z2);
        console.log(z3);
    }
    console.log(z2);
    console.log(z3);
}
scopeCheck()
// ________________________________________________________________
// Task 13: Real-Time Alert System (IIFE)

(function(offer, category){
    alert("Flash sale: "+ offer + "% OFF on " + category)
})(50, 'Shirts')
// ________________________________________________________________
//  Task 14: Marks Calculator with Return

let total1;
let avg;

function marks(a,b,c){
    total1 = a+b+c;
    avg = total1/3;
return {total1, avg};
}

const result = marks(80,90,70);
console.log("Total: " + result.total1);
console.log("Average: " + result.avg);
// ________________________________________________________________
// Task 15: Retry Offer System (Generator + Condition)

function* offerSystem(offers) {
    for (let offer of offers) {

    yield offer;    
    }
}

const myOffers = offerSystem(["10% Off", "20% Off", "Buy 1 Get 1"]);


function getNextOffer() {
const { value, done } = myOffers.next();

if (done) {
    console.log("All offers expired");
} else {
    console.log("Current Offer: " + value);
}
}
getNextOffer(); // Current Offer: 10% Off
getNextOffer(); // Current Offer: 20% Off
getNextOffer(); // Current Offer: Buy 1 Get 1
getNextOffer(); // All offers expired
// ________________________________________________________________

// ________________________________________________________________
// Task 1: E-commerce Cart Total

let cart = [
    {name: "Shirt", price: 500, qty: 2},
    {name: "Shoes", price: 1500, qty: 1},
    {name: "Cap", price: 300, qty: 3}
];

let totalPrice1 = cart.reduce((acc, curVal)=>
    acc + (curVal.price * curVal.qty)
, 0);

console.log(totalPrice1);

let above1000 = cart.filter(curVal=>
    curVal.price > 1000
)

console.log(above1000);

let uppercaseProduct = cart.map(curVal =>
    curVal.name.toUpperCase()
)

console.log(uppercaseProduct);
// ________________________________________________________________
// Task 2: Student Result System

let students = [
    {name: "Arun", marks: 85},
    {name: "Bala", marks: 45},
    {name: "Charan", marks: 60},
    {name: "Divya", marks: 30}
];

let failedStu = students.filter(curVal=> 
    curVal.marks<50
)

console.log(failedStu);

let distinctionStu = students.some(curVal=> {
    if (curVal.marks>80){
        return curVal.name
    }
}
)
let isDistinction = distinctionStu ? "Got distinction" : "No distinction"
console.log(isDistinction);

let allPass = students.every(curVal=> {
    if (curVal.marks>35){
        return curVal.name
    }
}
)
let isAllPass = allPass ? "All Pass" : "No all Pass"
console.log(isAllPass);

let failedFirst = students.find(curVal=>{
    return curVal.marks<50
})

console.log(failedFirst);
// ________________________________________________________________
// Task 3: Employee Salary Analysis

let employees = [
    {name: "B", salary: 40000},
    {name: "A", salary: 25000},
    {name: "D", salary: 50000},
    {name: "C", salary: 15000},
];
let increasedSalary = employees.map(employee3=> employee3.salary + employee3.salary * 0.1
)
console.log(increasedSalary);

let salaryAbv3k = employees.filter(employee => employee.salary>3000);
console.log(salaryAbv3k);

let totSalExp3 = employees.reduce((sal, employee) => sal + employee.salary, 0);
console.log(totSalExp3);

let highSalary = employees.sort((a,b)=>b.salary-a.salary);
console.log(highSalary);
// ________________________________________________________________
// Task 4: String Real Use Case (Search System)

let products = ["Laptop", "Mobile", "Tablet", "Camera"];

let isMobIncludes = products.includes("Mobile");
console.log(isMobIncludes);
let mobExists = isMobIncludes ? "Mobile Exists" : "Mobile not Exists";
console.log(mobExists);

let lowerCase4 = products.map(product => product.toLowerCase());
console.log(lowerCase4);

let indexOfString = products.indexOf("Tablet");
console.log(indexOfString);

let arrToStr = products.join("-");
console.log(arrToStr);
console.log(typeof(arrToStr));
// ________________________________________________________________
// Task 5: Date Real-Time Task (Age Calculator)

let userAge = prompt("Please Enter you DOB in the format YYYY-MM-DD");
let userAgeDate = new Date(userAge);
let todayDate = new Date();
let year = todayDate.getFullYear() - userAgeDate.getFullYear();
console.log(`You are ${year} years old`);
// ________________________________________________________________
// Task 6: Login Validation System

let users = [
    {username: "admin", password: "1234"},
    {username: "user", password: "abcd"}
];

let userId = prompt("Enter username");
let userPwd = prompt("Enter password");
let userExistInUsers = users.find(user => user.username === userId);
console.log(userExistInUsers);
if (userExistInUsers && userExistInUsers.password === userPwd){
    console.log("Login Success ✅");
} else {
    console.log("Invalid Credentials ❌");
}
// ________________________________________________________________
// Task 7: Even Number Analyzer

let numbers = [10, 15, 20, 25, 30];

let filteredNum = numbers.filter(curVal=> curVal%2 === 0);
console.log(filteredNum);

let anyOddNum = numbers.some(curVal => curVal%2 !== 0);
console.log(anyOddNum);

let isOddNum7 = anyOddNum ? "Odd num exists" : "Odd num doesn't exists";
console.log(isOddNum7);

let allEvenNum  = numbers.every(curVal => curVal%2 === 0);
console.log(allEvenNum);

let isAllEvenNum = allEvenNum ? "All num are Even" : "All num are not Even";
console.log(isAllEvenNum);

let findFirstNum = numbers.find(curVal => curVal>20);
console.log(findFirstNum);
// ________________________________________________________________
//  Bonus Challenge (Interview Level)

let orders = [
    {id: 1, amount: 500, status: "delivered"},
    {id: 2, amount: 1500, status: "pending"},
    {id: 3, amount: 2000, status: "delivered"}
];

let total8 =0;
let deliveredOrder = orders.map(orderItem=>{
    if (orderItem.status === "delivered"){
        total8 += orderItem.amount
    }
})
console.log(total8);

let filteredOrders = orders.filter(curVal => curVal.status === "pending");
console.log(filteredOrders);

let aboveOrder1000 = orders.some(curVal => curVal.amount>1000);
console.log(aboveOrder1000);
let isOrderAbove1000 = aboveOrder1000 ? "Yes" : "No";
console.log(isOrderAbove1000);

let sortOrder = orders.sort((a,b) => a.amount - b.amount);
console.log(sortOrder);
// ________________________________________________________________


















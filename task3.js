//Getting all posible inputs from the user
let nameInput = prompt("Enter Name:");
let ageInput = prompt("Enter Age:");
let salaryInput = prompt("Enter Salary:");
let loanInput = prompt("Enter Loan Amount:");

//Explicit type conversion using number constructor
let age = Number(ageInput);
let salary = Number(salaryInput);
let loanAmt = Number(loanInput);

//Printing the conversion from string to number
console.log(`Type Conversion Check:`);
console.log("Age - Before", typeof ageInput, " | After:", typeof age);
console.log("Salary - Before", typeof salaryInput, " | After:", typeof salary);
console.log("Loan Amount - Before", typeof loanInput, " | After:", typeof loanAmt);

//Checking if age and salary condition meets our criteria
let isEligible = (age >= 21 && age <= 60) && (salary >= 25000);
let eligiblityStatus = isEligible ? "Eligible ✅" : "Not Eligible ❌";

//Calculating emi
let emi = loanAmt;
emi /= 12;

//Finding out loancategory using flow control statement (conditional statement)
let loanCategory;
if (loanAmt>500000){
    loanCategory = "High Loan";
}
else if (loanAmt>200000){
    loanCategory = "Medium Loan";
}
else {
    loanCategory = "Low Loan";
}

//Checking risk level using Ternary operator
let riskLevel = (salary>50000) ? "Low Risk" : "High Risk";

//Finding out customer type using switch statement
let customerType;
switch (true){
    case (emi>40000):
        customerType = "Premium Customer";
        break;
    case (emi>20000):
        customerType = "Standard Customer";
        break;
    default:
        customerType = "Basic Customer";
}

//Printing output using console.log()
if (isEligible) {
    console.log(`
        Report:
        Enter Name: ${nameInput}
        Enter Age: ${age}
        Enter Salary: ${salary}
        Enter Loan Amount: ${loanAmt}

        ${eligiblityStatus}
        
        EMI: ${emi.toFixed(2)}

        Loan Category: ${loanCategory}
        Risk Level: ${riskLevel}
        Customer Type: ${customerType}
        `);
} else {
    console.log(`
        Report:
        Enter Name: ${nameInput}
        Enter Age: ${age}
        Enter Salary: ${salary}
        Enter Loan Amount: ${loanAmt}

        ${eligiblityStatus}
        `)
}

//Displaying output using document.writeln() to show the output on the UI
if (isEligible) {
    document.writeln(`
        <strong>Report:</strong><br>
        Enter Name: ${nameInput}<br>
        Enter Age: ${age}<br>
        Enter Salary: ${salary}<br>
        Enter Loan Amount: ${loanAmt}<br><br>
        
        <strong>${eligiblityStatus}</strong><br><br>

        <strong>EMI:</strong> ${emi.toFixed(2)}<br><br>

        <strong>Loan Category:</strong> ${loanCategory}<br>
        <strong>Risk Level:</strong> ${riskLevel}<br>
        <strong>Customer Type:</strong> ${customerType}
    `);
} else {
    document.writeln(`
        <strong>Report:</strong><br>
        Enter Name: ${nameInput}<br>
        Enter Age: ${age}<br>
        Enter Salary: ${salary}<br>
        Enter Loan Amount: ${loanAmt}<br><br>
        
        <strong>${eligiblityStatus}</strong><br><br>
    `);
}

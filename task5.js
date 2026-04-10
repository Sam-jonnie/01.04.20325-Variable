// ________________________________________________________________
// Task 1: E-commerce Cart System

let cart1 = [];
let cart2 = [];
cart1.push({name: "Shirt", price: 500}, {name: "Shoes", price: 1500}, {name: "Coolers", price: 5000})
cart1.pop()
cart2.push({name: "Watch", price: 2000})

let mergedCart = [...cart1, ...cart2];
console.log(mergedCart);                         //Merged both carts
mergedCart.push({name: "Purse", price: 500});    //Added 1 new product
mergedCart.pop();                                //Removed last product

let total = 0;
for (let item of mergedCart){
    total += item.price;
}
console.log(total);                              //Found total price
// ________________________________________________________________
// Task 2: User Profile Management

let user1 = { name: "Sam", role: "Trainee", salary: 20000 };

let update = { role: "Developer", salary: 50000 };

let mergerdObj2 = {...user1, ...update};                    //Merged user and update using spread operator
console.log(mergerdObj2);
let {name, role, salary} = mergerdObj2;                     //Destructured name, role, salary
console.log(`${name} is now a ${role} earning ${salary}`);  //Printing formatted output
// ________________________________________________________________
// Task 3: Function with Rest Operator (Team Score System)
function teamScore(teamName, ...scores){
    console.log("Team Name: ", teamName);       //Printing team name
    console.log("All scores: ", scores);        //Printing all scores
    let totalTeamScore = 0;
    let highestScore = scores[0]
    for (let score of scores){
        totalTeamScore += score;
        if (score>highestScore){
            highestScore = score;
        }
    }
    console.log("Total score: ", totalTeamScore); //total score
    console.log("Highest score: ", highestScore); //highest score
}
teamScore("Australia", 50,70,80,100,1)
// ________________________________________________________________
// Task 4: Nested Data Extraction (API Response Simulation)

let apiData = {
    user: {
            name11: "Samuel",
            address: {
                city: "Trichy",
                pincode: 620007
                }
        }
}

let {user: {name11,address: {city, pincode}}} = apiData; //Extracting name, city, pincode using destructuring
console.log(`${name11} lives in ${city} - ${pincode}`);
// ________________________________________________________________
// Task 5: Array Dashboard (Admin Panel)

let users = ["A", "B", "C", "D", "E"];
users.splice(2, 2, "X", "Y")            //Removed "C" and "D" using splice and Added "X", "Y" in same place
let slicedUser = users.slice(0,3)       //Getting only first 3 users using slice
console.log(slicedUser);
let userExit = users.includes("B") 
console.log(userExit);     //Checking if "B" exists   
let indexOfval = users.indexOf("E");    //Finding index of "E"
console.log(indexOfval);
// ________________________________________________________________
// Task 6: Data Cleaning Tool

let messyData = [1, 2, [3, 4, [5]], null, undefined, "hello"]

let flatVal = messyData.flat(Infinity); //Converted to flat array
console.log(flatVal);
flatVal.splice(5,2)                     //Removed null and undefined
console.log(flatVal);                   //Output of clean array
// ________________________________________________________________
// Task 7: Sorting Bug Fix (Real Industry Issue)

let prices = [1000, 200, 50, 5000];

let sortedPrices = prices.sort((a,b)=>a-b)
console.log(sortedPrices);                  //Sorting correctly in ascending order

//Explain why default sort fails?
//Because, the default .sort() function converts every element into a 
//string before comparing them. This leads to "alphabetical" sorting 
//for numbers. Numbers like 10 or 100 appear before 2 because "1" comes 
//before "2" in Unicode/ASCII order.
// ________________________________________________________________
// Task 8: Analytics Report Generator

let orders = [
    {id:1, amount:100},
    {id:2, amount:200},
    {id:3, amount:300}
    ]
let tot1 = orders.reduce((acc, curVal)=>{
    return acc + curVal.amount;
}, 0);
console.log("Total revenue:", tot1);                         //Found total revenue
console.log("Average order value:", tot1/(orders.length-1)); //Found average order value

// ________________________________________________________________
// Task 9: Inventory System

let inventory = ["Shoes", "Bags", "Cooler", "Caps"];
let inventory1 = ["Socks", "Laptops", "Stationery", "Fruits"];

inventory.push("Smartphone", "Watches")                 //Added items
inventory.pop()                                         //Removed items
inventory.splice(2,1, "Clothes")                        //Updated item using splice
let isInclude = inventory.includes("Caps")              //Searching item using includes
console.log(isInclude);
let mergedInventory = [...inventory, ...inventory1];    //Merged inventory
console.log(mergedInventory);
// ________________________________________________________________
// Task 10: Interview Level Challenge 

let processDataArray;
let filteredArray;
function processData(...data){
    processDataArray = data.flat(Infinity)                      //Flattened all values
    filteredArray = processDataArray.filter((item, index)=>{
        return processDataArray.indexOf(item) === index
    })                                                          //Removing duplicates
    processDataArray.sort((a,b)=>a-b)                           //Sorted ascending
    return processDataArray    
}

processData(1,5,[3,4],[2,[6]])
console.log(processDataArray);                                  //Returned final array
// ________________________________________________________________















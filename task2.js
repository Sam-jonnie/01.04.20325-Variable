// // //Section 1: 
// const userName = "Samuel Jonathan R";
// const desig = "Full Stack Developer";
// console.log(userName, desig);
// //Using variables stored name and desgination and printed using consol.log()

// alert("Welcome to JavaScript Session");
// //Using alert() showing an alert

// let quest = confirm("Do you like coding?");
// console.log(quest);
// //Using variable quest stored the output from confirm() and printed

// let favFood = prompt("");
// console.log(favFood);
// //Using a variable stored user input and printed the same

// let displayMsg = "Good Evening Team";
// document.writeln(displayMsg);
// //Displayed a message on UI
// // __________________________________________________________

// //Section 2: 

// console.log(5);
// //Printed a number

// console.warn("This is a warning")
// //Printed warning message

// console.error("Something went wrong!");
// //Printed an error

// console.clear()
// //Cleared all above messages
// // __________________________________________________________

// //Section 3: 

// const userName1 = "Samuel Jonathan R";
// console.log(userName1);
// //Stored my name in a variable and printed it

// let age = 30;
// console.log(typeof(age));
// //Stored my age in a variable and printed its type

// const bool = true;
// console.log(bool);
// //Stored a boolen value in a variable and printed it.

// let word;
// console.log(word);
// //Just declared a variable without initialization so it will undefined

// let sample = null;
// console.log(sample);
// //Assigned null to a variable and printed it
// // __________________________________________________________

// //Section 4:

// let fruitArray = ["Pears", "Pineapple", "Grapes", "Apple", "Orange"];
// console.log(fruitArray);
// //Created an Array and printed the array

// console.log(fruitArray[0]);

// console.log(fruitArray[fruitArray.length-1]);
// //Accessed and printed the first and last item of an Array

// fruitArray[fruitArray.length] = "Bluebery";
// console.log(fruitArray);
// //Added an item to an array

// fruitArray.pop()
// console.log(fruitArray);
// //Removed an item from an Array

// let lenOfArray = fruitArray.length
// console.log(lenOfArray);
// //Found the length of an array and printed the length
// // __________________________________________________________

// //Section 5:

// let student = {
//     name: "Samuel Jonathan R",
//     age: 30,
//     course: "Full Stack Development"
// };
// //Created an object using key and pair values

// console.log(student.name);
// //Using dot notation accessed the value of the key student

// student.college = "ABC Engineering College";
// console.log(student);
// //Added a new prop to the object

// const user = {
//     id: 1,
//     name: "Alice",
//     details: {
//         age: 28,
//         hobbies: ["Reading", "Cycling", "Cooking"] // Nested array
//     }
// };
// console.log(user.details.hobbies);
// //Accessed nested array inside object

// student.name = "Linto Zion Samuel"
// console.log(student.name);
// //Updated a prop using dot notation
// // __________________________________________________________

// //Section 6:

// const firstNumber = 10;
// const secondNumber = 5;
// const sumOfFirstAndSecondNumber = firstNumber + secondNumber;
// console.log(sumOfFirstAndSecondNumber);

// const diffOfFirstAndSecondNumber = firstNumber - secondNumber;
// console.log(diffOfFirstAndSecondNumber);

// const multipleOfFirstAndSecondNumber = firstNumber * secondNumber;
// console.log(multipleOfFirstAndSecondNumber);

// const divisionOfFirstAndSecondNumber = firstNumber / secondNumber;
// console.log(diffOfFirstAndSecondNumber);

// const reminderOfFirstAndSecondNumber = firstNumber % secondNumber;
// console.log(reminderOfFirstAndSecondNumber);

// const power = firstNumber ** 3;
// console.log(power);
// //Performed addition, subtraction, multiplication, division, reminder, exponent of number using operators
// // __________________________________________________________

// // Section 7:

// let num1 = 5;
// num1++
// console.log(num1);
// //Created a variable and used post increement

// let num2 = 10;
// ++num2
// console.log(num2);

// let num3 = 10;
// let num4 = 10;

// let y = num3++; // Post-increment: assigns 10, then num3 becomes 11
// let z = ++num4; // Pre-increment: num4 becomes 11, then assigns 11
// console.log(y, z);

// let num5 = 5;
// num5--
// console.log(num5);
// //Created a variable and used post decreement

// let num6 = 10;
// --num6
// console.log(num6);
// //Created a variable and used pre decreement

// let num7 = 10;
// let num8 = 10;

// let u = num7--; // Post-decreement: assigns 10, then num7 becomes 9
// let v = --num8; // Pre-decrement: num8 becomes 9, then assigns 9
// console.log(u, v);

// let a = 5;
// let b = a++;
// let c = ++a;

// console.log(a);
// // 7 
// // => for var a - var a is on var side so upto var side only calculating the value in line 1 is null
// // second line var a in on val side so full value is taken so 5+1=6
// // third line var a in on val side so full value is taken so 1+6=7
// console.log(b);
// // 5 => for b - var b is on var side, so a =5
// console.log(c);
// //7 
// // => for c - var c is on var side, so a = 7
// // __________________________________________________________

// //Section 8:

// let usersAge = prompt()

// if (usersAge >= 18){
//     console.log("User is eligible to vote");
    
// } else {
//     console.log("User is not eligible to vote");
// }
// //Using prompt() got the user age then using if clause determing if eligible or not with 
// //greater than and equality operators and printing

// let nameOfUser = prompt();
// document.writeln("Hello ", nameOfUser);
// //Getting the name of the user using prompt() amd storing it in a variable and
// //displaying using document.writeln() on UI

// let marks = [20, 30, 40, 50, 60];
// let highestMark = Math.max(...marks)
// console.log(highestMark);
// //From library - Math function used to find the max value, spread operator is
// //used to send mark items as an argument

// let detialsFruit = {
//     yellowFruit : ["pineApple","banana"],
//     redFruit    : ["apple","cherry"],
//     orangeFruit : "orange"
// }
// console.log(detialsFruit.yellowFruit[0]);
// console.log(detialsFruit.orangeFruit);
// //Created an object and accessed using dot notation

// let favFruit1 = prompt("Enter your favourite fruit#1");
// let favFruit2 = prompt("Enter your favourite fruit#2");
// let favFruit3 = prompt("Enter your favourite fruit#3");

// let favFruitArray = [favFruit1, favFruit2, favFruit3];
// console.log(favFruitArray);
// //Initially with three prompt() in a row got the fav fruit from 
// //user and created an array and printed



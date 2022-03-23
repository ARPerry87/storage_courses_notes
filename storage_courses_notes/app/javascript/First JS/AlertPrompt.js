"use strict";

alert("This is an alart message");

let name = prompt("The prompt message is: \nPlease enter your name:");
console.log("you have entered " + name);

let subject = prompt("Please enter your selected subject name","Javascript");
console.log("Your selected subject is " + subject);

let a = prompt("Enter a number to get its square value"); 
let b = a * a 
alert("Square value of " + a + "is : " + b);

let output = confirm("Confirmation message: \nReady to move to the next demo?");

if(output) {
	console.log("you pressed Ok"):
}

else {
	console.log("you pressed cancel");
}
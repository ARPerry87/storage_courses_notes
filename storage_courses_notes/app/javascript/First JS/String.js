"use strict";

let str_double_quotes = "Javascript"; 
let str_single_quotes = 'programming language'; 


let empName = "Jane Change"; 

console.log("Numger of characters in empName is : " + empName.length); 
console.log("Index of h is : " + empName.indexOf("h"));
console.log("'Ch' occurs at position : " + empName.search("Ch"));

var line = "Fundamentals of Javascript"; 

console.log("Original line: ", line);
console.log("slice (1, 12", line.slice(1,12)),
console.log("Slice (-23, -15: ", line.slice(-23, -15));
console.log("Slice(13: ", line.slice(13));

console.log("REplacing 'Javascript' with 'WEb Programming'", 
			line.replace("Javascript", 'Web programming'));
console.log("REplacing 'Javascript' with 'python'",
		 	line.replace(/javascript/i,"Python"));
console.log("Default replace 'a' with 'A' : ", 
			line.replace("a", "A"));
console.log("Global replace of 'a' with 'A' : ", 
			line.replace(/a/g, "A"));

//the replace function does not preform an inplace replacement, it functions on a copy
//therefore it is not a destructive function 

console.log("Splitting the line on space: ", line.split(" "));

var myString = "      Hey, this is JS    "; 

console.log("Before the trim operation : " + myString); 
console.log("After the trim operation : " + myString.trim());
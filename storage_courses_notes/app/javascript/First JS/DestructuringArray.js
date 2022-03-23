"use strict";

let numbers = [10,20,30,40];
let [a,b,c,d] = numbers;

/*

console.log("Values after the first assignment no rest parameters \n"); 

console.log("Value of a : ", + a );
console.log("Value of b : ", + b );
console.log("Value of c : ", + c );
console.log("Value of d : ", + d );

[a,b,c] = numbers

console.log("Values after teh second assignment no rest parameters \n");

console.log("Value of a : ", + a );
console.log("Value of b : ", + b );
console.log("Value of c : ", + c );

*/

[a,...b] = numbers

console.log("Values after [a,...b] = numbers: \n"); 
console.log("value of a: " + a); 
console.log("value of b: " + b); 

[,...a] = numbers

console.log("Values after [,...a] = numbers: \n"); 
console.log("value of a: " + a); 
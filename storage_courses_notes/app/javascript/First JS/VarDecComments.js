"use strict";

var price1 = 5;
var price2 = 10; 
var total = price1 + price2; 

console.log("sum of price1 and price2 = ", total);

//updating variables declared with var
price1 = 21; 
price2 = 14; 
total = price1 + price2; 

console.log("sum of price1 and price2 = ", total);

//assign value using let keyword 

let divident = 420; 
let divisor = 20;
console.log("The division result = ", divident/divisor);

//update value using let keyword 
 divident = 720;
 divisor = 30;
console.log("The updated division result = ", divident/divisor);

/* Let does not permit re-decloration. 
Once a variable has been delcared with let, it 
can be updated but not redeclared.
*/

/*let divident = 880; 
let divisor 40; 
console.log("The division result after redeclaration: ", divident/divisor);
*/

const MY_BIRTHDAY = '21.11.1987';
console.log("my birthday is on ", MY_BIRTHDAY);
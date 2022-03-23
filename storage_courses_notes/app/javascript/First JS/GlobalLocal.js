let globalLet = "This is a global variable with let"; 
var globalVar = "This is a global variable with var"; 

let numLet = 10; 
var numVar = 20; 
const NUM_CONST = 30; 

/*
function firstFunction() {

	let localLet = "This is a local variable with let"; 
	var localVar = "This is a local variable with var";
	undeclaredLocalVar = "This is an unclared variable";	

	/*console.log("globalLet from inside firstFunction: ", globalLet);
	console.log("globalVar from inside firstFunction: ", globalVar);

	console.log("localVar from inside firstFunction: ", localLet);
	console.log("localGet from inside firstFunction: ", localVar);
	console.log("undeclaredLocalVar from inside firstFunction: ", undeclaredLocalVar);

*/

/*
}	


firstFunction();

/*
console.log("globalLet from inside firstFunction: ", globalLet);
console.log("globalVar from inside firstFunction: ", globalVar);
console.log("NUM_CONST from inside firstFunction: ", NUM_CONST);
console.log("numLet from inside firstFunction: ", numLet);
console.log("numVar from inside firstFunction: ", numVar);
//console.log("localLet from inside FirstFunction: " localLet);

//console.log("localVar from inside FirstFunction: " localVar);

//console.log("undeclaredLocalVar from inside FirstFunction: " undeclaredLocalVar);
//undelcared variables become unedifined and undefined is considered a global scope, which is why 
//strict mode is very encouraged in javascript 

*/
/*

function secondFunction() {

	let numLet = 100;
	var numVar = 200; 
	let NUM_CONST = 300;

	console.log("Redeclared numLet from inside secondFunction: ", numLet);
	console.log("REdeclared numVar from inside secondFunction: ", numVar);

}

secondFunction();

console.log("numLet from outside after involking secondFunction: ", numLet);
console.log("numVar from outside after involking secondFunction: ", numVar);
console.log("NUM_CONST from outside after involking secondFunction: ", NUM_CONST);

function thirdFunction() {

	numLet = 1000; 
	numVar = 2000; 
	//Cannot reassign a const 
	//NUM_CONST = 3000;

	console.log("Updated numLet from inside thirdFunction: ", numLet);
	console.log("Updated numVar from inside thirdFunction: ", numVar);
}
*/

//thirdFunction();

//console.log("numLet from outside after invoking thirdFunction: ", numLet); 
//console.log("numVar from outside after involking thirdFunction: ", numVar);

function fourthFunction(){

	console.log("Starting first for loop..."); 
	for (let i = 0; i < 10; i++)
	{
		console.log(i)
	}
	//console.log("Value of i from fourthFunction: "i);

	console.log("Starting second for loop...")

	for (var j = 0; j < 10; j++)
	{
		console.log(j)
	}
	console.log("value of J from fourthFunction:", j);
	//the reason this one works and not the one for let 
	//is because it uses var instead of let
	//let binds to immediate blocks while var does not, var binds to function
}

fourthFunction();
//console.log("the value of i from outside of fourthFunction: ", i)

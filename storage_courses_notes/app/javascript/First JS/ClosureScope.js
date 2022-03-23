"use strict";

var boss = "Margaret";

function employee(name, title){

	this.name = name;
	this.title = title;
	this.domain = "Data";

	this.intro = function(){
		let empTitle = this.domain + " " + title;
		console.log("My name is %s and I report to %s. My title is %s",
					name, boss, empTitle);

	}
}

//var troy = new employee("Troy", "Analyst");

//console.log("The employee introduction: ");
//troy.intro();
/*
boss = "Wolfgang"; 

console.log("The eomployee intro after the boss change: "); 
troy.intro();

troy.domain = "ML"; 

console.log("The eomployee intro after the domain change: ");
troy.intro();

troy.title = "Engineer"; 

console.log("Troy after his title change: ");
troy.intro();


console.log("Troy: ", troy);
*/
//closures will always access data from within a closure first 
//before accessing data from global variables when it comes to 
//data scoping such as this, so make sure that pointers
//will act in a way that you want them to 
/*
function myFunction(){
	console.log("'Hello' will be displayed after ten seconds...!")
	setTimeout(function(){document.write("Hello"); }, 10000);
}

myFunction();

*/

//declaring at the block level rather than outside
//of the block allows each iteration to have access
//to the information the previous block had and 
//ensures that not each block is say 3 or 2 so 
//declare a let inside of a for loop

function timeoutTest(){

	let i;
	for(let i = 0; i<=3; i++)
	{
		setTimeout(function(){
			console.log(i)
		}, i*3000);
	}
}

timeoutTest();


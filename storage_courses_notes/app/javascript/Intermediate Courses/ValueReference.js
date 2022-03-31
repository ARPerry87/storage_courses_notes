"use strict";

function passByValueAndReference() {

	let name = "Tyson";
	let person = {name: "Myra", city: "Austin"};

	console.log("Initial value of name = ", name);
	console.log("Intiial value of person = ", person);

	modifyData(name, person);

	console.log("FInal value of name = ", name);
	console.log("Final value of person = ", person);

}

function modifyData(primitiveType, objectType) {

	primitiveType = "Victor";
	objectType = "Olivia";

	console.log("UPdated primitiveType: ", primitiveType); 
	console.log("Updated objectType: ", objectType);
}

passByValueAndReference();
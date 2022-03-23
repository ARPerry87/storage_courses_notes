"use strict";

/*
console.log("is this === window?", this === window);
console.log("what is this?", this);

var age = 35;
console.log("window.age", window.age);
console.log("this.age", this.age);

this.age = 55; 
console.log("window.age: ", window.age); 
console.log("age: ", age);

let someFunction = () => this; 
console.log("this returned from a function: ", someFunction());
*/

/* let myCar = {
	make : "Volvo", 
	model : "S60", 
	price : 42000,
	printDetails() {
		console.log(`
			Make: ${this.make}
			Model: ${this.model}
			Price: ${this.price}`);
	},
	engine : {
		cylinders : 4, 
		displacement : 2000, 
		horsepower : 250, 
		printDetails() {
			console.log(`
				Displacement: ${this.displacement}cc
				Horsepower: ${this.horsepower}bhp`)
		}
	}
};

console.log("the fields of myCar:");
myCar.printDetails();

console.log("Engine details: \n")
myCar.engine.printDetails()
*/

let myCar = {
	make : "Volvo",
	model : "S60",
	price : 42000,
	engine: {
		cylinders: 4,
		displacement: 2000,
		horsepower: 250,
	}
};

function printCarDetails() {

		console.log(`	Make: ${this.make}
			Model: ${this.model}
			Price: ${this.price}`);
}

function printEngineDetails() {
	console.log(`	Displacement: ${this.displacement}cc
		Horsepower: ${this.horsepower}bhp`);
}

console.log("car detals: \n");
printCarDetails.call(myCar);

console.log("car detals: \n");
printEngineDetails.call(myCar.engine);

let youCar = {
	make : "Porsche",
	model : "718 Cayman",
	price : 610000,
	engine: {
		cylinders: 4,
		displacement: 2500,
		horsepower: 350,
	}
};

console.log("Your car detals: \n");
printCarDetails.call(youCar);

console.log("Your car detals: \n");
printEngineDetails.call(youCar.engine);
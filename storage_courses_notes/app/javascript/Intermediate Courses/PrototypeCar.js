"use strict";

function Vehicle(type) {
	this.type = type;

	this.printDetails= () => {
		console.log("The type of this vehicle is ", this.type)
	}
}

function Car(make, model, drivenWheels) {
	this.make = make;
	this.model = model;
	this.drivenWheels = drivenWheels

	this.printDetails = () => {
		console.log("This %s is a %s %s.", this.type, this.make, this.model);

	}
}

function Aeroplane(make, model, numEngines, engineType){
	this.make = make;
	this.model = model;
	this.numEngines = numEngines;
	this.engineType = engineType;

}

Car.prototype = new Vehicle("Car");
var vwGTI = new Car("Volkswagen", "GTI", "Front");

console.log("The VW GTI object: ", vwGTI);

vwGTI.printDetails();

Aeroplane.prototype = new Vehicle("Aircraft");
var airbusA320 = new Aeroplane("Airbus", "A320", 2, "turbofan");

console.log("The airbus airbusA320 object: ", airbusA320); 
airbusA320.printDetails();

function AirbusA320(variantName, wingspan, factoryLocation) {

	this.variantName = variantName;
	this.wingspan = wingspan;
	this.factoryLocation = factoryLocation;

	this.printDetails = () => {
		console.log("This %s is a %s %s %s which was mad in %s " + 
			"and has a wing spand of %im. and has %i and %s engines.",
			this.type, this.make, this.model, this.variantName,
			this.numEngines, this.engineType);
	}
}

AirbusA320.prototype = airbusA320;
var a320neo = new AirbusA320("Neo", 36, "Hamburg, Germany");
console.log("The details of the Airbus neo: "); 
a320neo.printDetails();

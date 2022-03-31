"use strict";

let firstScorecard = {
	name: "Clara", 
	math: 75,
	verbal: 82
};

let secondScorecard = {
	name: "Steve",
	math: 71,
	verbal: 91
};

function printWeightedScores (mathWt, verbalWt) {

	let weightedScore = (mathWt * this.math + verbalWt * this.verbal) / 
	(mathWt+verbalWt);
	console.log(`Weighted score for ${this.name} is ${weightedScore}`);
}
/*
console.log("Linking the scorecards with call()")
printWeightedScores.call(firstScorecard, 2, 1);

console.log("Linking the scorecards with apply()")
printWeightedScores.apply(firstScorecard, [2,1]);
//call and apply work in similar ways but with different syntax

let firstScore = printWeightedScore.bind(firstScorecard);
//bind is a function itself and isn't a return call like the others, it's binding it to the firstscore object
let secondScore = printWeightedScore.bind(secondScorecard);
//binding a function call to an object and needs to be explicitly invoked later on
*/

//arrow objects inhert their scope from their parents and not from their reference object
let weightedScoreArrow = (mathWt, verbalWt) => {
	let weightedScore = (mathWt * this.math + verbalWt * this.verbal) /
	(mathWt+verbalWt);
	console.log(`Weighted score for ${this.name} is ${weightedScore}`);
	console.log("this is: ", this);
}

console.log("Invoking arrow function with call(): ")
weightedScoreArrow.call(firstScorecard, 2, 1);

console.log("Invoking arrow function using apply: ")
weightedScoreArrow.apply(firstScorecard, 2, 1);

//arrow is great for compact function definition it's not so great for functions that need to be bound to specific objects 
"use strict";

let funcBody = prompt("Enter the body of your function: ");

let weightedScore = new Function("verbalScore", "mathScore", funcBody);

console.log("Weighted Score for (78, 91: ", weightedScore(78, 91));

let greet = new Function("console.log(' Weclome to Skillsoft!')");

greet();


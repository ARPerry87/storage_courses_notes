"use strict";
/*
let firstItem = {id: 1, name: "laptop", price: 500};

let secondItem = {id: 2, name: "watch", price: 240, brand: "Sonical"};

console.log(`firstItem has a name of ${firstItem.name} and a price of ${firstItem.price}.`);

console.log(`secondItem has a name of ${secondITem["name"]} and a price of ${secondItem["price"]}`);


const USD_EUR = 0.9; 
let thirdItem = { id: 3, 
				  name: "headphones",
				  brand: "Sonical",
				  price: 84,
				  priceEUR: this.price = USD_EUR};

console.log("Price of thirdItem in Euros: ", thirdItem.priceEUR);


thirdItem = { id: 3, 
				  name: "headphones",
				  brand: "Sonical",
				  price: 84,
				  priceEUR: function(){return this.price = USD_EUR;}};

console.log("Price of updated thirdItem in Euros: ", thirdItem.priceEUR());

thirdItem = { id: 3, 
				  name: "headphones",
				  brand: "Sonical",
				  price: 84,
				  priceEUR() {return this.price = USD_EUR;}};

console.log("Price of ES6 thirdItem in Euros: ", thirdItem.priceEUR());

thirdItem.mfgCountry = "Canada"; 

console.log("the thirdItem is: ", thirdItem);
*/

let fourthItem = new Object(); 

fourthItem.id = 4;
fourthItem.name = "cell phone";
fourthItem.price = 450;

console.log("the fourthItem is: ", fourthItem);

delete fourthItem.price;

console.log("The fourthItem is: " fourthItem);
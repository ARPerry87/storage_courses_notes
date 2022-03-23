"use strict";


/*
let prices  = new Array(10, 20, 36, 40, 47)
let shallowCopy = prices;

console.log("Before changing shallowCopy, prices = \n", prices);

shallowCopy[0] = 70;

console.log("After changing shallowCopy, prices = \n", prices);

let deepCopy = prices.slice(); 

console.log("Before changing deepCopy, prices = \n", prices);

deepCopy[0] = "Eighty"; 
console.log("After changing deepCopy, prices = \n", prices);
console.log("After changing deepCopy, prices = \n", deepCopy);

prices.push(100); 
console.log("COntents of prices after push: \n", prices);

prices.unshift(0); 
console.log("Contents of prices after unshift \n", prices);

prices.pop();
console.log("Contents of prices after a pop \n", prices);

prices.shift();
console.log("Contents of prices after a shift \n", prices);

delete prices[2];
console.log("Contents of prices after a delete \n", prices

*/
/*
let dogBreeds = ['Labrador,', 'Beagle', 'Golden Retriever', 
				'Doberman', 'German Shepherd', 'Boxer'];
console.log("Original dogBreeds: \n", dogBreeds); 


//the index of three, and the number of elements that need to be 
//removed, and the amount of things we want inserted, which are undefined here
dogBreeds.splice(3, 0, 'Poodle', 'Dalmatian');
console.log("dogBreeds after splice: \n ", dogBreeds);

dogBreeds.splice(1, 2, 'Indi'); 
console.log("dogBreeds after splice \n", dogBreeds);

let sliceOfDogBreeds = dogBreeds.slice(3);
console.log("dogBreeds.slice(3) = \n", sliceOfDogBreeds);

sliceOfDogBreeds = dogBreeds.slice(3, 5);
console.log("dogBreeds.slice(3, 5); = \n", sliceOfDogBreeds);

sliceOfDogBreeds = dogBreeds.slice(-3, -1);
console.log("dogBreeds.slice = \n", sliceOfDogBreeds);
*/
/*
let europeOffices = ['Bucharest', 'Prague', 'Rome'];
let africaOffices = ['Durban', 'Nairobi'];
let oceaniaOffices = ['ChristChurch', 'Sydney'];

let southernOffices = africaOffices.concat(oceaniaOffices)

console.log("southernOffices: ", southernOffices);

console.log("africaOffices: ", africaOffices); 

console.log("oceaniaOffices: ", oceaniaOffices); 

let allOffices = africaOffices.concat(oceaniaOffices, europeOffices);

console.log("allOffices: ", allOffices); 

let sortedOffices = allOffices.sort(); 
console.log("sortedOffices: ", sortedOffices);

console.log("allOffices after sorting: \n", allOffices);

console.log("Reverse sorting of allOffices: \n", allOffices.reverse());

allOffices = africaOffices.concat(oceaniaOffices, europeOffices);

console.log("Sorted copy of allOffices using spread syntax: \n", 
		[...allOffices].sort());
*/

let numArray = [20, 50, 3, 10, 35];

console.log("Original elements of the numArray: \n", numArray); 

console.log("Sorted copy of numArray using the default sort: \n", 
			numArray.slice().sort());
numArray.sort(function(a,b){return a-b});
console.log("sorted copy of numArray with compare function: \n ", numArray);

numArray.sort(function(a,b){return b-a});
console.log("REverse sorted numArray with compare function: \n", numArray);
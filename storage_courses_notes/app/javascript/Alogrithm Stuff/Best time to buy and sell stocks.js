Best time to buy and sell stocks

var maxProfit = function(prices){
	let low = prices[0]; //set the first index to zero
	let high = 0; //start the high off at zero initially 
	for (let price of prices) { //initialize our loop

		low = Math.min(low, price) //feed in the array of first indeces and then the rest of the price array 
		high = Math.max(high, price - low); // feed in first 0, and then the first index minus the total of the array, giving you the maximum of the price array
	}

	return high; //return the maximum result 

};
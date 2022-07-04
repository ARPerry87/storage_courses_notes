var generateParenthesis = function(n) {
	let result = []; //set result to an empty array so that we can have a place to store our results

	let dfs = function(path = [], open = 0, close = 0) { //start by setting everything to zero so that when we iterate we don't have any values 
		if (open < close || open > n || close > n) { //if our open is bigger than close, or if open is larger than n or if close is larger than n
			return; // return 
		}
		if (open == n && close == n) { // otherwise if open is equal to n AND close is equal to n 
			result.push([...path].join('')); //push the results and join them with ''
			return; //return the results
		}
		dfs([...path, '('], open + 1, close); //do a recursive call to fill path with parenthasis and pass it the other parameters of open, and close +1

		dfs([...path, ')'], open, close + 1); //same as above but for the closing parenthasis  
	}

	dfs();
	return result; //return the total results 

};
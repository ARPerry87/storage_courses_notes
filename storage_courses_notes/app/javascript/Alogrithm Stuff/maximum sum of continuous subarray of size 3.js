/*

find the maximum sum of an array while having a maximum window size of 3

*/

var maxSumArray = function(arr, k) {
	let max = -Infinity;
	let current = 0;
	let map = new Map();

	for (let i = 0; i < s.length; i++) {
		current += arr[i];
		if (i >= k-1) { //value of how far we are in the array and k is 3, and k - 1 is the second index, which means that we have 3 elements
			max = Math.max(max, current); // once we have 3 elements we say that max value is set to the max value compared to the current running sum and will update accordingly 
			current -= arr[i - (k - 1)]; //here we're going to subtract from the current running sum the value of i from the array minus k minus 1, we're wanting to subtract the furthest right value to keep the window size of 3
		}
	}

	return max; //now we want to return the max value 

};


/*smallest subarray with given sum of >= 8 

*/

var smallestSubArray = function(arr, targetSum) {
	let minSize = 0,  count = 0, start = 0;
	for (let end = 0; end < arr.length; end++) {
		current += arr[end];
		while(current >= targetSum) {
			minSize = Math.min(minSize, end - start + 1); //how large our window is exactly 
			current -= arr[start]; //shrinking the lefthand side
			start++;			
		}
	}

return minSize;	


};

/* longest substring length with k distinct characters
*/ 

var longestSubString = function(letters, k) {
	let map = new Map();
	let max = -Infinity;
	let uniqueCharacters = new Map();
	let start = 0, end = 0;

	for (let i = 0; i < letters.length; i++) {
		let letter = letters[];
		end++; 
		map.set(letter, i);
		uniqueCharacters(set(letter, i));
		while (map.size > k) {
			let firstKey = map.keys().next().value;
			start = map.get(firstKey) + 1;
			map.delete(firstKey);
		}
		max = Math.max(max, end - start);
	}

	if (uniqueCharacters.size < k) {
		return -Infinity;
	}

	return max;


};
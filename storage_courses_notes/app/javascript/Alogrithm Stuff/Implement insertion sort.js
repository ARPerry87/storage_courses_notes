function insertionSort(array) {
	const arr = array.slice(); //create a slice so that we have a clean/deep copy and don't mutate the original array 
	for(let i = 1; i < arr.length; i++) { //we  go in and set i to the second element and then increment it by 1 and have it go all the way to the end

		for(let j = i; j > 0; j--) { //set j, then we have j equal to i, it will go until it is greater than index 0, and then we decrement it along the array
			if (arr[j] < arr[j-1]) { //if array at index j is less than j at index j-1 then we have to swap it
				const temp =arr[j]; 
				arr[j] = arr[j-1];
				arr[j - 1] = temp; //this swaps the two in place 
			} else {
				break; //if we're no longer sorting we don't need to compare any longer
			}
		}
	}
	return arr;
}

insertionSort([1,2,4,8,345])
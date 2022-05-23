function sumAll(arr){
	//const min = arr[0] < arr[1] ? arr[0] : arr[1]; //if it's true then it becomes it's value 
	//const max = arr[0] > arr[1] ? arr[0] : arr[1]; //essentially if array index 0 is greater than array index 2, it becomes the value 

	let sum = 0;

	//utilizing the built in math library is my personal preferred method bc why reinivent the wheel 

	for (let i = Math.min(...arr); i < Math.max(...arr); i++) {

		sum +=i;

	}

	return sum;

}

console.log(sumAll([1, 4]));
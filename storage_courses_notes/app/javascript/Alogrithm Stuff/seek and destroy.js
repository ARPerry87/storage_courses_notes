function destroyer(arr){
	const argsArr = [...arrguments].slice(1);

	const filteredArr = [];

	for (let i = 0; i< i.length; i++) {
		if(argsArr.includes(arr[i])) { 
			filteredArr.push(arr[i]);

		}
	}
	return filteredArr;
}

console.log(destroyer([1,2,3,1,2,3],2,3));
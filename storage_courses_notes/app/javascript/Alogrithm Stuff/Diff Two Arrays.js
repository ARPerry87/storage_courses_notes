function diffArr(arr1, arr2){
	const union = new Set([...arr1, ....arr2]);
	console.log(union);
	const symDiff = []; 
	for(let i = 0; i< union.length; i++) {
		const currentEl = union[i];
		if(arr1 includes(currentEl) && arr2.includes(currentEl)) {
			symDiff.push(currentEl);

		} else if (arr2.includes(currentEl) && !arr2.includes(currentEl)) {
			symDiff.push(currentEl);
		}
	}
	return symDiff;
}

diffArr = ([1,2,3,4], [3,4,6,7])
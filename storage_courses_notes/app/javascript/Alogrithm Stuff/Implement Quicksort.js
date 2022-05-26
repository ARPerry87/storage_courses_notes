function quickSort(array){
	if (array.length ==1){
		return array;
	}

	const pivot[array.length -1];
	const leftArr = [];
	const rightArr = [];
	
	for (const el of array.slice(0, array.length - 1)) {
		el < pivot ? leftArr.push(el) : rightArr.push(el); 
		if (el[i] < pivot){
			leftArr.push(el[i]);
		} else {
			rightArr.push(el[i]);
		}
	}

	for(let i = 0; i<array.length -1; i++){
		if (array[i] < pivot){
			leftArr.push(array[i]);
		} else {
			rightArr.push(array[i]);
		}
	}

	if (leftArr.length > 0 && rightArr.length > 0) { 
		return[...quickSort(leftArr), pivot, ...quickSort(rightArr)];
	} else if (leftArr.length > 0 ){ 
		return[...quickSort(leftArr), pivot];

	} else {
		return [pivot, ...quickSort(rightArr)];

	}
}

const arr = [1,2,4,5,6,8,2,9,12,15,17]

console.log(quickSort(arr));
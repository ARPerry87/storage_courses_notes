function quickSort(array){
	if (array.length <= 1){
		return array;
	}

	const pivot[array.length -1];
	const leftArr = [];
	const rightArr = [];
	
	for (const el of array.slice(0, array.length - 1)) {
		el < pivot ? leftArr.push(el) : rightArr.push(el); 
	
}
	
  return[...quickSort(leftArr), pivot, ...quickSort(rightArr)];

}

const arr = [1,2,4,5,6,8,2,9,12,15,17]

console.log(quickSort(arr));
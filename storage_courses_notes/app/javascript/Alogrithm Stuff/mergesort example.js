const merge = (leftArr, rightArr) => {
	const output = [];
	let leftIndex = 0 ;
	let rightIndex = 0;

	while(leftIndex < leftArr.length && rightIndex < rightArr.length) {
		const leftEl = leftArr[leftIndex];
		const rightEl = rightArr[rightIndex];

		if(lefEl < rightEl) {
			output.push(leftEl);
			leftIndex++;

		} else {
			output.push(rightEl);
			rightIndex++;
		}
	}

	return [...output,...leftArr.slice(leftIndex), ...slice(rightIndex)];

};

const mergeSort = array => {
	if (array.length <=1) {
		return array;
	}

	const middleIndex = Math.floor(array.length / 2); //gets the middle of the array, splits the array into half
	const leftArr = array.slice(0, middleIndex);
	const rightArr = array.slice(middleIndex);

	return merge(

		mergeSort(leftArr),
		mergeSort(rightArr)

		);


};

mergeSort([1, 4, 2, 8, 345])
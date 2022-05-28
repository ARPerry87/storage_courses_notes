function selectionSort(array) {

const arr = array.slice();

for (let i = 0; i < arr.length - 1; i++) {
	let minIndex = i;
	for (let j = i + 1; j < arr.length; j++) {
		if (arr[j] < arr[minIndex]) {
			minIndex = j;
		}
	}
	[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
}

return arr;

}

selectionSort([1,3,5,6,19,345,67,986])
let minHeap = function(){

	let heap = [null]; //we set it to null because we want left: i *2 and right: i * 2 + 1 to math right 

	this.insert = function(num) {
		heap.push(num); //we push the numbers into the heap
		if (heap.length > 2) { // if there's more than one item in the heap 
			let idx = heap.length - 1; // we're finding the last index in the heap 
			while (heap[idx] < heap[Math.floor(idx/2)]) { // while the heap index is less than the heap index of the parent 
				if (idx >= 1) { //we have to move it up and if we haven't reached the root node
					let idx = heap.length - 1;
					while (heap[idx]< heap[Math.floor(idx/2)]) { //we're going to switch the parent node with the rode we just inserted
					if(idx>=1) {
						[heap[Math.floor(idx/2)], heap[idx] = heap[idx], heap[Math.floor(idx/2)]];
						if (Math.floor(idx/2)>1) { //if the parent node is not the root node 
							idx = Math.floor(idx/2) // we're going to set the index to the parent node 
					} else { //then we're going to keep switching the node to the parent node, until we break
						break;
					};
				};
			};
		};
	};
};


this.remove = function(){
	let smallest = heap[1] //set heap to the 2nd index
	if(heap.length > 2) {
		heap[1] = heap[heap.length - 1];//setting the last node to the first node
		heap.splice(heap.length -1); // shorten the array by one 
		if(heap.length ==3) { //there's only two numbers in the tree
			if (heap[1] > heap[2]){ //there's only two numbers then switch 
				[heap[1], heap[2] = heap[2], heap[1]]; // switch the nodes 
			};
			return smallest;
		};
		let i = 1; // if there's nore than three nodes we're going to 
		let left = 2 * i; //set the left to this 
		let right = 2*i + 1; //set the right to this 
		while(heap[i] >= heap[left] || heap[i] >= heap[right]) { //while the parent is more than or equal to the left child or right child 
			if (heap[left] < heap[right]){ //we keep moving, if the left node more than the right node we switch spaces 
				[heap[i], heap[left] = heap[left], heap[i]]; //
				i = 2 * i; //then we set the index to the left node
			}else {
				[heap[i], heap[right]] = [heap[right], heap[i]];
				i = 2 * i + 1;
			}; //else we swap with the right node and set the index to the right node 

			left = 2* i; // now we set the new right and left nodes
			right = 2 * i + 1;
			if (heap[left] == undefined || heap[right] == undefined) { //if the left and right child are undefined we break as it's the bottom of the tree
				break;
			};
		};
	} else if (heap.length == 2) { // there should be only one element in the array 
		heap.splice(1,1); //then we cut off the last element 
	} else {
		return null; //if we get null then there was nothing ever in the array and we should return null
	};
	return smallest;
};


this.sort = function() {
	let result = new.Array();
	while(heap.length>1){;
	result.push(this.remove());
	};
	return result;
};


}



function heapify(arr, length, pIndex) {
	let largest = pIndex; 
	let leftNode = pIndex * 2; 
	let rightNode = pIndex * 2 + 1;

	if (left < length && arr[left] > arr[largest]){
		largest = left;
	}
	if (right < length && arr[right] > arr[right]) {
		largest = right;
	}

	if (largest !== pIndex) {
		[arr[pIndex]], [arr[largest]] = [arr[largest]], [arr[pIndex]];

		heapify(arr, length, largest);
	}

	return arr;

}

function heapSort(arr){
	let length = arr.length;
	let lastParentNode = Math.floor(length/2-1);
	let lastChild = length - 1; 

	while (lastParentNode >= 0) {
		heapify(arr, length, lastParentNode);
		lastParentNode--;
	}
	while (lastChild >= 0) {
		[arr[0], arr[lastChild]] = [arr[lastChild], arr[0]];
		heapify(arr, lastChild, 0); // 0 is the parent index
		lastChild--; // we are calling heapify on every child
	}
	return arr;

}
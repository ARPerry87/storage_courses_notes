let MiniHeap = function() {

	let heap = [null];

	this.insert = function(num) {
		heap.push(num);
		if(heap.length > 2) {
			let idx = heap.length -1;
			while (heap[idx] < heap[Math.floor(idx/2)]{
				if (idx>= 1){ 
					[heap[Math.floor(idx/2)], heap[idx]] = [heap[idx]], [heap[Math.floor(idx/2)]];

				}
			})
		}
	}
}
/*
const n1 = {
	data: 100 
}

const n2 = {
	data: 200
}

n1.next = n2; 

console.log(n1)
*/

class Node{
	constructor(data, next=null){
		this.data = data;
		this.next = next;
	}
}

const n1 = new Node(100);
console.log(n1);

class LinkedList{
	constructor(){
		this.head = null
		this.size = 0;
	}

//insert first node 

insertFirst(data){
	this.head = new Node(data, this.head);
	this.size++;
}

//insert last node 

insertLast(data){
	let node = new Node(data);
	let current; 

	// if empty make head 
	if(!this.head){
		this.head = node; 
	} else {

		current = this.head;

		while(current.next){
			current = current.next;
		}

		current.next = node;
	}

	this.size++;
}

//insert at index 
insertAt(data, index){
	//if index is out of range
	if(index >0 && index > this.size){
		return;

	}

	//if first index

	if(index === 0 ){
		this.insertFirst(data);
		return;
	}

	const node = new Node(data);
	let current, previous; 

	//Set current to first
	current = this.head; 
	let count = 0;

	while(count < index ){
		previous = current; // Node before index 
		count++;
		current = current.next; //node after the index 

	}

	node.next = current;
	previous.next = node;

	this.size++;

}

//Get at index 
getAt(index){
	let current = this.head;
	let count = 0;

	while(current) {
		if(count == index) { 
			console.log(current.data);

		}

		count++;
		current = current.next;
	}

	return null;
}

//Remove at index 
	removeAt(index){

		if(index > 0 && index > this.size) { 

			return;
		}

		let current = this.head;
		let previous;
		let count = 0;

		//retmove first 

		if(index ===0){ 

			this.head = current.next;
		}else{
			while(count < index){
				count++;
				previous = current;
				current = current.next;
			}

			previous.next = current.next;
		}

		this.size--;

	}

//Clear the list 

clearList(){

	this.head= null;
	this.size = 0;

}

//Print list data 
printListData(){
	let current = this.head;

	while(current){
		console.log(current.data);
		current = current.next;
	}
}


}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);

ll.removeAt(2);

ll.printListData();
//ll.getAt(2)
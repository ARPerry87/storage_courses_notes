const PI = 3;

function Circle(r) {
	this.radius = r;

}

let getAreaFirst = function (circle) {
	
	console.log("Inside getAreaFirst");
	console.log("Area of circle: ", PI * circle.radius * circle.radius);
}

let firstCircle = new Circle(10);

function innerFunction() {
	
	const PI = 3.1;

	let getSecondArea = function(circle){
		console.log("INside getAreaSecond");
		console.log("Area of circle: ", PI * circle.radius * circle.radius );
	}	
	let getAreaThird = function(circle){
		const PI = 3.14;
		console.log("Inside getAreaThird");
		console.log("Area of circle: ", PI * circle.radius * circle.radius)


	}

	getCircumfrence = function(circle){

		console.log("inside getCircumfrence");
		console.log("Circumference of circle: ", 2 * PI * circle.radius);
	}

	let secondCircle = new Circle(20);

	/*

	console.log("innerFunction: calling the functions with firstCircle: "); 
	getAreaFirst(firstCircle);
	getSecondArea(firstCircle);
	getCircumfrence(firstCircle);
	getAreaThird(firstCircle);

	console.log("innerFunction: Calling the functions with secondCircle: ");
	getAreaFirst(secondCircle);
	getSecondArea(secondCircle);
	getCircumfrence(secondCircle);
	getAreaThird(secondCircle);

*/
}
innerFunction();

console.log("Outside, calling the functions with firstCircle: ");
getAreaFirst(firstCircle);
//console.log("OUtside onload. Calling the functions with secondCircle: ");
//getAreaFirst(secondCircle);

function getAreaFourth(circle) {
	
	const PI = 3.142;
	function calculateArea(){

		console.log("inside geatAreaFourth");
		console.log("Area of circle: ", PI * circle.radius * circle.radius);
	}

	return calculateArea;
}

console.log("The value of PI in this scope: ", PI);
let circleArea = getAreaFourth(firstCircle);

circleArea();

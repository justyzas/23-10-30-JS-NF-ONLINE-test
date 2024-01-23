// 2. Write a JavaScript program to create a class called 'Circle'
// with property for radius.
// Include two getters to calculate Circle area and perimeter.
// Create an instance of the 'Circle' class and calculate its area
// and perimeter.

class Circle {
	constructor(radius) {
		this.radius = radius;
	}
	get area() {
		return Math.PI * this.radius ** 2;
	}
	get perimeter() {
		return 2 * Math.PI * this.radius;
	}
}

const circleK = new Circle(7);
console.log(circleK.area);
console.log(circleK.perimeter);

// 2. Write a JavaScript program to create a class called 'Rectangle'
// with properties for width and height.
// Include two methods to calculate rectangle area and perimeter.
// Create an instance of the 'Rectangle' class and calculate its area
// and perimeter.

class Rectangle {
	constructor(width, height) {
		this.width = width;
		this.height = height;

		//susigeneruojami papildomi laukai
		// this.area = width * height;
		// this.perimeter = 2 * (width + height);
	}
	calculateArea() {
		return this.width * this.height;
	}
	calculatePerimeter() {
		return 2 * (this.width + this.height);
	}
	// get area() {
	// 	return this.width * this.height;
	// }
	// get perimeter() {
	// 	return 2 * (this.width + this.height);
	// }
}

const staciakampis1 = new Rectangle(4, 5);
const staciakampis2 = new Rectangle(7, 2);

//Trys skirtingi budai gauti plotą bei perimetra
// console.log(staciakampis1.area);
// console.log(staciakampis1.perimeter);
console.log(staciakampis1.calculateArea());
console.log(staciakampis1.calculatePerimeter());

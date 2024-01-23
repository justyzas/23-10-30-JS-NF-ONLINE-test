// const objektas = {
// 	//property
// 	//spalva - savybė, raudona - reikšmė
// 	spalva: "raudona",
// 	sayHello() {
// 		console.log("hello");
// 	},
// 	hello: () => {
// 		console.log("hellos");
// 	},
// 	hi: function () {
// 		console.log("hi");
// 	},
// }; // {} - objekto notacija

// objektas.hi();

class Person {
	// name;
	// height;
	// nationality = "Lithuanian";
	static countOfPeople = 0;
	constructor(name, height) {
		//konstruktoriaus paskirtis - nustatyti objekto laukus
		// funkcija - iškviečiama susikuriant naujam objektui
		this.name = name;
		this.height = height;
		this.nationality = "Lithuanian";
		Person.countOfPeople++;
	}

	//Metodas
	sayHello() {
		console.log(`Labas, aš ${this.name}`);
	}

	//Statinis metodas
	static countArea(height, width) {
		console.log(width * height);
	}
}

//Naujo objekto, pasinaudojant klase sukūrimas
const petras = new Person("Petras", 1.87);
const egle = new Person("Egle", 1.71);

//objekto metodų panaudojimas
petras.sayHello();
egle.sayHello();

//Statiniai metodai, savybes - kreipiamės į juos per klasę
Person.countArea(4, 5);
console.log(Person.countOfPeople);

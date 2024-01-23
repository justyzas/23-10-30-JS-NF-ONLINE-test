class Vehicle {
	// speed, vehicleMake

	constructor(speed, vehicleMake) {
		this.speed = speed;
		this.vehicleMake = vehicleMake;
		this.color = "red";
	}

	horn() {
		console.log("Makes a sound...");
	}
}

class Car extends Vehicle {
	constructor(speed, make, doorCount) {
		super(speed, make);
		this.doorCount = doorCount;
	}

	horn() {
		console.log("BEEEP!");
	}
}

class Bike extends Vehicle {
	constructor(speed, make) {
		super(speed, make);
	}

	horn() {
		console.log("Ring Ring!");
	}
}

class Ship extends Vehicle {
	constructor(speed, make, doorCount) {
		super(speed, make);
		this.doorCount = doorCount;
	}
}

const toyota = new Car(190, "Toyota Auris", 4);
const bmx = new Bike(45, "BMX");
const ship = new Ship(14, "Ship-X", 140);

toyota.horn();
bmx.horn();
ship.horn();

console.log(toyota);
console.log(bmx);
console.log(ship);

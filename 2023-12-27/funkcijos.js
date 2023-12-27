//Tai kas yra funkcijos deklaracijoje - yra parametras

function showMessage(message) {
	console.log(message);
}

// const showMessage = (message) => {
// 	console.log(message);
// };

// const showMessage = function (message) {
// 	console.log(message);
// };

//Tai kas yra iskvietime tarp skliaustu - yra argumentas
console.log(showMessage("Labas pasauli"));

function isABiggerThanB(aValue, bValue) {
	return aValue > bValue;
}
function findBiggerValue(a, b) {
	console.log(isABiggerThanB(a, b));
	if (isABiggerThanB(a, b)) return a;
	else return b;
}

console.log(findBiggerValue(40, 55));

//Spread operatorius:  ...kintamasis
function findMaximumValue(...args) {
	// console.log(args);
	let max = args[0]; //1st elementas
	for (let index in args) {
		if (args[index] > max) max = args[index];
	}
	console.log(max);
}

//spread operatorius
findMaximumValue(4, 7, 8, 100, 100, 150, -3, 200, "tekstas");

// console.log(Math.max(1, 4, 8, -23, 15, "Number"));
// document.querySelector(".pienas").addEventListener("click", () => {
// 	console.log("neliesk!");
// });

function callbackFunction(message, callback) {
	console.log(message);
	callback();
}

callbackFunction("labas pasauli", () => {
	console.log("Funkcijos pabaiga");
});

callbackFunction("labas pasauli", () => {
	console.log("Dar ne pabaiga");
});

function recursion(value) {
	console.log("value: " + value);
	if (value < 10) recursion(value + 1);
	console.log(value);
}

recursion(4);

//Rekursijos panaudojimas
function factorial(n) {
	if (n === 1) {
		return 1;
	} else {
		return n * factorial(n - 1);
	}
}

console.log(factorial(4));

// Sukurkite funkciją, kuri apskaičiuoja pažymių vidurkį;

function countAverage(...pazymiai) {
	let sum = 0;
	for (let pazymys of pazymiai) {
		sum += pazymys;
	}
	let average = sum / pazymiai.length;
	return average;
}
console.log(countAverage(4, 7, 9, 10));

//Sukurti funkciją, kuriai paduodamas skaičių masyvas.
//Jei masyve daugiau nei 6 elementai - kiekvieną elementą padalinti iš 2.
// Kitu atveju padauginti visus elementus iš 2.
// Gražinti visų masyve esančių elementų vidurkį.
// tikrinimą daryti išorėje
//1. Tikrinti ar masyve yra daugiau nei 6 elementai
//Jei taip:
//Iskviesti funkcija kuri apskaiciuoja vidurki padalindama
//visus skaicius is 2
//Jei ne:
//Iskviesti funkcija kuri apskaiciuoja vidurki
//padaugindama visus skaicius is 2
//2. Funkcijos viduje patikrinti ar paduodamas argumentas yra masyvas
//3. Apskaiciuoti rezultatinio masyvo elementu reiksmes
//4. Apskaiciuoti rezultatinio masyvo elementu suma;
//5. Apskaiciuoti vidurki padalinant visa elementu suma is elementu kiekio
//6. Grazinti vidurki

const arr = [4, 7, 8, 9, 10, 11, 12];

if (arr.length > 6) {
	// funkcija kuri padalina visus skaicius is 2 ir apskaiciuoja vidurki
	countAverageSpecial(arr, divideAllElementsByTwo);
} else {
	//funkcija, kuri padaugina visus skaicius is 2 ir apskaiciuoja vidurki
	countAverageSpecial(arr, multiplyAllElementsByTwo);
}
function divideAllElementsByTwo(array) {
	for (let index in array) {
		array[index] /= 2;
	}
	return array;
}
function multiplyAllElementsByTwo(array) {
	for (let index in array) {
		array[index] *= 2;
	}
	return array;
}

function countAverageSpecial(array, callback) {
	if (typeof array !== "object") return 0;
	const resultArray = callback(array);
	let sum = 0;
	for (let value of resultArray) {
		sum += value;
	}
	let average = sum / array.length;
	return average;
}

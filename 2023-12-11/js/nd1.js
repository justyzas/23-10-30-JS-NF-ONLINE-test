// Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A - 65, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.
// Išrūšiuokite 1 uždavinio masyvą pagal abecėlę.
// Sugeneruokite 3 masyvus pagal 1 uždavinio sąlygą. Sudėkite masyvų reikšmes, sudėdami reikšmes pagal atitinkamus indeksus. Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote.
// Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).
// Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 3 uždavinio masyve, bet nėra antrame 3 uždavinio masyve.
// Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 4 uždavinio masyvuose.
// Sugeneruokite masyvą, kurio indeksus sudarytų pirmo 4 uždavinio masyvo reikšmės, o jo reikšmės būtų iš antrojo masyvo.

function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generateArrayOfStrings = (length) => {
	const arr = [];
	for (let i = 0; i < length; i++) {
		let atsitiktineRaide = String.fromCharCode(rand(65, 68));
		arr.push(atsitiktineRaide);
	}
	return arr;
};

//1 uzd
const charactersArray = generateArrayOfStrings(200);
console.log(charactersArray);

//2 uzd
charactersArray.sort();
console.log(charactersArray);

//3 uzd
const arr1 = generateArrayOfStrings(200),
	arr2 = generateArrayOfStrings(200),
	arr3 = generateArrayOfStrings(200),
	sumArray = [],
	uniqueValues = [],
	superUniqueValues = [];

for (let index in arr1) {
	sumArray[index] = arr1[index] + arr2[index] + arr3[index];
}
console.log(sumArray);

for (const value of sumArray) {
	if (!uniqueValues.includes(value)) {
		uniqueValues.push(value);
	}
}

console.log(uniqueValues);

for (let value of sumArray) {
	let countOfThisCombination = 0;
	// value = ADA
	for (let value2 of sumArray) if (value === value2) countOfThisCombination++;

	if (countOfThisCombination === 1) superUniqueValues.push(value); //.length() - grazina kiek masyve yra elementu;
}

console.log(superUniqueValues.join(", "));
console.log("is viso unikaliu reiksmiu: " + superUniqueValues.length);

//4
// Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).

function generateUniqueArray(length, min, max) {
	const arr = [];
	while (arr.length < length) {
		let randomNumber = rand(min, max);
		if (!arr.includes(randomNumber)) arr.push(randomNumber);
	}
	return arr;
}

const array1 = generateUniqueArray(100, 100, 999),
	array2 = generateUniqueArray(100, 100, 999);

console.log(`Masyvas 1:`);
console.log(array1);
console.log(`Masyvas 2:`);
console.log(array2);

//5

// Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 3 uždavinio masyve, bet nėra antrame 3 uždavinio masyve.

const fifhArray = [];

for (let index in arr1) {
	if (arr1[index] !== arr2[index]) {
		fifhArray.push(arr1[index]);
	}
}
console.log(fifhArray);

//6
//budas #1
const newArray = [];
for (let value of array1) {
	if (array2.includes(value)) {
		newArray.push(value);
	}
}
//budas #2
const matchingNumbers1 = array1.filter((value) => array2.includes(value));

console.log(newArray);
console.log(matchingNumbers1);

//7
// Sugeneruokite masyvą, kurio indeksus sudarytų pirmo 4 uždavinio masyvo reikšmės, o jo reikšmės būtų iš antrojo masyvo.

const newArray2 = [];
let i = 0;
for (let index of array1) {
	newArray2[index] = array2[i];
	i++;
}

console.log(newArray2);

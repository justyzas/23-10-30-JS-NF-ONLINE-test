function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Sukuriama funkcija su pavadinimu generateArrayOfRandomNumbers
//Skliausteliuose nurodomi naudotini funkcijos parametrai.
function generateArrayOfRandomNumbers(min = 5, max, countOfElements) {
	let array = [];
	for (let i = 0; i < countOfElements; i++) {
		array.push(rand(min, max));
	}
	//gražinama reikšmė
	return array;
}

function getNextElement(array, index) {
	if (array.length - 1 === index) return array[0];
	else return array[index + 1];
}

//Vykdomos filtracijos iš 20 elementu masyvo su reikšmėmis nuo 0 iki 10 pagal užduoties sąlygą.
//prieš kiekvieną filtraciją, iš naujo susigeneruoti masyvą
let arr = generateArrayOfRandomNumbers(0, 10, 20);

console.log(arr);

//a. Yra lyginis

for (let i = 0; i < arr.length; i++) {
	if (arr[i] % 2 === 0) {
		arr.splice(i, 1);
		i--;
	}
}
console.log(arr);

//B salyga: yra nelyginis

arr = generateArrayOfRandomNumbers(0, 10, 20);
console.log(arr);

for (let i = 0; i < arr.length; i++) {
	if (arr[i] % 2 !== 0) {
		arr.splice(i, 1);
		i--;
	}
}
console.log(arr);

//c. Dalinasi iš 3;

arr = generateArrayOfRandomNumbers(0, 10, 20);
generateArrayOfRandomNumbers();
console.log(arr);

for (let i = 0; i < arr.length; i++) {
	if (arr[i] % 3 === 0) {
		arr.splice(i, 1);
		i--;
	}
}
console.log(arr);

//d. Yra lygus savo indeksui;

arr = generateArrayOfRandomNumbers(0, 10, 20);

console.log(arr);

for (let i = 0; i < arr.length; i++) {
	if (i === arr[i]) {
		arr.splice(i, 1);
		i--;
	}
}
console.log(arr);

//e. Yra mažesnis nei 5 arba didesnis nei 8;

arr = generateArrayOfRandomNumbers(0, 10, 20);

console.log(arr);

for (let i = 0; i < arr.length; i++) {
	if (arr[i] < 5 || arr[i] > 8) {
		arr.splice(i, 1);
		i--;
	}
}
console.log(arr);
//f. Yra  nuo 2 iki 5;
arr = generateArrayOfRandomNumbers(0, 10, 20);

console.log(arr);

for (let i = 0; i < arr.length; i++) {
	if (arr[i] >= 2 && arr[i] <= 5) {
		arr.splice(i, 1);
		i--;
	}
}

console.log(arr);

//g. kurių suma su sekančiu elementu masyve yra dviženklė (jei reikšmė paskutinė masyve, sekančiu elementu laikykite pirmąjį masyvo elementą)
arr = generateArrayOfRandomNumbers(0, 10, 20);

console.log(arr);

for (let i = 0; i < arr.length; i++) {
	//1. patikriname ar elementas yra paskutinis
	//jei taip kaip sekanti elementa imame pirmaji masyvo elementa arr[0]
	//jei ne kaip sekanti elementa imam sekanti arr[i + 1]
	let nextElement = getNextElement(arr, i);

	if (arr[i] + nextElement >= 10) {
		arr.splice(i, 1);
		i--;
	}
}
//DRY - Dont repeat yourself
console.log(arr);

//h kurių suma su sekančiu elementu masyve yra lyginė
arr = generateArrayOfRandomNumbers(0, 10, 20);

console.log(arr);

for (let i = 0; i < arr.length; i++) {
	//1. patikriname ar elementas yra paskutinis
	//jei taip kaip sekanti elementa imame pirmaji masyvo elementa arr[0]
	//jei ne kaip sekanti elementa imam sekanti arr[i + 1]
	let nextElement = getNextElement(arr, i);
	if ((arr[i] + nextElement) % 2 === 0) {
		arr.splice(i, 1);
		i--;
	}
}

console.log(arr);

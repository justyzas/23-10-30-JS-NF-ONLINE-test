function rand(min, max) {
	//sugeneruoja skaiciu nuo min iki max reiksmes
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function categoryOneCalculation(skaicius) {
	let rez = skaicius ** 2;
	return rez;
}

function categoryFourthCalculation(skaicius) {
	let vienetai = skaicius % 10;
	let rez = (vienetai + skaicius) / 2;
	return rez;
}

let sk = rand(0, 99);
// Kategorija 1: 0 - 10 - pakelti skaičių kvadratu ir atspausdinti
if (sk <= 10) {
	// Operatorius ** - pakelia tam tikru laipsniu
	console.log(
		`Skaicius: ${sk}\t Kategorija: 1, \t Rezultatas: ${categoryOneCalculation(
			sk
		)}`
	);
}
// Kategorija 2: 10 < skaičius < 20 - atspausdinti skaičių tokį koks jis yra;
else if (sk < 20) {
	console.log(`Skaicius: ${sk}\t Kategorija: 2, \t Rezultatas: ${sk}`);
}
// Kategorija 3: 20 - 49  ir Skaičius yra lyginis: Skaičiaus dešimtis atimti iš paties skaičiaus ir atspausdinti
else if (sk >= 20 && sk < 49 && sk % 2 === 0) {
	let desimtys = +sk.toString()[0];
	let rez = sk - desimtys;
	console.log(`Skaicius: ${sk}\t Kategorija: 3, \t Rezultatas: ${rez}`);
}
// Kategorija 4: 20 - 49 ir skaičius yra nelyginis: Skaičiaus vienetus pridėti prie paties skaičiaus ir padalinti iš 2. Galiausiai atspausdinti;
else if (sk >= 20 && sk < 49 && sk % 2 !== 0) {
	console.log(
		`Skaicius: ${sk}\t Kategorija: 4, \t Rezultatas: ${categoryFourthCalculation(
			sk
		)}`
	);
	//    DRY - Don't repeat yourself!
}
// Kategorija 5: skaicius >= 50 ir skaičius dalinasi iš 3 be liekanos:
// Sudarykite atsitiktinį stringą iš 4 raidžių ir jį atspausdinkite
else if (sk >= 50 && sk % 3 === 0) {
	let a = rand(97, 122),
		b = rand(97, 122),
		c = rand(97, 122),
		d = rand(97, 122);
	let stringas =
		String.fromCharCode(a) +
		String.fromCharCode(b) +
		String.fromCharCode(c) +
		String.fromCharCode(d);
	console.log(`Skaicius: ${sk}\t Kategorija: 5, \t Rezultatas: ${stringas}`);
} else {
	console.log(`skaičius ${sk}, nepriklauso nei vienai kategorijai`);
}

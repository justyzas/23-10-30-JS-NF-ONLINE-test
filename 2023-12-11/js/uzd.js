/* 
1. Sukurti funkciją, kuri generuoja x kiekį atsitiktinių skaičiu nuo min iki max reikšmės
2. Sukurti masyvą iš 100 elementų, sudarytą iš String'ų, kurių ilgis yra 4 simboliai;
3. Išrūšiuoti String'ų masyvą didėjančia tvarka;
4. Išrūšiuoti tą patį masyvą mažėjančia tvarka;
5. Sukurti masyvą iš 100 elementų, sudarytą iš skaičių nuo -100 iki 200;
6. Patikrinti ar skaičius 68 egzistuoja masyve. Ar egzistuoja skaičius - praneškite pasinaudodami console.log()
7. Išrūšiuoti masyvą didėjančia tvarka;
8. Išrūšiuoti masyvą mažėjančia tvarka;
9. Atrasti didžiausią bei mažiausią reikšmes skaičių masyve.
10. Apskaičiuoti visų skaičių vidurkį;




1.Sukurti funkciją, kuri generuoja x kiekį atsitiktinių string'ų, sudarytą iš strLength simbolių. Generavimas nuo A - 65 iki Z
2. Patikrinti, ar String masyve egzistuoja reikšmių, prasidedančių bei užsibaigiančių raide A. Jei taip - pranešti kokia šio string pozicija masyve bei šio elemento reikšmė;
3. Išfiltruokite visas masyvo reikšmes, pasidedančias raidėmis: 'X', 'M', 'K'
4. Išfiltruokite visas masyvo reikšmes, kurių viduriniai du simboliai yra vienodi. Sukurkite išfiltruotų reikšmių masyvą;
5. Jei išfiltruotų reikšmių masyve reikšmių mažiau nei 3 - rikiuoti didėjančia, kitu atveju - rikiuoti didėjančia tvarka.
6. Kiekvienai string'ų masyvo reikšmei pridėti po dar vieną atsitiktinę raidę gale;
7. Kiekvieną stringų masyvo elementų reikšmę išrikiuoti pagal abecelę didėjančia tvarka
8. Sukurkite naują masyvą atsitiktinėms Sring'ų reikšmėms generuoti. Generuokite atsitiktines String reikšmes iš 4 simbolių tol, kol jame bus žodis XMAS;
9. Išrikiuokite masyvą priešinga nei abecelės tvarka
10. Atraskite, kurioje masyvo pozicijoje randasi žodis 'XMAS'
*/

function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
//1
const generateRandomNumbersArray = (length, min, max) => {
	const arr = [];
	for (let i = 0; i < length; i++) arr.push(rand(min, max));
	return arr;
};

//2
const generateString = (length) => {
	let str = "";
	for (let i = 0; i < length; i++) {
		str += String.fromCharCode(rand(65, 90));
	}
	return str;
};

const stringArray = [];
for (let i = 0; i < 100; i++) {
	stringArray.push(generateString(4));
}
console.log(stringArray);
//3
stringArray.sort();
console.log(stringArray);

//4
stringArray.sort().reverse();
console.log(stringArray);

//5.
const numbersArray = generateRandomNumbersArray(100, -100, 200);
console.log(numbersArray);

// 6. Patikrinti ar skaičius 68 egzistuoja masyve. Ar egzistuoja skaičius - praneškite pasinaudodami console.log()

if (numbersArray.includes(68)) {
	console.log(`68 egzistuoja numbersArray masyve`);
} else {
	console.log(`68 nera numbersArray masyve`);
}

// 7. Išrūšiuoti masyvą didėjančia tvarka;

numbersArray.sort((num1, num2) => {
	return num1 - num2;
});
console.log(numbersArray);

//8.
numbersArray.reverse();
console.log(numbersArray);

//9.

// let max = -1000,
// 	min = 1000;

// for (let value of numbersArray) {
// 	if (value > max) {
// 		max = value;
// 	}
// 	if (value < min) {
// 		min = value;
// 	}
// }
// console.log(`minimali masyvo reiksme: ${min}`);
// console.log(`maksimali masyvo reiksme: ${max}`);

let min = Math.min(...numbersArray);
let max = Math.max(...numbersArray);

console.log(min);
console.log(max);

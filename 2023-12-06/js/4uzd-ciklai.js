function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.  Skaičiai didesni nei 275 turi būti raudonos spalvos.

let numbers = [];
let biggerThan150 = 0;
for (let i = 0; i < 300; i++) {
	let randomNumber = rand(0, 300);
	if (randomNumber > 150) biggerThan150++;

	if (randomNumber > 275) {
		//raudonas skaicius
		document.write(`<span style="color: red">${randomNumber}</span> `);
	} else {
		//paprastas skaicius
		// document.write("<black>" + randomNumber + "</black> ");
		document.write(`<span style="color: black">${randomNumber}</span> `);
	}
}
console.log(`Didesnių skaičių nei 150 masyve yra: ${biggerThan150}`);

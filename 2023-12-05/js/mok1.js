function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
//
// rand(0, 10);

//Užduotis: sukurkite fibonacci skaičių seką susidarančią iš 50 skaičių.

let fibonacci = [0, 1];

// Elemento idejimas i masyvo vieta pagal indeksa
// fibonacci[2] = fibonacci[1] + fibonacci[0];

// Elemento pridejimas prie masyvo galo
// fibonacci.push(fibonacci[1] + fibonacci[0]);

for (let i = 2; i < 50; i++) {
	fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
}
// console.log(fibonacci);

//masyvo su atsitiktinėmis reikšmėmis generavimas. 10 reikšmių

let atsitiktiniaiSkaiciai = [];

for (let i = 0; i < 1000; i++) {
	let randomSkaicius = rand(0, 10);
	atsitiktiniaiSkaiciai.push(randomSkaicius);
	// atsitiktiniaiSkaiciai[i] = randomSkaicius;
}

console.log(atsitiktiniaiSkaiciai);

//pasinaudodami atsitiktiniu skaiciu masyvu, atspausdinkite
// tik nelygine reikšmę turinčius elementus

for (let i = 0; i < atsitiktiniaiSkaiciai.length; i++) {
	console.log(
		i +
			1 +
			" asisukimas: atsitiktiniaiSkaiciai[i] = " +
			atsitiktiniaiSkaiciai[i]
	);
	if (atsitiktiniaiSkaiciai[i] % 2 !== 0) {
		console.log(atsitiktiniaiSkaiciai[i]);
	}
}

//Atspausdinkite visas masyvo atsitiktiniaiSkaiciai reikšmes
console.log("------------------------");

console.log(
	"Atsitiktiniu skaiciu masyvo ilgis = " + atsitiktiniaiSkaiciai.length
);
for (let i = 0; i < atsitiktiniaiSkaiciai.length; i++) {
	console.log(atsitiktiniaiSkaiciai[i]);
}

console.log(atsitiktiniaiSkaiciai);

//Suskaičiuokite, kiek masyve yra elementų su reikšme: 2
// [0,1,8,1,2,4,2,7, 272]

let countOfTwos = 0;

for (let i = 0; i < atsitiktiniaiSkaiciai.length; i++) {
	if (atsitiktiniaiSkaiciai[i] === 2) countOfTwos++;
}

console.log("masyvas:" + atsitiktiniaiSkaiciai);
console.log("Skaičių, su reikšme 2 masyve yra: " + countOfTwos);

//Suskaičiuokite, kiek masyve yra elementų su reikšme, mažesne nei 5,
let lessThan5 = 0;
for (let i = 0; i < atsitiktiniaiSkaiciai.length; i++) {
	if (atsitiktiniaiSkaiciai[i] < 5) lessThan5++;
}
console.log("masyvas:" + atsitiktiniaiSkaiciai);
console.log("Skaičių, su reikšme <5 masyve yra: " + lessThan5);

//Suskaičiuokite, kiek masyve yra elementų mažesnių nei 3 arba didesnių nei 7

let counter = 0;
for (let i = 0; i < atsitiktiniaiSkaiciai.length; i++) {
	if (atsitiktiniaiSkaiciai[i] < 3 || atsitiktiniaiSkaiciai[i] > 7) counter++;
}

console.log("masyvas:" + atsitiktiniaiSkaiciai);
console.log("Skaičių, su reikšme <3 arba >7 masyve yra: " + counter);

let naujasMasyvas = [8, 7, 3, 46, 9, 7];
//Kai norime pridėti elementus prie masyvo:
naujasMasyvas.push(",");

console.log(naujasMasyvas);

//Pašalinimas elemento iš masyvo galo:
naujasMasyvas.pop();
console.log(naujasMasyvas);

// Elemento šalinimas iš priekio:
naujasMasyvas.shift();
console.log(naujasMasyvas);

// Elemento šalinimas pagal indeksą
// masyvoPavadinimas.splice(nuoKur, kiek)

naujasMasyvas.splice(3, 1);
console.log(naujasMasyvas);

// Elemento šalinimas nuo galo
naujasMasyvas.splice(-1);
console.log(naujasMasyvas);

// Prideti nauja elementa i masyvo prieki

naujasMasyvas.unshift(12);
console.log(naujasMasyvas);

// Masyvo elementu atspausdinimas pasinaudojant delimiteriu

console.log(naujasMasyvas.join(", "));
// console.log("<li>" + naujasMasyvas.join("</li><li>") + "</li>");

//Masyvo apsukimas antraip.
naujasMasyvas.reverse();
console.log(naujasMasyvas);

// Užduotis: išfiltruokite iš masyvo visus skaičius, kurie dalinasi iš 2;
for (let i = 0; i < atsitiktiniaiSkaiciai.length; i++) {
	if (atsitiktiniaiSkaiciai[i] % 2 === 0) {
		atsitiktiniaiSkaiciai.splice(i, 1);
		i--;
	}
}

console.log(atsitiktiniaiSkaiciai.join(", "));

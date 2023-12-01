// 7. Sukurkite keturis kintamuosius kuriems sugeneruokite
// atsitiktines reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra
// nulių, vienetų ir dvejetų.

let kint1 = rand(0, 2),
	kint2 = rand(0, 2),
	kint3 = rand(0, 2),
	kint4 = rand(0, 2);

let count0 = 0,
	count1 = 0,
	count2 = 0;

console.log(kint1, kint2, kint3, kint4);
//Operatorius ++ - prideda 1 prie nurodyto kintamojo
//Operatorius -- - atime 1 is nurodyto kintamojo
if (kint1 === 0) count0++;
else if (kint1 === 1) count1++;
else count2++;

if (kint2 === 0) count0++;
else if (kint2 === 1) count1++;
else count2++;

if (kint3 === 0) count0++;
else if (kint3 === 1) count1++;
else count2++;

if (kint4 === 0) count0++;
else if (kint4 === 1) count1++;
else count2++;

console.log(`Skaičių 0 - ${count0}\t 1 - ${count1}\t 2 - ${count2}`);

//8. Pasinaudokite atsitiktinio skaičiaus generavimo funkcija.
//Sukurkite du kintamuosius ir naudodamiesi funkcija jiems
//priskirkite atsitiktines reikšmes nuo 0 iki 4.
//Didesnę reikšmę padalinkite iš mažesnės.
//Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.

let skaic1 = rand(0, 4),
	skaic2 = rand(0, 4);

console.log(skaic1, skaic2);
if (skaic1 === 0 || skaic2 === 0) console.log(`Dalyba iš nulio nėra galima`);
else if (skaic1 > skaic2) console.log((skaic1 / skaic2).toFixed(2));
else console.log((skaic2 / skaic1).toFixed(2));

//9. Naudokite funkciją ir sukurkite tris kintamuosius kuriems
// priskirkite atsitiktines reikšmes nuo 0 iki 25.
// Raskite ir atspausdinkite vidurinę reikšmę.

let sk1 = rand(0, 25),
	sk2 = rand(0, 25),
	sk3 = rand(0, 25);

console.log(sk1, sk2, sk3);
let didziausias = Math.max(sk1, sk2, sk3),
	maziausias = Math.min(sk1, sk2, sk3);

if (sk1 !== didziausias && sk1 !== maziausias) console.log(sk1);
else if (sk2 !== didziausias && sk2 !== maziausias) console.log(sk2);
else console.log(sk3);

//10. Parašyti kodą, kuris generuotų atsitiktinį stringą iš
// lotyniškų mažųjų raidžių. Stringo ilgis: 3 simboliai.

// Funkcija String.fromCharCode(sk) - sukuria simboli is duoto skaiciaus pagal unikoda

console.log(
	String.fromCharCode(rand(97, 122)) +
		String.fromCharCode(rand(97, 122)) +
		String.fromCharCode(rand(97, 122))
);

function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

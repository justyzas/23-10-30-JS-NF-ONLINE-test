function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 7. Sukurkite keturis kintamuosius kuriems sugeneruokite
// atsitiktines reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra
// nulių, vienetų ir dvejetų.

// Naujo aray sukurimas su pradiniais 4 elementais
// let kint = new Array(4);

//Naujo tuščio array sukurimas
// let kint = [];
//elemento pridejimas pagal indeksa ir reiksme
// kint[0] = rand(0, 2);

//Prideda nauja elementa i gala
// kint.push(10);

//Naujo array sukurimas su pradinemis reikšmėmis
let kint = [rand(0, 2), rand(0, 2), rand(0, 2), rand(0, 2)];

console.log(kint);
console.log(kint[1]); //elemento iš masyvo reikšmės paėmimas pagal indeksą

//.fill(x) užpildo visus masyvo elementus tam tikra reikšme
let count = new Array(3).fill(0);

let kintamasis = [2, 4, 8, 9, 10].fill("stringai");
console.log(kintamasis);

// console.log(kint1, kint2, kint3, kint4);
//Operatorius ++ - prideda 1 prie nurodyto kintamojo
//Operatorius -- - atime 1 is nurodyto kintamojo

if (kint[0] === 0) count[0]++;
else if (kint[0] === 1) count[1]++;
else count[2]++;

if (kint[1] === 0) count[0]++;
else if (kint[1] === 1) count[1]++;
else count[2]++;

if (kint[2] === 0) count[0]++;
else if (kint[2] === 1) count[1]++;
else count[2]++;

if (kint[3] === 0) count[0]++;
else if (kint[3] === 1) count[1]++;
else count[2]++;

console.log(`Skaičių 0 - ${count[0]}\t 1 - ${count[1]}\t 2 - ${count[2]}`);

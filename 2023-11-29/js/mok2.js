function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

let eilerastis = "Ruošėsi ožys ganytis, žolę žlemžti, miške vartytis ožys";
//                0123456789...
console.log(eilerastis);

//Teksto paieška pasinaudojant indexOf() metodu. Jei tekstas nerandamas,
// gražinama reikšmė: -1

//ieskoma nuo pradžios
let ozysPosition = eilerastis.indexOf("ožys");
console.log(ozysPosition);

//ieškoma nuo pabaigos
let lastOzysPosition = eilerastis.lastIndexOf("ožys");
console.log(lastOzysPosition);

//Pasinaudojant gauta teksto pozicija, galime gauti žodį ožys su substring() metodu
let ozysText = eilerastis.substring(ozysPosition, ozysPosition + 4);
console.log(ozysText);

let kitasGyvunas = "avinas";

//Teksto atitikmenu keitimas stringe - visi atitikmenys
let kitasEilerastis = eilerastis.replaceAll("ožys", kitasGyvunas);
console.log(kitasEilerastis);

//Teksto atitikmenu keitimas stringe - pirmas atitikmuo
kitasEilerastis = eilerastis.replace("ožys", "šuo");
console.log(kitasEilerastis);

//Teksto užrašymas didžiosiomis raidėmis
let eilerastisDidziosiomis = eilerastis.toUpperCase();
console.log(eilerastisDidziosiomis);

//Teksto užrašymas mažosiomis raidėmis;
let eilerastisMazosiomis = eilerastis.toLowerCase();
console.log(eilerastisDidziosiomis);

//teksto dalies gavimas su slice metodu:
//pirmasis parametras - pradžios indeksas, antrasis parametras - galinis subteksto indeksas
let text = "Apple, Banana, Kiwi";
//          01234567890123
let part = text.slice(7, 13); //nuo pozicijos iki pozicijos
console.log(part);

part = text.slice(0, -6); //neigiamas antrasis parametras nupjauna galinius simbolius
console.log(part);

part = text.slice(7); //simboliu pasalinimas nuo pradžios iki ....
console.log(part);

part = text.slice(-4); //Simboliu nuo galo gavimas
console.log(part);

//let eilerastis = 'Ruošėsi ožys ganytis, žolę žlemžti, miške vartytis ožys';
//teksto paieska stringe:
if (eilerastis.includes("ganytis")) {
	console.log("kintamajame eilerastis yra zodis: ganytis");
} else {
	console.log("kintamajame eilerastis tokio zodzio nera");
}

//random skaiciaus sugeneravimas... (2 parametrai: nuo, iki  [inclusive])
let skaiciukas = rand(97, 122);
console.log(skaiciukas);

//sugeneruojama raidė pagal unikodą
console.log(String.fromCharCode(skaiciukas));

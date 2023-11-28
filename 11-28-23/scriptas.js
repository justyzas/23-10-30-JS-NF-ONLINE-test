//Čia yra komentaras

//kintamojo deklaravimas su let
//number duomenu tipas
let x = 10;

//informacijos išvedimas į konsolę
console.log(x);


//Aritmetiniai operatoriai: + - * /     % (liekanos operatorius)
x = x % 3;

console.log(x);

//kitas būdas kaip aprašyti aritmetinę operaciją
x += 5;

console.log(x);


//boolean duomenu tipo kintamasis
let loginisPatikrinimas = x < 5;

console.log(loginisPatikrinimas);
console.log(typeof loginisPatikrinimas);

// x += "tekstas";
if (loginisPatikrinimas) {
	//typeof tikrina duomenų tipą;
	console.log(typeof x);
	console.log(x);
} else {
	console.log("x yra mazesnis nei 5");
}

let tekstas = "labass";

// === sulyginimo operatorius, griežtas tikrinimas, tikrina ir duomenų tipą
if (tekstas === "labas") {
	console.log("tekstas yra labas");
}

// !== operatorius nelygu, griežtas tikrinimas, tikrina ir duomenų tipą
if (tekstas !== "labas") {
	console.log("tekstas nera lygus labas");
}

let skaicius = "5";
// == operatorius netikrinantis duomenu tipo, tačiau tikrinantis reikšmę, taipogi yra ir !=
if (skaicius == 5) {
	console.log("skaicius yra 5");
}

// let tiesa = "gal ir gerai";

if (1) {
	// del šios eilutės iškrenta erroras, kadangi kintamasis tiesa nebuvo atrastas mūsų kode.
	console.log(tiesa);
}



//Stringų sujungimas pasinaudojant sudėties operatoriumi
let eilerastis = "lorem ipsum dolor sit amet";
console.log(eilerastis);

eilerastis += " consectetur";
console.log(eilerastis);




// jei prie skaiciaus yra pridedamas tekstas, galutinis kintamojo tipas yra skaicius
skaicius = 5;
skaicius += "";
console.log(typeof skaicius);



// tekstas yra indeksuojamas, iš jo galime pasiimti raides pagal jų vietą tekste
let kintamasis = "CHICKEN";
//                0123456
console.log(kintamasis[0]);
console.log(kintamasis[1]);
console.log(kintamasis[2]);
console.log(kintamasis[3]);
console.log(kintamasis[4]);
console.log(kintamasis[5]);
console.log(kintamasis[6]);



//Teksto dalyba iš skaičiaus nėra galima, todėl gaunama reikšmė yra NaN. Tokia kintamojo reikšmė signalizuoja apie galimą klaidą kode.
kintamasis /= 10;

//NaN kintamasis yra gaunamas tada, kai gauna loginė klaida atliekant aritmetinę operaciją.
console.log(kintamasis)
console.log(typeof kintamasis)


//kai kintamajam reikšmė nebūna priskiriama, jo reikšmė būna undefined;
let y;
console.log(y);

//Stringo ilgis gaunamas pasinaudojant savybe kintamasis.length
kintamasis = "CHICKEN"
console.log(kintamasis.length);





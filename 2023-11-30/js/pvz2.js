// function pakeistiElementoTeksta() {
// 	let vardoIvestis = document.querySelector("#vardas");
// 	let paragrafas = document.querySelector(".isskirtinis-paragrafas");

// 	// elementas.value - iš inputo ištraukia informaciją;
// 	let vardoIvestiesReiksme = vardoIvestis.value; //reiksme is inputo
// 	paragrafas.innerText = `Sveiki prisijunge prie puslapio, ${vardoIvestiesReiksme}`; //reiksme is inputo priskiriama paragrafui
// }

let loginName = "Petras";
let password = "123321";

function login() {
	//HTML elemento priskyrimas kintamajam
	let prisijungimoVardoIvestis = document.querySelector("#prisijungimoVardas");
	let prisijungimoSlaptazodzioIvestis = document.querySelector(
		"#prisijungimoSlaptazodis"
	);

	//Reikšmės ištraukimas iš input elementų
	let prisijungimoVardas = prisijungimoVardoIvestis.value;
	let prisijungimoSlaptazodis = prisijungimoSlaptazodzioIvestis.value;

	//Patikrinti ar įvesti duomenys yra teisingi.
	if (
		loginName === prisijungimoVardas &&
		password === prisijungimoSlaptazodis
	) {
		console.log("Prisijungete sekmingai");
	} else {
		console.log("Prisijungimo duomenys yra blogi");
	}
}

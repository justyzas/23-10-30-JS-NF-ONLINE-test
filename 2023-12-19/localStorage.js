// Norint išsaugoti elementus localStorage:
//1 budas:
localStorage.vardas = "Jonas";
localStorage.pavarde = "Nainys";

//2 budas:
localStorage.setItem("vardas2", "Antanas");
localStorage.setItem("pavarde2", "Stanionis");

//Norint gauti elementus iš localStorage:
//1 budas:
let vardas = localStorage.vardas,
	pavarde = localStorage.pavarde;
//2 budas:
let vardas2 = localStorage.getItem("vardas2"),
	pavarde2 = localStorage.getItem("pavarde2");

//localStorage yra saugomi tik string elementai
// jei norime saugoti ne string elementus:

let arrayOfObjects = [
	{ id: 1, name: vardas, surname: pavarde },
	{ id: 2, name: vardas2, surname: pavarde2 },
];
// issaugojimas:
localStorage.setItem("Objektai", JSON.stringify(arrayOfObjects));

//gavimas:
const arrayFromStorage = JSON.parse(localStorage.getItem("Objektai"));
console.log(arrayFromStorage);

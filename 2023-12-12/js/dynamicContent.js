const people = [];
const possibleNationalities = ["Lithuanian", "Latvian", "German"];
let currentNumeration = 1;

//Elementų apsirašymas
const firstNameInput = document.getElementById("firstNameInput");
const lastNameInput = document.getElementById("lastNameInput");
const ageInput = document.getElementById("ageInput");
const nationalityInput = document.getElementById("nationalityInput");
const removeElementInput = document.querySelector("#number");

//Button elemento gavimas:
const addingButtonElement = document.querySelector("#add-button");
// const addingButtonElement = document.getElementById('add-button');
// const addingButtonElement = document.querySelectorAll('button');

//Validacijos
function validateName(name) {
	// boolean reiksme
	let isValid = true;

	//tikriname ar name reikšmė nėra undefined, null, false, arba tuščia: ""
	if (!name) {
		console.log("!name");
		isValid = false;
	}
	// /[a-z][A-Z]/.test(name) - Regex patikrinimas, tikriname ar praeina testą
	if (/[0-9]/.test(name) || /[!@#$%^&*()?/.,]/.test(name)) {
		console.log("regex");
		isValid = false;
	}
	return isValid;
}
function validateAge(age) {
	let isValid = true;

	if (!age) isValid = false;

	if (isNaN(parseInt(age))) isValid = false;

	if (age < 0 || age > 200) isValid = false;

	if (age % 1 !== 0) isValid = false;

	return isValid;
}
function isValidNationality(nationality) {
	return possibleNationalities.includes(nationality);
}
//reikšmių nusinulinimas
function nullifyInputValues() {
	firstNameInput.value = "";
	lastNameInput.value = "";
	ageInput.value = "";
	nationalityInput.value = "";
}

//pridejimas
addingButtonElement.addEventListener("click", () => {
	const person = {};

	//Objekto person laukui - priskiriama inpute įvesta reikšmė
	person.firstName = firstNameInput.value;
	person.lastName = lastNameInput.value;
	person.age = ageInput.value;
	person.nationality = nationalityInput.value;
	person.number = currentNumeration;

	nullifyInputValues();

	console.log(person);

	// Įvyksta patikrinimas ar įvestos reikšmės yra tuščios
	if (
		!validateName(person.firstName) ||
		!validateName(person.lastName) ||
		!validateAge(person.age) ||
		!isValidNationality(person.nationality)
	) {
		alert("Prašome užpildyti visus laukus");
		return;
	}

	//Naujai sukurtas objektas pridedamas prie masyvo
	people.push(person);
	//Numeracija padideja
	currentNumeration++;
	//Naujai pergeneruojama lentelė pagal visas masyvo reikšmes
	generateTableContent(people);
});

//HTML contento generavimas
function generateTableContent(people) {
	//Dinaminio HTML kodas
	let dynamicHTML = ``;

	for (let person of people) {
		//Įvyksta pridėjimas prie stringo, pridedame reikšmes dinamiškai:
		dynamicHTML += `<tr>
        <td>${person.number}</td>
        <td>${person.firstName}</td>
        <td>${person.lastName}</td>
        <td>${person.age}</td>
        <td>${person.nationality}</td>
        </tr>`;
	}
	//Gaunamas tbody elementas
	const tbody = document.querySelector("table tbody");
	//Jo reikšmė tampa dinaminio html kodas
	tbody.innerHTML = dynamicHTML;
}

const removingButtonElement = document.querySelector("#remove-button");

removingButtonElement.addEventListener("click", () => {
	let number = +removeElementInput.value; //is inputu visada ateina tekstas
	removeElementInput.value = "";

	console.log(number);
	console.log(people[0].number);

	//findIndex() gražina indeksą pagal elemento reikšmę. Jei toks elementas nebuvo rastas, gražina -1
	let foundIndex = people.findIndex((person) => person.number === number);

	if (foundIndex === -1) {
		alert("Žmogaus su tokiu numeriu nėra");
		return;
	}

	people.splice(foundIndex, 1);
	console.log(people);
	generateTableContent(people);
});

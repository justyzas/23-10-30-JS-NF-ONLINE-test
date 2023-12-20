if (!localStorage.getItem("people")) {
	//JSON.stringify paverčia objektini kintamaji i string
	localStorage.setItem("people", JSON.stringify([]));
}
//JSON.parse() paverčia string kintamaji i objekta.
const people = JSON.parse(localStorage.getItem("people"));
generateTableContent(people);

const possibleNationalities = ["Lithuanian", "Latvian", "German"];

if (!localStorage.getItem("currentNumeration"))
	localStorage.setItem("currentNumeration", "1");
let currentNumeration = +localStorage.getItem("currentNumeration");

//Elementų apsirašymas
const firstNameInput = document.getElementById("firstNameInput");
const lastNameInput = document.getElementById("lastNameInput");
const ageInput = document.getElementById("ageInput");
const nationalityInput = document.getElementById("nationalityInput");
//Elementu pasalinimui
const removeElementInput = document.querySelector("#number");
//Elementu atnaujinimui
const idInputUpdate = document.getElementById("idInputUpdate");
const firstNameInputUpdate = document.getElementById("firstNameInputUpdate");
const lastNameInputUpdate = document.getElementById("lastNameInputUpdate");
const ageInputUpdate = document.getElementById("ageInputUpdate");
const nationalityInputUpdate = document.getElementById(
	"nationalityInputUpdate"
);

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

	// Įvyksta patikrinimas ar įvestos reikšmės yra tuščios
	if (
		!validateName(person.firstName) ||
		!validateName(person.lastName) ||
		!validateAge(person.age) ||
		!isValidNationality(person.nationality)
	) {
		alert("Prašome užpildyti visus laukus teisingai!");
		return;
	}

	//Naujai sukurtas objektas pridedamas prie masyvo
	people.push(person);
	//Numeracija padideja
	currentNumeration++;
	localStorage.setItem("currentNumeration", "" + currentNumeration);
	//Naujai pergeneruojama lentelė pagal visas masyvo reikšmes
	generateTableContent(people);
	localStorage.setItem("people", JSON.stringify(people));
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

	// console.log(number);
	// console.log(people[0].number);

	//findIndex() gražina indeksą pagal elemento reikšmę. Jei toks elementas nebuvo rastas, gražina -1
	let foundIndex = people.findIndex((person) => person.number === number);

	if (foundIndex === -1) {
		alert("Žmogaus su tokiu numeriu nėra");
		return;
	}

	people.splice(foundIndex, 1);
	// console.log(people);
	generateTableContent(people);
	localStorage.setItem("people", JSON.stringify(people));
});

document
	.querySelector('[value="Update"]')
	.addEventListener("click", (event) => {
		event.preventDefault();
		const foundIndex = people.findIndex(
			(val) => val.number === +idInputUpdate.value
		);

		if (foundIndex === -1) {
			alert("Žmogaus su tokiu numeriu nėra");
			return;
		}

		const person = people[foundIndex];
		if (
			!validateName(firstNameInputUpdate.value) ||
			!validateName(lastNameInputUpdate.value) ||
			!validateAge(ageInputUpdate.value) ||
			!isValidNationality(nationalityInputUpdate.value)
		) {
			alert("Prašome užpildyti visus laukus teisingai!");
			return;
		}
		people[foundIndex] = {
			number: person.number,
			firstName: firstNameInputUpdate.value,
			lastName: lastNameInputUpdate.value,
			age: ageInputUpdate.value,
			nationality: nationalityInputUpdate.value,
		};
		generateTableContent(people);

		firstNameInputUpdate.value = "";
		lastNameInputUpdate.value = "";
		ageInputUpdate.value = "";
		nationalityInputUpdate.value = "";

		localStorage.setItem("people", JSON.stringify(people));
	});

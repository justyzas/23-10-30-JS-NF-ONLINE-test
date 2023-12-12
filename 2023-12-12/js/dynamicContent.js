const people = [];
let currentNumeration = 1;

//Button elemento gavimas:
const buttonElement = document.querySelector("#add-button");
// const buttonElement = document.getElementById('add-button');
// const buttonElement = document.querySelectorAll('button');

buttonElement.addEventListener("click", () => {
	const person = {};

	//Objekto person laukui - priskiriama inpute įvesta reikšmė
	person.firstName = document.getElementById("firstNameInput").value;
	person.lastName = document.getElementById("lastNameInput").value;
	person.age = document.getElementById("ageInput").value;
	person.nationality = document.getElementById("nationalityInput").value;
	person.number = currentNumeration;

	//Naujai sukurtas objektas pridedamas prie masyvo
	people.push(person);
	//Numeracija padideja
	currentNumeration++;
	//Naujai pergeneruojama lentelė pagal visas masyvo reikšmes
	generateTableContent(people);
});

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

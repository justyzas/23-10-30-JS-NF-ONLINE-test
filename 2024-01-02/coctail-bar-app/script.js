const coctailNameFilterElement = document.querySelector("#coctail-name-filter"),
	categorySelectElement = document.querySelector("#category-select"),
	glassSelectElement = document.querySelector("#glass-type-select"),
	ingredientSelectElement = document.querySelector("#ingredient-select"),
	dynamicDrinksElement = document.querySelector(".drinks");

const categoriesArray = [],
	drinksArray = [];

async function fillSelectElements() {
	await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
		.then((response) => response.json())
		.then((response) => {
			fillCategorySelect(response.drinks, categorySelectElement, "strCategory");
			//Map metodas grazina is objektu masyvo objektu laukus strCategory
			categoriesArray.push(
				...response.drinks.map((value) => value.strCategory)
			);
		})
		.catch((error) => console.log(error));

	await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list")
		.then((response) => response.json())
		.then((response) =>
			fillCategorySelect(response.drinks, glassSelectElement, "strGlass")
		);

	await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
		.then((response) => response.json())
		.then((response) =>
			fillCategorySelect(
				response.drinks,
				ingredientSelectElement,
				"strIngredient1"
			)
		);
}

function fillCategorySelect(properties, selectElement, strFieldName) {
	let dynamicHTML = "";
	for (const property of properties) {
		dynamicHTML += `<option>${property[strFieldName]}</option>`;
		// categoriesArray.push(property.strCategory);
	}
	selectElement.innerHTML = dynamicHTML;
	// console.log(categoriesArray);
}

async function getAllDrinks() {
	// https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink
	for (const category of categoriesArray) {
		let dynamicUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category.replaceAll(
			" ",
			"_"
		)}`;
		const response = await fetch(dynamicUrl);
		const answerFromServer = await response.json();
		for (const drink of answerFromServer.drinks) {
			drinksArray.push(drink);
		}
		// drinksArray.push(answerFromServer);
		// console.log(answerFromServer);
	}
}

function generateDrinksHTML(drinks) {
	let dynamicHTML = "";

	for (let drink of drinks) {
		dynamicHTML += `<div class="drink">
		<img
			src="${drink.strDrinkThumb}"
			alt=""
		/>
		<h2 class="drink-title">${drink.strDrink}</h2>
	</div>`;
	}
	dynamicDrinksElement.innerHTML = dynamicHTML;
}
//1. Selectu užpildymas duomenimis DONE
//2. Gauname visus gerimus is API
//3. Juos atvaizduojame
//4. Atlikti filtracijas kokteiliams
//5. Paieška pagal pavadinimą
//6. Modalinio lango sukurimas
//7. Modalinio lango uždarymas
//8. Atsitiktinio kokteilio gavimas su mygtuku "Man sekasi"
//www.thecocktaildb.com/api/json/v1/1/random.php

async function initialization() {
	// 1. selectu uzpildymas
	await fillSelectElements();
	console.log(categoriesArray);
	await getAllDrinks();
	generateDrinksHTML(drinksArray);
	console.log(drinksArray);
	// 2. dinaminis gerimu atvaizdavimas
}
initialization();

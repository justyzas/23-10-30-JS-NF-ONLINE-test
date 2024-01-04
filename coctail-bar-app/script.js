const coctailNameFilterElement = document.querySelector("#coctail-name-filter"),
	categorySelectElement = document.querySelector("#category-select"),
	glassSelectElement = document.querySelector("#glass-type-select"),
	ingredientSelectElement = document.querySelector("#ingredient-select"),
	dynamicDrinksElement = document.querySelector(".drinks"),
	buttonSearch = document.querySelector("#search");
const modal = document.querySelector(".modal-bg");
const selectValues = {},
	drinksArray = [];

async function fillSelectElements() {
	// const startTime = new Date();
	const allUrls = [
		"https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list",
		"https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list",
		"https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list",
	];

	const allPromises = allUrls.map((url) =>
		fetch(url).then((response) => response.json())
	);
	const allValues = await Promise.all(allPromises);

	const [allCategories, allGlasses, allIngredients] = allValues;

	selectValues.categories = allCategories.drinks.map(
		(categoryObj) => categoryObj.strCategory
	);
	selectValues.glasses = allGlasses.drinks.map((glass) => glass.strGlass);
	selectValues.ingredients = allIngredients.drinks.map(
		(ingredient) => ingredient.strIngredient1
	);

	fillCategorySelect(
		allCategories.drinks,
		categorySelectElement,
		"strCategory"
	);
	fillCategorySelect(allGlasses.drinks, glassSelectElement, "strGlass");
	fillCategorySelect(
		allIngredients.drinks,
		ingredientSelectElement,
		"strIngredient1"
	);
	// await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
	// 	.then((response) => response.json())
	// 	.then((response) => {
	// 		fillCategorySelect(response.drinks, categorySelectElement, "strCategory");
	// 		//Map metodas grazina is objektu masyvo objektu laukus strCategory
	// 		categoriesArray.push(
	// 			...response.drinks.map((value) => value.strCategory)
	// 		);
	// 	})
	// 	.catch((error) => console.log(error));

	// await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list")
	// 	.then((response) => response.json())
	// 	.then((response) =>
	// 		fillCategorySelect(response.drinks, glassSelectElement, "strGlass")
	// 	);

	// await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
	// 	.then((response) => response.json())
	// 	.then((response) =>
	// 		fillCategorySelect(
	// 			response.drinks,
	// 			ingredientSelectElement,
	// 			"strIngredient1"
	// 		)
	// 	);
	// const endDate = new Date();
	// const difference = endDate.getTime() - startTime.getTime();
	// console.log(difference);
}

function fillCategorySelect(properties, selectElement, strFieldName) {
	let dynamicHTML = "";
	for (const property of properties) {
		dynamicHTML += `<option>${property[strFieldName]}</option>`;
		// categoriesArray.push(property.strCategory);
	}
	selectElement.innerHTML += dynamicHTML;
	// console.log(categoriesArray);
}

async function getAllDrinks() {
	const categoryDrinksUrls = [];
	for (const category of selectValues.categories) {
		let dynamicUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category.replaceAll(
			" ",
			"_"
		)}`;
		categoryDrinksUrls.push(dynamicUrl);
	}
	const allPromises = categoryDrinksUrls.map((url) =>
		fetch(url).then((response) => response.json())
	);
	const allValues = await Promise.all(allPromises);
	allValues.forEach((value) => drinksArray.push(...value.drinks));
}

function generateDrinksHTML(drinks) {
	let dynamicHTML = "";

	for (let drink of drinks) {
		dynamicHTML += `<div class="drink" onclick="openModal(${drink.idDrink})">
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
//4. Atlikti filtracijas kokteiliams DONE
//5. Paieška pagal pavadinimą
//6. Modalinio lango sukurimas
//7. Modalinio lango uždarymas
//8. Atsitiktinio kokteilio gavimas su mygtuku "Man sekasi"
//www.thecocktaildb.com/api/json/v1/1/random.php

async function filter() {
	const searchValue = coctailNameFilterElement.value,
		category = categorySelectElement.value,
		glass = glassSelectElement.value,
		ingredient = ingredientSelectElement.value;
	let filteredArray = [...drinksArray];
	console.log(filteredArray);

	if (searchValue) {
		filteredArray = filteredArray.filter((drinkObj) =>
			drinkObj.strDrink.toLowerCase().includes(searchValue.toLowerCase())
		);
	}
	if (category !== "Pasirinkite kategoriją") {
		const promise = await fetch(
			`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category.replaceAll(
				" ",
				"_"
			)}`
		);
		const drinksOfCategory = await promise.json();
		filteredArray = filteredArray.filter((drink) =>
			drinksOfCategory.drinks.some(
				(drinkOfCategory) => drink.idDrink === drinkOfCategory.idDrink
			)
		);
	}
	if (glass !== "Pasirinkite stiklinės tipą") {
		const promise = await fetch(
			`https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${glass.replaceAll(
				" ",
				"_"
			)}`
		);
		const drinksOfGlass = await promise.json();
		filteredArray = filteredArray.filter((drink) =>
			drinksOfGlass.drinks.some(
				(drinkOfGlass) => drink.idDrink === drinkOfGlass.idDrink
			)
		);
	}
	generateDrinksHTML(filteredArray);
}

async function initialization() {
	// 1. selectu uzpildymas
	await fillSelectElements();
	await getAllDrinks();
	generateDrinksHTML(drinksArray);
	console.log(drinksArray);
	buttonSearch.addEventListener("click", filter);
	// 2. dinaminis gerimu atvaizdavimas
}

async function openModal(id) {
	modal.style.display = "flex";
	// console.log()
	const promise = await fetch(
		`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
	);

	const response = await promise.json();
	const drink = response.drinks[0];
	document.querySelector(".modal-img").src = drink.strDrinkThumb;
	document.querySelector("#modal-category").innerText = drink.strCategory;
	document.querySelector("#modal-alcohol").innerText = drink.strAlcoholic;

	console.log(drink);
}
function closeModal() {
	modal.style.display = "none";
}
document.querySelector(".modal-close-button").onclick = closeModal;

initialization();

const coctailNameFilterElement = document.querySelector("#coctail-name-filter"),
	categorySelectElement = document.querySelector("#coctail-name-filter");

fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
	.then((response) => response.json())
	.then((response) => console.log(response));

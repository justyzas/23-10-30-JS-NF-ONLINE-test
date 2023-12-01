function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

let atsitiktinisSkaičius = rand(1, 20),
	spejimuSkaicius = 6;

console.log(atsitiktinisSkaičius);
function guessNumber() {
	let inputElement = document.querySelector("#guess");
	let resultParagraph = document.querySelector("#rez");
	let guessCountElement = document.querySelector("#spejimu-skaicius");

	if (spejimuSkaicius === 0) {
		resultParagraph.innerText = `Spėjimų skaičius baigėsi, bandykite dar kartą perkrovę puslapį`;
		return;
	}

	spejimuSkaicius--;
	guessCountElement.innerText = spejimuSkaicius;
	let inputValue = inputElement.value;

	if (inputValue > atsitiktinisSkaičius) {
		resultParagraph.innerText = `Spėjimas buvo neteisingas, ieškomas skaičius yra mažesnis`;
	} else if (inputValue < atsitiktinisSkaičius) {
		resultParagraph.innerText = `Spėjimas buvo neteisingas, ieškomas skaičius yra didesnis`;
	} else {
		resultParagraph.innerText = `Teisingas spėjimas. Po ${
			6 - spejimuSkaicius
		} bandymų`;
	}
}

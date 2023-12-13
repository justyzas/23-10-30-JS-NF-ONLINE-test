// console.log([document]);

const divas = document.querySelector(".pienas");
divas.className = "trys du pienas";

console.log([divas]);

// const spanas = ;
// console.log([spanas]);

const buttonas = divas.children[2].children[0];

buttonas.innerText = "kitas tekstas";
buttonas.className = "Kita klase";

divas.onclick = () => {
	console.log("Uuuu neliesk");
};

//Galime manipuliuoti elementu norint kad jis butu pasislepes arba atsirastu
// divas.hidden = true;

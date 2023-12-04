let zmones = ["Petras", "Rasa", "Jonas", "Justinas", "Jurate", "Kastytis"];
let i = 0;

while (true) {
	//begalinis ciklas
	console.log(i);
	if (i === 100) break; //break - nutraukia ciklą
	i++;
}

//do while mes naudojame kai norime pirma atlikti operacija, o tik po to patikrinimą
// do{
// i++
// }
// while(i < 10)

let n = 100;
let simbolis = `<black>*</black>`,
	redSimbolis = `<red>*</red>`;
for (let indeksas = 0; indeksas < n; indeksas++) {
	let eilute = "" + redSimbolis + redSimbolis + simbolis;
	eilute += "<br>";
	document.write(eilute);
}

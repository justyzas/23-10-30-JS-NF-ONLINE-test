let tekstas = "Kazys";

//Bandyme patikrinti ar kintamasis tekstas turi skaiciu savyje;

if (/[0-9]/.test(tekstas)) {
	console.log("Tekste yra skaiciu");
} else {
	console.log("Tekste nera skaiciu");
}

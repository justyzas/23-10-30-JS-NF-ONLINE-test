function sum(a, b) {
	return a + b;
}
const subtract = (a, b) => {
	return a - b;
};
//Funkcijos exportavimas
module.exports = { sum: sum, subtract: subtract };

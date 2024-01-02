// Error handlinimas
// const skaicius = 5;

// try {
// 	skaicius++;
// } catch (error) {
// 	console.log(error);
// }

// console.log("tesiamas darbas...");

// Pažadas

// fetch(
// 	"https://www.thecocktaildb.com/apsi/json/v1/1/filter.php?c=Ordinary_Drink"
// )
// 	.then((response) => response.json())
// 	.then((response) => console.log(response))
// 	.catch((error) => console.log(error));

// const pazadas = new Promise((resolve, reject) => {
// 	let isValidUrl = false;
// 	console.log("Prasidejo uzklausa i serveri");
// 	if (isValidUrl)
// 		setTimeout(() => {
// 			resolve("Zinute is serverio");
// 		}, 1000);
// 	else reject(new Error("Neteisingai nurodytas url"));
// 	console.log("Pasibaige uzklausa i serveri");
// })
// 	.then((atsakymas) => console.log(atsakymas))
// 	.catch((klaida) => console.log(klaida));

// console.log("Tesiamas darbas....");
// console.log("Tesiamas darbas....");
// console.log("Tesiamas darbas....");
// console.log("Tesiamas darbas....");
// console.log("Tesiamas darbas....");
// console.log("Tesiamas darbas....");
// console.log("Tesiamas darbas....");
// console.log("Tesiamas darbas....");

function callServerSync() {
	console.log("Uzklausa i serveri prasidejo");
	setTimeout(() => {
		console.log("gauname atsakyma is serverio");
	}, 1000);
	console.log("Užklausa baigta");
}
// callServerSync();

async function callServerAsync() {
	console.log("Uzklausa i serveri prasidejo");
	await new Promise((resolve, reject) =>
		setTimeout(() => {
			console.log("gauname atsakyma is serverio");
			resolve();
		}, 1000)
	);
	console.log("Užklausa baigta");
	return "atsakymas1";
}
// fetch()
callServerAsync().then((atsakymas) => console.log(atsakymas));
//
//

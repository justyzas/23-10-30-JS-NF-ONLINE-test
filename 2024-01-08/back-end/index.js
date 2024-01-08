// //Modulio importavimas
// const sum = require("./math-module").sum;
// //Pavadinimai importuojant gali buti pasirinktiniai
// const atimti = require("./math-module").subtract;

// console.log(sum(4, 5));
// console.log(atimti(5, 4));

//Gaunamas HTTP modulis
// const http = require("http");

// //Sukuriamas serverio kintamasis
// const server = http.createServer((req, res) => {
// 	if (req.url === "/" && req.method === "GET") {

// 		req.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5502");
// 		res.write("Tai yra mano atsakymas");
// 		res.end();
// 	}
// 	if (req.url === "/check") {
// 		res.write("Tai yra mano atsakymas");
// 		res.end();
// 	}
// });

// //Serveris paleidžiamas ant port'o 3000
// server.listen(3000);
// console.log("Server is started on port 3000");

//Gaunama express biblioteka iš node_modules aplanko
const express = require("express");
//Gaunama cors biblioteka iš node_modules aplanko
const cors = require("cors");
//Sukuriamas express serveris
const app = express();
let countOfVisitors = 0;

const todos = [
	{ author: "Justinas", todo: "1. Nueiti i parduotuve" },
	{ author: "Justinas", todo: "2. Nusipirkti alaus" },
	{ author: "Justinas", todo: "3. Gerti alu" },
];

//Naudojami CORS nustatymai, leidžiantys kreiptis į serverį
app.use(cors());

//nustatomas endpointas /, kuris leidžia kreipiantis į adresą http://localhost:3000/ gauti atsakymą "hello world"
app.get("/", (req, res) => {
	res.send("hello world");
});

//req - objektas skirtas request'o informacijai nusakyti
app.get("/test", (req, res) => {
	res.send("Serveris veikia");
});

//res - objektas, skirtas pateikti atsakymus iš serverio
app.get("/count", (req, res) => {
	countOfVisitors++;
	res.send("Stai tiek kartu aplankytas sis serveris: " + countOfVisitors);
});

//res.send() - metodas, leidžiantis išsiūsti atsakymą
app.get("/get-todos", (req, res) => {
	res.send(JSON.stringify(todos));
});

//app.listen() - paleidžiamas serveris nurodant port'ą
app.listen(3000);
console.log("Serveris pasileido portu 3000");

const express = require("express");
const pagesRouter = require("../routes/pages");
const userRouter = require("../routes/user-router");

function config(app) {
	// Nustatymas EJS aktyvavimui
	app.set("view engine", "ejs");
	// Tarpinio routo sukūrimas
	const publicRouter = express.Router();
	//Statinių failų atvaizdavimas per /public aplanką
	publicRouter.use(express.static("public"));
	// Middleware - skirtas gauti JSON formato duomenis iš kliento
	app.use(express.json());

	//Tarpinio routo panaudojimas, pasiekiamas per http://localhost/public endpoint'ą
	app.use("/public", publicRouter);
	//Puslapių rout'ai
	app.use(pagesRouter);

	app.use("/api/user", userRouter);
}

module.exports = { config };

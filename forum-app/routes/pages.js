const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
	//index.ejs failo atvaizdavimas iš views aplanko
	res.render("index", {
		title: "Forumo aplikacija",
		username: "Justelio19",
		list: ["Product1", "Product2", "Milk", "Choclate"],
	});
	//Kartu paduodami ir parametrai EJS failui
});

router.get("/register", (req, res) => {
	res.render("register");
	//Register rout'as skirtas registracijai
});

module.exports = router;

const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
	//index.ejs failo atvaizdavimas iš views aplanko

	const config = {
		title: "Fortra - best forum in the world!",
		username: "Justelio19",
		list: ["Product1", "Product2", "Milk", "Choclate"],
		activeTab: "Home",
		loggedIn: !!req.session.user?.loggedIn,
	};
	res.render("index", config);
	//Kartu paduodami ir parametrai EJS failui
});

router.get("/register", (req, res) => {
	const config = {
		activeTab: "Register",
		title: "Fortra - Registration",
		loggedIn: !!req.session.user?.loggedIn,
	};
	res.render("register", config);
	//Register routas skirtas registracijai
});
router.get("/login", (req, res) => {
	const config = {
		activeTab: "Login",
		title: "Fortra - Authentication",
		loggedIn: !!req.session.user?.loggedIn,
	};
	res.render("login", config);
	//Login routas skirtas prisijungimui
});
router.get("/my-profile", async (req, res) => {
	const config = {
		activeTab: "Profile",
		title: "Fortra - My profile",
		profilePhoto: "http://localhost:3000/public/images/img-1706560009732.jpg",
		loggedIn: !!req.session.user?.loggedIn,
	};
	res.render("profile", config);
});

module.exports = router;

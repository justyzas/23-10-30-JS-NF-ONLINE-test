const express = require("express");
const router = express.Router();
const User = require("../model/UserModel");

router.post("/register", async (req, res) => {
	const registrationData = req.body;
	console.log(registrationData);
	res.send("Veikia");
	// const user = new User({ username: "", password: "" });
	// user.save();
});

router.get("/", (req, res) => {
	res.send("Veikia routas");
});

module.exports = router;

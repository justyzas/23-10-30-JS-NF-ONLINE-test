const express = require("express");
const router = express.Router();
const UserModel = require("../models/user");

router.post("/register", async (req, res) => {
	const { username, email } = req.body;

	if (!username || !email) {
		return res.status(400).json({ message: "ne visi duomenys buvo pateikti" });
	}

	const newUser = new UserModel({
		username,
		email,
	});
	await newUser.save();
	res.status(200).json(newUser);
});

router.get("/users", async (req, res) => {
	const users = await UserModel.find({ _id: "65b216cca717b4fd1fa3f480" });

	res.status(200).json(users);
});

module.exports = router;

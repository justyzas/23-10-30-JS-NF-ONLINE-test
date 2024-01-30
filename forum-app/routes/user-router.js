const express = require("express");
const router = express.Router();
const UserModel = require("../models/user");
const upload = require("../config/multer").upload;
const security = require("../utils/security");

router.post("/register", upload.single("img"), async (req, res) => {
	// console.log(req.body);
	const { username, password, birthDate, email } = req.body;
	const fileName = require("../config/multer").lastFileName;

	if (!username || !email || !password || !birthDate) {
		return res.status(400).json({ message: "ne visi duomenys buvo pateikti" });
	}

	const salt = security.generateSalt();
	const hashedPassword = security.hashPassword(password, salt);

	const newUser = new UserModel({
		username,
		email,
		salt,
		password: hashedPassword,
		birthDate,
		profilePicture: `http://localhost:3000/public/images/${fileName}`,
	});
	await newUser.save();
	// Nustatoma sesija vartotojui - po registracijos iš kart įvykdomas prijungimas prie sistemos
	req.session.user = {
		id: newUser._id,
		loggedIn: true,
	};
	res.status(200).json({ message: "labas" });
});

router.get("/users", async (req, res) => {
	if (!req.session.user.admin)
		return res.status(403).json({ message: "neturite tam teisiu" });
	console.log(req.session.user);
	const users = await UserModel.find({});

	res.status(200).json(users);
});

router.post("/login", async (req, res) => {
	const { loginName, password } = req.body;

	const existingUser = loginName.includes("@")
		? await UserModel.findOne({ email: loginName })
		: await UserModel.findOne({ username: loginName });
	if (!existingUser) return res.redirect("/login");

	if (
		!security.isValidCredentials(
			password,
			existingUser.salt,
			existingUser.password
		)
	) {
		return res.redirect("/login");
	}
	req.session.user = {
		id: existingUser._id,
		loggedIn: true,
		admin: existingUser.admin,
	};
	res.redirect("/");
});

router.get("/logout", async (req, res) => {
	if (!req.session.user.loggedIn) {
		res.redirect("/");
	} else {
		req.session.destroy((err) => {
			if (err) {
				return res.redirect("/");
			} else {
				res.clearCookie("connect.sid");
				return res.redirect("/login");
			}
		});
	}
});

router.get("/check-session", async (req, res) => {
	res.json({ message: "will implement in future" });
});

module.exports = router;

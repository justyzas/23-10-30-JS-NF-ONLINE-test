const express = require("express");
const router = express.Router();
const UserModel = require("../models/user");
const upload = require("../config/multer").upload;
const security = require("../utils/security");
const validate = require("../utils/validation/userValidation");

router.post("/register", upload.single("img"), async (req, res) => {
	try {
		const { username, password, birthDate, email } = req.body;
		const fileName = require("../config/multer").lastFileName;

		if (!username || !email || !password || !birthDate) {
			return res.redirect("/register?error=Ne visi duomenys buvo užpildyti");
		}
		const validationResult = validate(req.body);
		if (validationResult !== "success") {
			return res.redirect("/register?error=" + validationResult);
		}

		//Patikrinti ar vartotojo username bei email laukeliai yra unikalus

		// await UserModel.find({_id: id}) gaunamas masyvas
		// await UserModel.findOne({_id: id}) gaunamas vienas irasas

		// vartotojo paieška pagal elektroninį paštą arba vartotojo vardą

		// 2. budas
		//$or
		const existingUser = await UserModel.findOne({
			$or: [{ email }, { username }],
		});

		if (existingUser) {
			if (username === existingUser.username) {
				return res.redirect("/register?error=Username already exists");
			}
			if (email === existingUser.email) {
				return res.redirect("/register?error=Email already exists");
			}
		}

		const salt = security.generateSalt();
		const hashedPassword = security.hashPassword(password, salt);

		const newUserObj = {
			username,
			email,
			salt,
			password: hashedPassword,
			birthDate,
			profilePicture: `/public/images/${fileName}`,
		};

		const newUser = new UserModel(newUserObj);
		await newUser.save();
		// Nustatoma sesija vartotojui - po registracijos iš kart įvykdomas prijungimas prie sistemos
		req.session.user = {
			id: newUser._id,
			loggedIn: true,
		};
		res.redirect("/?message=registracija buvo sėkminga");
	} catch (err) {
		res.redirect("/register?error=Registracija nepavyko dėl blogų duomenų");
	}
});

router.get("/users", async (req, res) => {
	if (!req.session.user?.admin)
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
				console.log("klaida ištrinant sesiją");
				console.error(err);
				return res.redirect("/");
			} else {
				console.log("sėkmingas atjungimo atvejis");
				res.clearCookie("connect.sid");
				return res.redirect("/login");
			}
		});
	}
});

// router.get("/check-session", async (req, res) => {
// 	res.json({ message: "will implement in future" });
// });

module.exports = router;

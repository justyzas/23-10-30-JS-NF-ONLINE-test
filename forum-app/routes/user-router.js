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
		res.redirect("/?message=Registracija buvo sėkminga");
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
				console.error(err);
				return res.redirect("/");
			} else {
				res.clearCookie("connect.sid");
				return res.redirect("/login");
			}
		});
	}
});
router.get("/like/:profileId", async (req, res) => {
	if (!req.session.user?.loggedIn) {
		return res.status(403).json({ message: "You should log in!" });
	}

	const user = await UserModel.findOne({ _id: req.params.profileId });
	if (user.profileLikedUsers.includes(req.session.user.id)) {
		return res.status(403).json({ message: "You already liked this user!" });
	}

	if (user.profileDislikedUsers.includes(req.session.user.id)) {
		user.profileDislikedUsers.splice(
			user.profileDislikedUsers.findIndex(
				(dislikedUser) => req.session.user.id === dislikedUser
			),
			1
		);
		user.dislikes--;
	}

	console.log(req.session.user.id);
	user.profileLikedUsers.push(req.session.user.id);
	user.likes++;
	await user.save();
	res.status(200).json({ message: "Successfully liked profile" });
});

router.get("/dislike/:profileId", async (req, res) => {
	if (!req.session.user?.loggedIn) {
		return res.status(403).json({ message: "You should log in!" });
	}

	const user = await UserModel.findOne({ _id: req.params.profileId });

	if (user.profileDislikedUsers.includes(req.session.user.id)) {
		return res.status(403).json({ message: "You already disliked this user!" });
	}

	if (user.profileLikedUsers.includes(req.session.user.id)) {
		user.profileLikedUsers.splice(
			user.profileLikedUsers.findIndex(
				(dislikedUser) => req.session.user.id === dislikedUser
			),
			1
		);
		user.likes--;
	}
	user.profileDislikedUsers.push(req.session.user.id);
	user.dislikes++;
	await user.save();
	res.status(200).json({ message: "Successfully dislike profile" });
});

// router.get("/check-session", async (req, res) => {
// 	res.json({ message: "will implement in future" });
// });

module.exports = router;

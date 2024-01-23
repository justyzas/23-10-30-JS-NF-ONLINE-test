const express = require("express");
const data = require("../data.json");
const router = express.Router();
const FileIO = require("../utils/fileOperations");
const dataFile = new FileIO("../data.json");

router.post("/register", async (req, res) => {
	// console.log(req.body);
	try {
		const username = req.body.username;
		const email = req.body.email;
		const password = req.body.password;
		data.users.push({
			id: data.userId,
			username: username,
			email: email,
			password: password,
		});
		data.userId++;
		await dataFile.writeFile(data);
		req.session.loggedIn = true;
		req.session.username = username;
		req.session.userId = data.users[data.users.length - 1].id;
		res.send("Registracija yra sėkminga");
	} catch (err) {
		console.error(err);
		res.send("Netinkami duomenys");
	}
});
//Get all users in database
router.get("/", (req, res) => {
	res.send(data.users);
});
//Get specific user data by id
router.get("/:id", (req, res) => {
	//Jei yra gaunami duomenys, juos reikėtų validuoti.
	console.log(isNaN(+req.params.id));
	if (isNaN(+req.params.id)) {
		return res.send("ID privalo buti skaicius");
	}

	const selectedUser = data.users.find((user) => user.id === +req.params.id);
	if (!selectedUser) {
		return res.send("Tokio vartotojo nėra"); //404, 500 Internal server error
	} else {
		return res.send(selectedUser);
	}
});
//Existing user login endpoint
router.post("/login", (req, res) => {
	//1. Validuojame, ar req.body turi tokius laukus username, password
	const username = req.body.username, //John
		password = req.body.password; // ledinukas -> a65f41as65f1as65f1as6f1as6f51as6f15as6f51a6sf1

	if (!username)
		return res
			.status(400)
			.json({ message: "Prašome teisingai įvesti vartotojo vardą" });
	if (!password)
		return res.status(400).json({ message: "Prašome įvesti slaptažodį" });
	//2. Patikrinti, ar vartotojas su tokiu username egzistuoja,
	const selectedUser = data.users.find(
		(user) => user.username.toLowerCase() === username.toLowerCase() //slug
	); //undefined - jei nerandamas
	//a. jei ne, tada siusti "Vartotojas neegzistuoja"
	if (!selectedUser)
		return res.status(404).json({ message: "Toks vartotojas neegzistuoja" });

	//b. toliau daromas tikrinimas
	//3. Ar slaptazodis atitinka.
	//Jei atitinka - tada siunciame atsakyma is serverio.
	//"Sekmingai prisijungete prie sistemos"
	if (selectedUser.password === password) {
		req.session.loggedIn = true;
		req.session.username = selectedUser.username;
		req.session.userId = selectedUser.id;
		res.status(200).json({ url: "http://localhost/todos.html" });
	}
});
//Session check
router.get("/session-check", (req, res) => {
	if (req.session.loggedIn)
		return res
			.status(200)
			.json({ message: "valid session", sessionValid: true });
	else {
		return res
			.status(400)
			.json({ message: "session invalid", sessionValid: false });
	}
});

module.exports = router;

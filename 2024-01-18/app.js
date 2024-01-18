// File System
const fileSystem = require("fs");
const data = require("./data.json");
const express = require("express");
const session = require("express-session");

const app = express();

app.use(
	session({
		secret: "secret-banana",
		saveUninitialized: true,
		resave: false,
		cookie: { httpOnly: true },
	})
);

async function readFile() {
	// Sinchronine versija failo perskaitymo - vengti
	// const fileData = fileSystem.readFileSync("./data.json", "utf-8");

	//Failo perskaitymas asinchroniniu budu
	const fileData = await fileSystem.promises.readFile("data.json", (err) => {
		if (err) console.log(err);
	});

	console.log(JSON.parse(fileData));
}
async function writeFile(obj) {
	// 	// Sinchronine funkcija - vengti
	// 	// fileSystem.writeFileSync("./data.json", JSON.stringify(obj));

	// 	// Asinchronine irasymo funkcija - naudoti :)
	await fileSystem.writeFile(
		"./data.json",
		JSON.stringify(obj),
		"utf-8",
		(err) => {
			if (err) console.log(err);
		}
	);
}
readFile();

app.get("/", async (req, res) => {
	console.log("Patinka");
	data.countOfVisitors++;
	await writeFile(data);
	req.session.userId = 1;

	res.status(200).json({
		message: `It's a very good day, you are a ${data.countOfVisitors}-th visitor`,
	});
});

app.get("/whats-my-id", (req, res) => {
	// console.log(req.session.userId);
	//req.session - yra objektas, skirtas saugoti vartotojo kintamiesiems
	if (req.session.userId) {
		console.log(req.session.userId);
		return res.status(200).json({ userId: req.session.userId });
	} else {
		req.session.userId = 1;
		return res.status(200).json({ userId: req.session.userId });
	}
});

app.get("/users", (req, res) => {
	console.log(req.session.userId);

	res.status(200).json({ message: "zinute" });
});
app.listen(3000, () => {
	console.log("Serveris pasileido, apsilankykite http://localhost:3000/");
});

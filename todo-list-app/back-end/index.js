const express = require("express");
const sessions = require("express-session");
const cors = require("cors");
const fs = require("fs");
const data = require("./data.json");
const FileStore = require("session-file-store")(sessions);

const server = express();

server.use(
	cors({
		origin: "http://127.0.0.1:5500",
		credentials: true,
	})
);
server.use(express.json());
//Sessions Middleware
server.use(
	sessions({
		store: new FileStore({
			path: "./sessions",
			retries: 3,
			ttl: 3600,
		}),
		secret: "Banana bike",
		resave: false,
		saveUninitialized: true,
		cookie: { secure: false, expires: 3600000 },
	})
);
// const users = [];
// const todos = [{ id: 1, todo: "Nueiti i darba" }];

async function writeFile(obj) {
	await fs.writeFile("./data.json", JSON.stringify(obj), (err) => {
		if (err) console.error(err);
	});
}

//Endpoint check
// server.get("/user/:id", (req, res) => {
// 	console.log("Method: " + req.method);
// 	console.log("URL: " + req.originalUrl);
// 	console.log("Body " + req.body);
// 	console.log("Parameters " + req.params.id);
// 	console.log("Query " + JSON.stringify(req.query));
// 	console.log("Buvo kreiptasi i serveri");
// 	// res.send("Labas pasauli!");
// });
//New user registration
server.post("/user/register", async (req, res) => {
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
		await writeFile(data);
		req.session.loggedIn = true;
		req.session.username = username;
		req.session.userId = data.users[data.users.length - 1].id;
		res.send("Registracija yra sėkminga");
	} catch (err) {
		res.send("Netinkami duomenys");
	}
});
//Get all users in database
server.get("/users", (req, res) => {
	res.send(data.users);
});
//Get specific user data by id
server.get("/users/:id", (req, res) => {
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
server.post("/user/login", (req, res) => {
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
server.get("/user/session-check", (req, res) => {
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

//Naujo todo pridejimas
server.post("/todos", (req, res) => {
	// Naujo todo pridejimas

	const { todo, done } = req.body;
	const username = req.session.username;
	if (!username) return res.status(400).json({ message: "Esate neprisijungę" });
	if (!todo) return res.status(400).json({ message: "Blogai ivestas todo" });

	//validacija
	const selectedUser = data.users.find(
		(user) => user.username.toLowerCase() === username.toLowerCase()
	);
	// if (!selectedUser)
	// 	return res.status(404).json({ message: "Vartotojas nerastas" });

	const newTodo = { id: data.todosId, username, todo, done: !!done };
	data.todos.push(newTodo);
	data.todosId++;
	writeFile(data);
	res
		.status(201)
		.json({ message: "Naujas todo buvo sėkmingai pridėtas", newTodo });
});
//Visu todo'su gavimas
server.get("/todos", (req, res) => {
	res.status(200).json(data.todos);
});
//Konkretaus todo pagal id gavimas
server.get("/todos/:id", (req, res) => {
	const id = +req.params.id;
	if (isNaN(id))
		return res.status(400).json({ message: "Įveskite tinkamą id" });
	const existingTodo = data.todos.find((todo) => todo.id === id);
	if (!existingTodo) res.status(404).json({ message: "Įrašas buvo nerastas" });
	//404 - irasas nerastas
	else res.status(200).json(existingTodo); //200 - sėkmingas atsakymas
});
//Todo atnaujinimas
server.put("/todos/:id", (req, res) => {
	const id = +req.params.id;
	if (isNaN(id))
		return res.status(400).json({ message: "Įveskite tinkamą id" });
	const { username, todo, done } = req.body;
	console.log(username, todo);
	const existingUser = data.users.find(
		(user) => user.username.toLowerCase() === username.toLowerCase()
	);
	if (!existingUser)
		return res.status(404).json({ message: "Toks vartotojas neegzistuoja" });

	const existingTodo = data.todos.findIndex(
		(currentTodo) => currentTodo.id === id
	);

	data.todos[existingTodo] = {
		...data.todos[existingTodo],
		todo: todo || data.todos[existingTodo].todo,
		username,
		done,
	};
	writeFile(data);
	if (!existingTodo)
		res.status(404).json({ message: "Todo irašas buvo nerastas" });
	else res.status(201).json(data.todos[existingTodo]);
});
//Todo istrynimas pagal id
server.delete("/todos/:id", (req, res) => {
	const id = +req.params.id;
	if (isNaN(id))
		return res.status(400).json({ message: "Įveskite tinkamą id" });
	const existingTodoIndex = data.todos.findIndex(
		(currentTodo) => currentTodo.id === id
	);
	if (existingTodoIndex === -1) {
		return res.status(404).json({ message: "Šalinamas įrašas nerastas" });
	} else {
		data.todos.splice(existingTodoIndex, 1);
		writeFile(data);
		return res.status(204).json({ message: "Įrašas sėkmingai ištrintas" });
	}
});

server.listen(3000, () => {
	console.log("Aplikacija pasileido, jos adresas: http://localhost:3000/");
});

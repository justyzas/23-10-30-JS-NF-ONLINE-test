const express = require("express");
const cors = require("cors");

const server = express();

server.use(cors());
server.use(express.json());

const users = [];
const todos = [{ id: 1, todo: "Nueiti i darba" }];

server.get("/user/:id", (req, res) => {
	console.log("Method: " + req.method);
	console.log("URL: " + req.originalUrl);
	console.log("Body " + req.body);
	console.log("Parameters " + req.params.id);
	console.log("Query " + JSON.stringify(req.query));
	console.log("Buvo kreiptasi i serveri");
	// res.send("Labas pasauli!");
});

// server.get('/register')

server.post("/user/register", (req, res) => {
	// console.log(req.body);
	try {
		const username = req.body.username;
		const email = req.body.email;
		const password = req.body.password;
		users.push({
			id: users.length + 1,
			username: username,
			email: email,
			password: password,
		});
		res.send("Atsakymas is serverio");
	} catch (err) {
		res.send("Netinkami duomenys");
	}
});

server.get("/users", (req, res) => {
	res.send(users);
});

server.get("/users/:id", (req, res) => {
	//Jei yra gaunami duomenys, juos reikėtų validuoti.
	console.log(isNaN(+req.params.id));
	if (isNaN(+req.params.id)) {
		res.send("ID privalo buti skaicius");
	}

	const selectedUser = users.find((user) => user.id === +req.params.id);
	if (!selectedUser) {
		res.send("Tokio vartotojo nėra"); //404, 500 Internal server error
	} else {
		res.send(selectedUser);
	}
});

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
	const selectedUser = users.find(
		(user) => user.username.toLowerCase() === username.toLowerCase()
	); //undefined - jei nerandamas
	//a. jei ne, tada siusti "Vartotojas neegzistuoja"
	if (!selectedUser)
		return res.status(404).json({ message: "Toks vartotojas neegzistuoja" });

	//b. toliau daromas tikrinimas
	//3. Ar slaptazodis atitinka.
	//Jei atitinka - tada siunciame atsakyma is serverio.
	//"Sekmingai prisijungete prie sistemos"
	if (selectedUser.password === password)
		// res.send("Sekmingai prisijungete prie sistemos");
		res.status(200).json({ url: "http://127.0.0.1:5500/front-end/todos.html" });
});

// CRUD operacijas TODOs'ams;

server.post("/todos", (req, res) => {
	const { username, todo } = req.body;

	if (!username)
		return res.status(400).json({ message: "Blogai ivestas username" });
	if (!todo) return res.status(400).json({ message: "Blogai ivestas todo" });
	//validacija
	const selectedUser = users.find(
		(user) => user.username.toLowerCase() === username.toLowerCase()
	);
	if (!selectedUser)
		return res.status(404).json({ message: "Vartotojas nerastas" });

	const newTodo = { id: todos.length + 1, username, todo };
	todos.push(newTodo);
	res
		.status(201)
		.json({ message: "Naujas todo buvo sėkmingai pridėtas", newTodo });
});

server.get("/todos", (req, res) => {
	res.status(200).json(todos);
});

server.get("/todos/:id", (req, res) => {
	const id = +req.params.id;
	if (isNaN(id))
		return res.status(400).json({ message: "Įveskite tinkamą id" });
	const existingTodo = todos.find((todo) => todo.id === id);
	if (!existingTodo) res.status(404).json({ message: "Įrašas buvo nerastas" });
	//404 - irasas nerastas
	else res.status(200).json(existingTodo); //200 - sėkmingas atsakymas
});

server.put("/todos/:id", (req, res) => {
	const id = +req.params.id;
	if (isNaN(id))
		return res.status(400).json({ message: "Įveskite tinkamą id" });
	const { username, todo } = req.body;
	console.log(username, todo);
	const existingUser = users.find(
		(user) => user.username.toLowerCase() === username.toLowerCase()
	);
	if (!existingUser)
		return res.status(404).json({ message: "Toks vartotojas neegzistuoja" });

	const existingTodo = todos.findIndex((currentTodo) => currentTodo.id === id);
	todos[existingTodo] = { ...todos[existingTodo], todo, username };
	if (!existingTodo)
		res.status(404).json({ message: "Todo irašas buvo nerastas" });
	else res.status(201).json(todos[existingTodo]);
});

server.delete("/todos/:id", (req, res) => {
	const id = +req.params.id;
	if (isNaN(id))
		return res.status(400).json({ message: "Įveskite tinkamą id" });
	const existingTodoIndex = todos.findIndex(
		(currentTodo) => currentTodo.id === id
	);
	if (existingTodoIndex === -1) {
		return res.status(404).json({ message: "Šalinamas įrašas nerastas" });
	} else {
		todos.splice(existingTodoIndex, 1);
		return res.status(204).json({ message: "Įrašas sėkmingai ištrintas" });
	}
});

server.listen(3000, () => {
	console.log("Aplikacija pasileido, jos adresas: http://localhost:3000/");
});

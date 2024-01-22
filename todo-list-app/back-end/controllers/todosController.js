const express = require("express");
const data = require("../data.json");
const router = express.Router();
const { writeFile } = require("../utils/fileOperations");

//Naujo todo pridejimas
router.post("/", (req, res) => {
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
router.get("/", (req, res) => {
	res.status(200).json(data.todos);
});
//Konkretaus todo pagal id gavimas
router.get("/:id", (req, res) => {
	const id = +req.params.id;
	if (isNaN(id))
		return res.status(400).json({ message: "Įveskite tinkamą id" });
	const existingTodo = data.todos.find((todo) => todo.id === id);
	if (!existingTodo) res.status(404).json({ message: "Įrašas buvo nerastas" });
	//404 - irasas nerastas
	else res.status(200).json(existingTodo); //200 - sėkmingas atsakymas
});
//Todo atnaujinimas
router.put("/:id", (req, res) => {
	const id = +req.params.id;
	if (isNaN(id))
		return res.status(400).json({ message: "Įveskite tinkamą id" });
	const { todo, done } = req.body;
	const username = req.session.username;

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
		// todo,
		done,
	};
	writeFile(data);
	if (!existingTodo)
		res.status(404).json({ message: "Todo irašas buvo nerastas" });
	else res.status(201).json(data.todos[existingTodo]);
});
//Todo istrynimas pagal id
router.delete("/:id", (req, res) => {
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
		return res.status(200).json({ message: "Įrašas sėkmingai ištrintas" });
	}
});

module.exports = router;

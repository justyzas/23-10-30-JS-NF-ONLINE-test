const moveToDoneBtn = document.querySelector("#moveToDone"),
	moveToTodoBtn = document.querySelector("#moveToTodo"),
	deleteTodoBtn = document.querySelector("#deleteTodoBtn");

// const doneListElement = document.querySelector(".done-list"),
// todoListElement = document.querySelector(".all-todos");
const moveTodoToDone = () => {
	//     .parentElement
	const allTodosCheckedInputs = document.querySelectorAll(
		".all-todos .todo input:checked"
	);

	for (const inputElement of allTodosCheckedInputs) {
		inputElement.checked = false;
		doneListElement.append(inputElement.parentElement);
	}

	console.log(allTodosCheckedInputs);
};

const moveTodoToTodoList = () => {
	const allTodosCheckedInputs = document.querySelectorAll(
		".done-list .todo input:checked"
	);
	for (const inputElement of allTodosCheckedInputs) {
		inputElement.checked = false;
		todoListElement.append(inputElement.parentElement);
	}
};

const deleteTodoElement = () => {
	const allTodosCheckedInputs = document.querySelectorAll(
		".todo input:checked"
	);
	for (const inputElement of allTodosCheckedInputs) {
		inputElement.parentElement.remove();
	}
};

moveToDoneBtn.onclick = moveTodoToDone;
moveToTodoBtn.onclick = moveTodoToTodoList;
deleteTodoBtn.onclick = deleteTodoElement;

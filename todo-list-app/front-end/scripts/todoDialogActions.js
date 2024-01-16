const texts = {
	moveElementText: {
		todo: "Done",
		done: "Move back",
	},
};

const doneListElement = document.querySelector(".done-list"),
	todoListElement = document.querySelector(".all-todos"),
	todoInputElement = document.querySelector("#todo-input"),
	todoSubmitBtn = document.querySelector("#todo-submit");

function moveFromTodoToDone(event) {
	console.log("Trys");
	const targetId = event.target.attributes.todomove.value;
	const moveTarget = document.querySelector(`[todo-id="${targetId}"]`);
	doneListElement.appendChild(moveTarget);
	event.target.innerText = texts.moveElementText.done;
	event.target.onclick = moveFromDoneToTodo;
}

function moveFromDoneToTodo(event) {
	const targetId = event.target.attributes.todomove.value;
	const moveTarget = document.querySelector(`[todo-id="${targetId}"]`);
	todoListElement.appendChild(moveTarget);
	event.target.innerText = texts.moveElementText.todo;
	event.target.onclick = moveFromTodoToDone;
}

function updateTodo(event) {
	const targetId = event.target.attributes.todoupdate.value;
	const updateTarget = document.querySelector(
		`[todo-id="${targetId}"] .todo-text`
	);
	updateTarget.innerText = prompt(
		"Iveskite nauja todo reiksme:",
		updateTarget.innerText
	);
	//Siusti uzklausa i serveri
}

function addClickListenersToTodoDialogButtons(a) {
	const todoMoveButtonsInTodoList = document.querySelectorAll(
			".all-todos .todo-move"
		),
		todoMoveButtonsInDoneList = document.querySelectorAll(".done-list"),
		todoDeleteButtons = document.querySelectorAll(".todo-delete"),
		todoUpdateButtons = document.querySelectorAll(".todo-update");
	console.log(a);
	console.log(todoMoveButtonsInDoneList[0].children);
	for (const updateTodoButton of todoUpdateButtons) {
		updateTodoButton.onclick = updateTodo;
	}

	for (const todoMoveButton of todoMoveButtonsInTodoList) {
		todoMoveButton.onclick = moveFromTodoToDone;
		console.log("vienas");
	}
	for (const todoMoveButton of todoMoveButtonsInDoneList) {
		todoMoveButton.onclick = moveFromDoneToTodo;
		console.log("du");
	}

	for (const deleteButton of todoDeleteButtons) {
		deleteButton.onclick = (event) => {
			const targetId = event.target.attributes.tododelete.value;
			const deleteTarget = document.querySelector(`[todo-id="${targetId}"]`);
			deleteTarget.remove();
		};
	}
}
// addClickListenersToTodoDialogButtons();
async function addNewTodo() {
	//atsakymas is serverio
	const inputValue = todoInputElement.value;
	todoInputElement.value = "";

	const response = await postNewTodo({
		username: "Justelio19",
		todo: inputValue,
	});
	const newTodoObject = response.newTodo;

	const newTodo = `<div
	class="todo justify-content-between draggable"
	draggable="true"
	todo-id="${newTodoObject.id}"
>
	<input
		type="checkbox"
		name="todo"
	/>
	<span class="todo-text">${newTodoObject.todo}</span>
	<div class="dropdown">
		<i
			class="bi bi-three-dots"
			data-bs-toggle="dropdown"
			aria-expanded="false"
		></i>
		<ul class="dropdown-menu bg-dark">
			<li>
				<a
					class="dropdown-item text-white todo-move"
					href="#"
					todomove="${newTodoObject.id}"
					>Done</a
				>
			</li>
			<li>
				<a
					class="dropdown-item text-white todo-delete"
					href="#"
					tododelete="${newTodoObject.id}"
					>Delete</a
				>
			</li>
			<li>
				<a
					class="dropdown-item text-white todo-update"
					href="#"
					todoupdate="${newTodoObject.id}"
					>Update</a
				>
			</li>
		</ul>
	</div>
</div>`;
	todoListElement.innerHTML += newTodo;
	addDragFunctionalityToAllElements();
	addClickListenersToTodoDialogButtons();
}

function showAllTodos(todos) {
	let innerHtml = "";

	for (const todo of todos) {
		innerHtml += `<div
		class="todo justify-content-between draggable"
		draggable="true"
		todo-id="${todo.id}"
	>
		<input
			type="checkbox"
			name="todo"
		/>
		<span class="todo-text">${todo.todo}</span>
		<div class="dropdown">
			<i
				class="bi bi-three-dots"
				data-bs-toggle="dropdown"
				aria-expanded="false"
			></i>
			<ul class="dropdown-menu bg-dark">
				<li>
					<a
						class="dropdown-item text-white todo-move"
						href="#"
						todomove="${todo.id}"
						>Done</a
					>
				</li>
				<li>
					<a
						class="dropdown-item text-white todo-delete"
						href="#"
						tododelete="${todo.id}"
						>Delete</a
					>
				</li>
				<li>
					<a
						class="dropdown-item text-white todo-update"
						href="#"
						todoupdate="${todo.id}"
						>Update</a
					>
				</li>
			</ul>
		</div>
	</div>`;
	}
	addDragFunctionalityToAllElements();
	addClickListenersToTodoDialogButtons("show all todos");
	todoListElement.innerHTML = innerHtml;
}

function showAllDones(todos) {
	let innerHtml = "";

	for (const todo of todos) {
		innerHtml += `<div
		class="todo justify-content-between draggable"
		draggable="true"
		todo-id="${todo.id}"
	>
		<input
			type="checkbox"
			name="todo"
		/>
		<span class="todo-text">${todo.todo}</span>
		<div class="dropdown">
			<i
				class="bi bi-three-dots"
				data-bs-toggle="dropdown"
				aria-expanded="false"
			></i>
			<ul class="dropdown-menu bg-dark">
				<li>
					<a
						class="dropdown-item text-white todo-move"
						href="#"
						todomove="${todo.id}"
						>Move back</a
					>
				</li>
				<li>
					<a
						class="dropdown-item text-white todo-delete"
						href="#"
						tododelete="${todo.id}"
						>Delete</a
					>
				</li>
				<li>
					<a
						class="dropdown-item text-white todo-update"
						href="#"
						todoupdate="${todo.id}"
						>Update</a
					>
				</li>
			</ul>
		</div>
	</div>`;
	}
	addDragFunctionalityToAllElements();
	addClickListenersToTodoDialogButtons("show all dones");
	doneListElement.innerHTML = innerHtml;
}

getAllTodos();
todoSubmitBtn.onclick = addNewTodo;
todoInputElement.onkeydown = (event) => {
	if (event.key === "Enter") addNewTodo();
};

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

function addClickListenersToTodoDialogButtons() {
	const todoMoveButtons = document.querySelectorAll(".todo-move"),
		todoDeleteButtons = document.querySelectorAll(".todo-delete"),
		todoUpdateButtons = document.querySelectorAll(".todo-update");
	for (const updateTodoButton of todoUpdateButtons) {
		updateTodoButton.onclick = updateTodo;
	}

	for (const todoMoveButton of todoMoveButtons) {
		todoMoveButton.onclick = moveFromTodoToDone;
	}

	for (const deleteButton of todoDeleteButtons) {
		deleteButton.onclick = (event) => {
			const targetId = event.target.attributes.tododelete.value;
			const deleteTarget = document.querySelector(`[todo-id="${targetId}"]`);
			deleteTarget.remove();
		};
	}
}
addClickListenersToTodoDialogButtons();
function addNewTodo() {
	//atsakymas is serverio
	const inputValue = todoInputElement.value;
	todoInputElement.value = "";
	const newTodo = `<div
	class="todo justify-content-between draggable"
	draggable="true"
	todo-id="2"
>
	<input
		type="checkbox"
		name="todo"
	/>
	<span class="todo-text">${inputValue}</span>
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
					todomove="2"
					>Done</a
				>
			</li>
			<li>
				<a
					class="dropdown-item text-white todo-delete"
					href="#"
					tododelete="2"
					>Delete</a
				>
			</li>
			<li>
				<a
					class="dropdown-item text-white todo-update"
					href="#"
					todoupdate="2"
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

todoSubmitBtn.onclick = addNewTodo;
todoInputElement.onkeydown = (event) => {
	if (event.key === "Enter") addNewTodo();
};

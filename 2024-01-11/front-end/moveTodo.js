const texts = {
	moveElementText: {
		todo: "Done",
		done: "Move back",
	},
};

const todoMoveButtons = document.querySelectorAll(".todo-move"),
	todoDeleteButtons = document.querySelectorAll(".todo-delete");

const doneListElement = document.querySelector(".done-list"),
	todoListElement = document.querySelector(".all-todos");

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

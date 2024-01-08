async function callToServer() {
	try {
		const promise = await fetch("http://localhost:3000/get-todos");
		const response = await promise.text();
		console.log(JSON.parse(response));
		showTodos(JSON.parse(response));
	} catch (err) {
		console.log(err);
	}
}

function showTodos(todos) {
	const unorderedListElement = document.querySelector(".todos");

	let dynamicHTML = "";

	for (let todo of todos) {
		dynamicHTML += `<li>${todo.author} ${todo.todo}</li>`;
	}
	unorderedListElement.innerHTML = dynamicHTML;
}
callToServer();

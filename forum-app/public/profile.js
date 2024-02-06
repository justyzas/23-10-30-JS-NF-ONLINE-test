document.querySelectorAll(".thumbs-up").forEach((element) => {
	element.onmouseenter = (event) => {
		event.target.classList.toggle("bi-hand-thumbs-up");
		event.target.classList.toggle("bi-hand-thumbs-up-fill");
	};
	element.onmouseleave = (event) => {
		event.target.classList.toggle("bi-hand-thumbs-up-fill");
		event.target.classList.toggle("bi-hand-thumbs-up");
	};
});

document.querySelectorAll(".thumbs-down").forEach((element) => {
	element.onmouseenter = (event) => {
		event.target.classList.toggle("bi-hand-thumbs-down");
		event.target.classList.toggle("bi-hand-thumbs-down-fill");
	};
	element.onmouseleave = (event) => {
		event.target.classList.toggle("bi-hand-thumbs-down-fill");
		event.target.classList.toggle("bi-hand-thumbs-down");
	};
});

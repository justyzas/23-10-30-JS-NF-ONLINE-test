const header = document.querySelector(".header");

window.addEventListener("scroll", function () {
	console.log("a");
	if (window.scrollY > 100) {
		header.style.backgroundColor = "#004442e2";
	} else {
		header.style.backgroundColor = "#004442";
	}
});
function destroyEvent(event) {
	event.target.remove();
}

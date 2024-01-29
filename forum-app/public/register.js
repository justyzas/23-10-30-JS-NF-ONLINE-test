const usernameInput = document.querySelector("#username"),
	birthDateInput = document.querySelector("#birth-date"),
	passwordInput = document.querySelector("#password"),
	emailInput = document.querySelector("#email"),
	profilePhoto = document.querySelector("#profile-photo"),
	registerButton = document.querySelector(".register-button");

registerButton.onclick = async () => {
	// console.log("veikiu!");
	const data = new FormData();
	data.append("username", usernameInput.value);
	data.append("birthDate", birthDateInput.value);
	data.append("password", passwordInput.value);
	data.append("email", emailInput.value);
	data.append("img", profilePhoto.files[0]);

	const promise = await fetch("http://localhost:3000/api/user/register", {
		method: "post",
		body: data,
	});

	const response = await promise.json();
	console.log(response);
};

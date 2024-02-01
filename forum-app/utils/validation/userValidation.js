function validate(user) {
	const usernameValidation = validateUsername(user.username);
	// {isValid: false, message: " bad username...."}
	// {isValid: true, message: "success"}
	if (!usernameValidation.isValid) return usernameValidation.message;

	return "success";
}

function validateUsername(username) {
	if (username.length < 5) {
		return {
			isValid: false,
			message: "Username must be longer than 5 symbols",
		};
	} else if (username.length > 70) {
		return {
			isValid: false,
			message: "Username must be shorter than 70 symbols",
		};
	}

	return { isValid: true, message: "Success" };
}

module.exports = validate;

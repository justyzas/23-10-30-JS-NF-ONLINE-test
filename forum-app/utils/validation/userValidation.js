function validate(user) {
	// switch (user) {
	// 	case user.username.length < 5:
	// 		return "Username must be longer than 5 symbols";
	// 	case user.username.length > 70:
	// 		return "Username must be shorter than 70 symbols";
	// 	default:
	// 		return "success";
	// }

	if (user.username.length < 5) {
		return "Username must be longer than 5 symbols";
	} else if (user.username.length > 70) {
		return "Username must be shorter than 70 symbols";
	}

	// if(user.password.length < 8)

	return "success";
}

module.exports = validate;

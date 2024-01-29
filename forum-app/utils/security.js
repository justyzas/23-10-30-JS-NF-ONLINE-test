const crypto = require("crypto");

// Hash password - užkoduos duotą slaptažodį kartu su salt laukeliu
function hashPassword(password, salt) {
	const hash = crypto.createHmac("sha256", salt);
	hash.update(password);
	return hash.digest("hex");
}

// Salt - papildomas prierašas prie slaptažodžio;
function generateSalt() {
	return crypto.randomBytes(16).toString("hex");
}

function isValidCredentials(providedPassword, salt, hashPassword) {
	return hashPassword(providedPassword, salt) === hashPassword;
}

module.exports = {
	hashPassword,
	generateSalt,
	isValidCredentials,
};

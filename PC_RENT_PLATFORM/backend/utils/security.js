const crypto = require("crypto");

function generateSalt() {
	return crypto.randomBytes(16).toString("hex");
}
function hashPassword(password, salt) {
	const hash = crypto.createHmac("sha256", salt);
	hash.update(password);
	return hash.digest("hex");
}

function isValidPassword(providedPassword, salt, hashedPassword) {
	return hashPassword(providedPassword, salt) === hashedPassword;
}
module.exports = {
	generateSalt,
	hashPassword,
	isValidPassword,
};

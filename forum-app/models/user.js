const mongoose = require("mongoose");

const schema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		minLength: 5,
		maxLength: 70,
	},
	email: {
		type: String,
		required: true,
		minLength: 8,
		maxLength: 120,
	},
	password: {
		type: String,
		required: true,
	},
	salt: String,
	birthDate: {
		type: String,
		required: true,
	},
	profilePicture: {
		type: String,
		required: true,
	},
	postsCount: {
		type: Number,
		default: 0,
	},
	commentsCount: {
		type: Number,
		default: 0,
	},
	likes: {
		type: Number,
		default: 0,
	},
	dislikes: {
		type: Number,
		default: 0,
	},
	admin: {
		type: Boolean,
		default: false,
		required: true,
	},
	registrationDate: {
		type: Date,
		default: new Date(),
		required: true,
	},
});

const model = mongoose.model("user", schema);

module.exports = model;

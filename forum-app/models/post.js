const mongoose = require("mongoose");

const schema = new mongoose.Schema({
	title: {
		type: String,
		minLength: 8,
		maxLength: 70,
		required: true,
	},
	content: {
		type: String,
		minLength: 20,
		required: true,
	},
	anonymousViewsCount: {
		type: Number,
		default: 0,
		required: true,
	},
	viewsCount: {
		type: Number,
		default: 0,
	},
	commentsCount: {
		type: Number,
		default: 0,
	},
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "user",
		required: true,
	},
	likesCount: {
		type: Number,
		default: 0,
	},
	dislikesCount: {
		type: Number,
		default: 0,
	},
	creationDate: {
		type: Number,
		default: new Date(),
	},
	tags: {
		type: Array,
		default: [],
	},
});

const Model = mongoose.model("post", schema);

module.exports = Model;

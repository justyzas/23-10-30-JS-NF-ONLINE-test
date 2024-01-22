const express = require("express");
const sessions = require("express-session");
const cors = require("cors");
const FileStore = require("session-file-store")(sessions);

function initialize(server) {
	server.use(
		cors({
			origin: "http://127.0.0.1:5500",
			credentials: true,
		})
	);
	server.use(express.json());
	//Sessions Middleware
	server.use(
		sessions({
			store: new FileStore({
				path: "./sessions",
				retries: 3,
				ttl: 3600,
			}),
			secret: "Banana bike",
			resave: false,
			saveUninitialized: true,
			cookie: { secure: false, expires: 3600000 },
		})
	);
}
module.exports = initialize;

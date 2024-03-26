const session = require("express-session");
const mysqlSession = require("express-mysql-session");
const mysql = require("mysql2");
const MysqlStore = mysqlSession(session);
require("dotenv").config();
module.exports = (app) => {
	const dbConfig = {
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
	};
	const pool = mysql.createPool(dbConfig);
	const sessionStore = new MysqlStore({}, pool);

	app.use(
		session({
			secret: "banana",
			resave: false,
			saveUninitialized: false,
			store: sessionStore,
			cookie: {
				expires: 1000 * 60 * 60 * 24,
			},
		})
	);
};

const session = require("express-session");
const mysqlSession = require("express-mysql-session");
const mysql = require("mysql2");
const MysqlStore = mysqlSession(session);
module.exports = (app) => {
	const dbConfig = {
		host: "localhost",
		user: "root",
		password: "1234",
		database: "pc_rent_platform",
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
				expires: 1000 * 60 * 60,
			},
		})
	);
};

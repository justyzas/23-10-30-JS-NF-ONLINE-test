const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const pagesRouter = require("../routes/pages");
const userRouter = require("../routes/user-router");
const postRouter = require("../routes/posts-router");
const commentRouter = require("../routes/comments-router");
const bodyParser = require("body-parser");

function config(app) {
	// Nustatymas EJS aktyvavimui
	app.set("view engine", "ejs");
	// Tarpinio routo sukūrimas
	const publicRouter = express.Router();
	//Statinių failų atvaizdavimas per /public aplanką
	publicRouter.use(express.static("public"));
	// Middleware - skirtas gauti JSON formato duomenis iš kliento
	app.use(express.json());
	app.use(bodyParser.urlencoded());
	// Sesijų nustatymai
	app.use(
		session({
			secret: process.env.SESSIONS_SECRET,
			resave: false,
			saveUninitialized: false,
			// Sesiju saugojimui duomenų bazėje
			store: MongoStore.create({
				mongoUrl: require("./db-connect").mongoUrl, //mongodb+srv://__DB_USER:__DB_PASSWORD@__DB_HOST/__DB_NAME
				collectionName: "sessions",
			}),
			cookie: {
				maxAge: 1000 * 60 * 60 * 24 * 7,
			},
		})
	);

	//Tarpinio routo panaudojimas, pasiekiamas per http://localhost/public endpoint'ą
	app.use("/public", publicRouter);
	app.use("/tinymce", express.static("node_modules/tinymce"));
	//Puslapių rout'ai
	app.use(pagesRouter);

	app.use("/api/user", userRouter);
	app.use("/api/post", postRouter);
	app.use("/api/comment", commentRouter);
}

module.exports = { config };

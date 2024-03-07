const express = require("express");
const app = express();
const mainRouter = require("./MainRouter");

app.use(express.json());

app.use("/api", mainRouter);

app.listen(3000, () => {
	console.log("Serveris paleistas, jo adresas: http://localhost:3000/");
});

const express = require("express");
const app = express();
const mainRouter = require("./MainRouter");
const setupSessions = require("./utils/sessionsSetup");

app.use(express.json());
setupSessions(app);
app.use("/api", mainRouter);

app.listen(3000, () => {
	console.log("Serveris paleistas, jo adresas: http://localhost:3000/");
});

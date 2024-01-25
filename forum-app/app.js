const express = require("express");
const app = express();

//DB konfiguracija
require("./config/db-connect").config();
// Express middleware konfiguracija
require("./config/express-middlewares").config(app);

app.listen(3000, () => {
	console.log("Serveris paleistas, jo adresas: http://localhost:3000/");
});

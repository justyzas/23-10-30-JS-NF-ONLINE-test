const mongoose = require("mongoose");

// Laikinai sukonfiguruoja .env kintamuosius, kad jie butu matomi musu kurimo aplinkose
require("dotenv").config();

const mongoUrl = process.env.MONGO_CONNECTION.replace(
	"__DB_USER",
	process.env.DB_USER
)
	.replace("__DB_PASSWORD", process.env.DB_PASSWORD)
	.replace("__DB_HOST", process.env.DB_HOST)
	.replace("__DB_NAME", process.env.DB_NAME);

function config() {
	// process.env - laiko visus aplinkos kintamuosius

	// console.log(process.env.A_KINTAMASIS);

	//Prisijungimas prie duomenų bazės pasinaudojant URL
	mongoose.connect(mongoUrl);
	const db = mongoose.connection;

	//DB listeneriai, kurie nusako ar prie DB  buvo prisijungta sėkmingai ar ne
	db.on("error", (error) => {
		//ERROR listeneris
		console.error("erroras: " + error);
	});
	db.once("open", () => {
		//PRISIJUNGIMO listeneris
		console.info("Prie duomenų bazės buvo sėkmingai prisijungta");
	});
}

module.exports = { config, mongoUrl };

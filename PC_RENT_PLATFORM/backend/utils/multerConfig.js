const multer = require("multer");

const storage = multer.diskStorage({
	destination: "uploads",
	filename: (req, file, cb) => {
		const currentTimestamp = Date.now(); //gaunamas unikalus skaicius pagal dabartini laika
		const localName = currentTimestamp + "-" + file.originalname; // sugeneruojamas unikalus failo pavadinimas pagal dabartini laika bei originaus failo pavadinimą
		cb(null, localName); //Pavadinimas nustatomas, bei failas išsaugomas
	},
});

const upload = multer({ storage });

module.exports = upload;

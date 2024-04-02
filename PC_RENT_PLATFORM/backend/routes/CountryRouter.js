const express = require("express");
const router = express.Router();
// const CountryModel = require("../model/CountryModel");
const db = require("../models");
const CountryModel = db.Country;

router.post("/", async (req, res) => {
	try {
		const { country, countryShort } = req.body;
		console.log(req.body);
		// const newCountry = new CountryModel({ country, countryShort });
		// await newCountry.save();
		const newCountry = await CountryModel.create({
			countryName: country,
			countryNameShort: countryShort,
		});
		res.send(newCountry.toJSON());
	} catch (err) {
		console.error(err);
		if (err.original.errno === 1062)
			res
				.status(400)
				.send(
					"Iterpimas negalimas, Įrašas yra pasikartojantis - duomenų bazė to neleidžia"
				);
		else {
			res.status(500).send("Serverio klaida");
		}
	}
});
router.get("/:id", async (req, res) => {
	// const country = await CountryModel.findById(req.params.id);
	const country = await CountryModel.findOne({
		where: {
			id: req.params.id,
		},
	});
	res.send(country.toJSON());
});

router.get("/", async (req, res) => {
	// const allCountriesWithoutId = await CountryModel.findAll();
	// const allCountries = allCountriesWithoutId.map((value) =>
	// 	value.getInstance()
	// );
	const allCountries = await CountryModel.findAll();
	res.send(allCountries);
});
router.delete("/:id", async (req, res) => {
	try {
		// const result = await CountryModel.deleteById(req.params.id);
		const result = await CountryModel.destroy({
			where: {
				id: req.params.id,
			},
		});
		if (result === 0) throw new Error("not found");
		res.status(200).json({ result });
	} catch (err) {
		if (err.message === "not found")
			res
				.status(404)
				.send("Irasas su id = " + req.params.id + " buvo nerastas");
		else res.status(500).send("Server error!");
	}
});

router.put("/:id", async (req, res) => {
	const { country, countryShort } = req.body;
	// await User.update(
	// 	{ password: "strongerPassword123" },
	// 	{
	// 		where: {
	// 			password: "1234",
	// 		},
	// 	}
	// );
	// const countryObj = await CountryModel.findById(req.params.id);

	// if (country) countryObj.country = country;
	// if (countryShort) countryObj.countryShort = countryShort;
	// await countryObj.update();
	// res.send(countryObj.getInstance());
	try {
		const countryObj = {};
		if (country) countryObj.countryName = country;
		if (countryShort) countryObj.countryNameShort = countryShort;
		const result = await CountryModel.update(countryObj, {
			where: {
				id: req.params.id,
			},
		});
		res
			.status(200)
			.json({ status: result === 1, message: "Irasas atnaujintas sekmingai" });
	} catch (err) {
		res.status(500).json({ message: "Internal server error" });
	}
});
module.exports = router;

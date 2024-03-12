const express = require("express");
const router = express.Router();
const CountryModel = require("../model/CountryModel");

router.post("/", async (req, res) => {
	try {
		const { country, countryShort } = req.body;
		const newCountry = new CountryModel({ country, countryShort });
		await newCountry.save();
		res.send(newCountry.getInstance());
	} catch (err) {
		console.error(err);
		if (err.errno === 1062)
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
	const country = await CountryModel.findById(req.params.id);
	res.send(country.getInstance());
});

router.get("/", async (req, res) => {
	const allCountriesWithoutId = await CountryModel.findAll();
	const allCountries = allCountriesWithoutId.map((value) =>
		value.getInstance()
	);
	res.send(allCountries);
});
router.delete("/:id", async (req, res) => {
	try {
		const result = await CountryModel.deleteById(req.params.id);
		res.send("Irasas buvo sekmingai pasalintas");
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
	const countryObj = await CountryModel.findById(req.params.id);
	if (country) countryObj.country = country;
	if (countryShort) countryObj.countryShort = countryShort;
	await countryObj.update();
	res.send(countryObj.getInstance());
});
module.exports = router;

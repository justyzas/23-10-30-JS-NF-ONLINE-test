const executeQuery = require("../mysql");
module.exports = class Country {
	#id; // Groteles pries laukelio pavadinima reiskia kad laukelis bus privatus ir neredaguotinas iš klasės išorės
	country;
	countryShort;

	constructor({ country, countryShort }, id = null) {
		this.#id = id;
		this.country = country;
		this.countryShort = countryShort;
	}

	async update() {
		const result = await executeQuery(
			`UPDATE countries SET salies_pavadinimas = ?, salies_trumpinys = ? WHERE id = ?`,
			[this.country, this.countryShort, this.#id]
		);
		return result;
	}
	get id() {
		return this.#id;
	}
	async save() {
		const result = await executeQuery(
			`INSERT INTO countries (salies_pavadinimas, salies_trumpinys) VALUES (?, ?);`,
			[this.country, this.countryShort]
		);
		this.#id = result[0].insertId;
	}
	static async findAll() {
		// const result = await executeQuery(`SELECT * FROM countries`)[0]
		const results = await executeQuery(`SELECT * FROM countries`);
		const result = results[0].map(
			(countryObj) =>
				new Country(
					{
						country: countryObj.salies_pavadinimas,
						countryShort: countryObj.salies_trumpinys,
					},
					countryObj.id
				)
		);

		return result;
	}
	static async findById(id) {
		const results = await executeQuery(`SELECT * FROM countries WHERE id=?`, [
			id,
		]);
		const result = results[0][0];
		return new Country(
			{
				country: result.salies_pavadinimas,
				countryShort: result.salies_trumpinys,
			},
			result.id
		);
	}
	static async deleteById(id) {
		const result = await executeQuery(`DELETE FROM countries WHERE id=?;`, [
			id,
		]);
		if (result[0].affectedRows === 0) throw new Error("not found");
		return result;
	}
	getInstance() {
		return { ...this, id: this.#id };
	}
};

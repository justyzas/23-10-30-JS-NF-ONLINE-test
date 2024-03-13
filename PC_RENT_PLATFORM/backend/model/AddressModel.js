const executeQuery = require("../mysql");

module.exports = class Address {
	#id;
	country;
	county;
	municipality;
	zipCode;
	city;
	street;
	streetNumber;
	apartmentNumber;

	constructor(
		{
			country,
			county,
			municipality,
			zipCode,
			city,
			street,
			streetNumber,
			apartmentNumber,
		},
		id = null
	) {
		this.#id = id;
		this.country = country;
		this.county = county;
		this.municipality = municipality;
		this.zipCode = zipCode;
		this.city = city;
		this.street = street;
		this.streetNumber = streetNumber;
		this.apartmentNumber = apartmentNumber;
	}

	async update() {
		const result = await executeQuery(
			`UPDATE addresses SET country = ?, county = ?, municipality = ?, zip_code = ?, city = ?, street = ?, street_number = ?, apartment_number = ? WHERE id = ?`,
			[
				this.country,
				this.county,
				this.municipality,
				this.zipCode,
				this.city,
				this.street,
				this.streetNumber,
				this.apartmentNumber,
				this.#id,
			]
		);
		return result;
	}

	get id() {
		return this.#id;
	}

	async save() {
		const result = await executeQuery(
			`INSERT INTO addresses (country, county, municipality, zip_code, city, street, street_number, apartment_number) VALUES (?, ?, ?, ?, ?, ?, ?, ?);`,
			[
				this.country,
				this.county,
				this.municipality,
				this.zipCode,
				this.city,
				this.street,
				this.streetNumber,
				this.apartmentNumber,
			]
		);
		console.log(result);
		this.#id = result[0].insertId;
		return result;
	}

	static async findAll() {
		const results = await executeQuery(`SELECT * FROM addresses`);
		return results.map(
			(addressObj) =>
				new Address(
					{
						country: addressObj.country,
						county: addressObj.county,
						municipality: addressObj.municipality,
						zipCode: addressObj.zip_code,
						city: addressObj.city,
						street: addressObj.street,
						streetNumber: addressObj.street_number,
						apartmentNumber: addressObj.apartment_number,
					},
					addressObj.id
				)
		);
	}

	static async findById(id) {
		const results = await executeQuery(`SELECT * FROM addresses WHERE id = ?`, [
			id,
		]);
		const address = results[0];
		return new Address(
			{
				country: address.country,
				county: address.county,
				municipality: address.municipality,
				zipCode: address.zip_code,
				city: address.city,
				street: address.street,
				streetNumber: address.street_number,
				apartmentNumber: address.apartment_number,
			},
			address.id
		);
	}

	static async deleteById(id) {
		const result = await executeQuery(`DELETE FROM addresses WHERE id = ?;`, [
			id,
		]);
		if (result.affectedRows === 0) throw new Error("Address not found");
		return result;
	}

	getInstance() {
		return { ...this, id: this.#id };
	}
};

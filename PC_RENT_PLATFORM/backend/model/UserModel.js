const executeQuery = require("../mysql");

module.exports = class User {
	#id;
	username;
	passEncoded;
	salt;
	email;
	birthDate;
	phone;
	addressId;

	constructor(
		{ username, passEncoded, email, birthDate, phone, addressId, salt },
		id = null
	) {
		this.#id = id;
		this.username = username;
		this.passEncoded = passEncoded;
		this.email = email;
		this.birthDate = birthDate;
		this.phone = phone;
		this.addressId = addressId;
		this.salt = salt;
	}

	async update() {
		const result = await executeQuery(
			`UPDATE users SET username = ?, pass_encoded = ?, email = ?, birth_date = ?, phone = ?, address_id = ?, salt = ? WHERE id = ?`,
			[
				this.username,
				this.passEncoded,
				this.email,
				this.birthDate,
				this.phone,
				this.addressId,
				this.salt,
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
			`INSERT INTO users (username, pass_encoded, email, birth_date, phone, address_id, salt) VALUES (?, ?, ?, ?, ?, ?, ?);`,
			[
				this.username,
				this.passEncoded,
				this.email,
				this.birthDate,
				this.phone,
				this.addressId,
				this.salt,
			]
		);
		this.#id = result[0].insertId;
		return result;
	}

	static async findByUsername(username) {
		const results = await executeQuery(
			`SELECT * FROM users WHERE username = ?`,
			[username]
		);
		if (results[0].length === 0) return null;
		const user = results[0][0];
		return new User(
			{
				username: user.username,
				passEncoded: user.pass_encoded,
				email: user.email,
				birthDate: user.birth_date,
				phone: user.phone,
				addressId: user.address_id,
				salt: user.salt,
			},
			user.id
		);
	}

	static async findAll() {
		const results = await executeQuery(`SELECT * FROM users`);
		return results.map(
			(userObj) =>
				new User(
					{
						username: userObj.username,
						passEncoded: userObj.pass_encoded,
						email: userObj.email,
						birthDate: userObj.birth_date,
						phone: userObj.phone,
						addressId: userObj.address_id,
						salt: userObj.salt,
					},
					userObj.id
				)
		);
	}

	static async findById(id) {
		const results = await executeQuery(`SELECT * FROM users WHERE id = ?`, [
			id,
		]);
		const user = results[0];
		return new User(
			{
				username: user.username,
				passEncoded: user.pass_encoded,
				email: user.email,
				birthDate: user.birth_date,
				phone: user.phone,
				addressId: user.address_id,
				salt: user.salt,
			},
			user.id
		);
	}

	static async deleteById(id) {
		const result = await executeQuery(`DELETE FROM users WHERE id = ?;`, [id]);
		if (result.affectedRows === 0) throw new Error("User not found");
		return result;
	}

	getInstance() {
		return { ...this, id: this.#id };
	}
};

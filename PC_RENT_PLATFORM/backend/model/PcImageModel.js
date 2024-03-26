const executeQuery = require("../mysql");
class PcImage {
	#id;
	uri; // /server/uploads/Image.jpg
	pcId;
	constructor({ uri, pcId }, id = null) {
		this.uri = uri;
		this.pcId = pcId;

		this.#id = id;
	}

	async save() {
		const result = await executeQuery(
			"INSERT INTO `pc_images` (uri, pc_id) VALUES(?, ?);",
			[this.uri, this.pcId]
		);
		console.log(result);
		this.#id = result[0].insertId;
	}

	static async getByPcId(pcId) {
		const result = await executeQuery(
			"SELECT * FROM `pc_images` WHERE pc_id=?",
			[pcId]
		);
		const resultArr = result[0];
		return resultArr.map(
			(row) => new PcImage({ uri: row.uri, pcId: row.pc_id }, row.id)
		);
	}

	getInstance() {
		return { ...this, id: this.#id };
	}
}

module.exports = PcImage;

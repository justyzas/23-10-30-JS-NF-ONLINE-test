const executeQuery = require("../mysql");
const joinPcs = require("../utils/pcMapper");
module.exports = class PC {
	#id; // Private field for PC ID
	ownerId;
	cpu;
	gpu;
	ramType;
	ramSpeed;
	ramAmount;
	pcType;
	pcName;

	constructor(
		{ ownerId, cpu, gpu, ramType, ramSpeed, ramAmount, pcType, pcName },
		id = null
	) {
		this.#id = id;
		this.ownerId = ownerId;
		this.cpu = cpu;
		this.gpu = gpu;
		this.ramType = ramType;
		this.ramSpeed = ramSpeed;
		this.ramAmount = ramAmount;
		this.pcType = pcType;
		this.pcName = pcName;
	}

	async update() {
		const result = await executeQuery(
			`UPDATE pc SET owner_id = ?, cpu = ?, gpu = ?, ram_type = ?, ram_speed = ?, ram_amount = ?, pc_type = ?, pc_name = ? WHERE id = ?`,
			[
				this.ownerId,
				this.cpu,
				this.gpu,
				this.ramType,
				this.ramSpeed,
				this.ramAmount,
				this.pcType,
				this.pcName,
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
			`INSERT INTO pc (owner_id, cpu, gpu, ram_type, ram_speed, ram_amount, pc_type, pc_name) VALUES (?, ?, ?, ?, ?, ?, ?, ?);`,
			[
				this.ownerId,
				this.cpu,
				this.gpu,
				this.ramType,
				this.ramSpeed,
				this.ramAmount,
				this.pcType,
				this.pcName,
			]
		);
		this.#id = result[0].insertId;
		return result;
	}

	static async findAll() {
		const results = await executeQuery(`SELECT * FROM pc`);
		return results[0].map(
			(pcObj) =>
				new PC(
					{
						ownerId: pcObj.owner_id,
						cpu: pcObj.cpu,
						gpu: pcObj.gpu,
						ramType: pcObj.ram_type,
						ramSpeed: pcObj.ram_speed,
						ramAmount: pcObj.ram_amount,
						pcType: pcObj.pc_type,
						pcName: pcObj.pc_name,
					},
					pcObj.id
				)
		);
	}
	static async findAllWithImages() {
		const [results] = await executeQuery(
			"SELECT pc.*, pc_images.id AS image_id, pc_images.uri AS image_uri FROM pc LEFT JOIN pc_images ON pc.id = pc_images.pc_id"
		);
		const allPcsWithoutImages = results.map(
			(row) =>
				new PC(
					{
						ownerId: row.owner_id,
						cpu: row.cpu,
						gpu: row.gpu,
						ramType: row.ram_type,
						ramSpeed: row.ram_speed,
						ramAmount: row.ram_amount,
						pcType: row.pc_type,
						pcName: row.pc_name,
					},
					row.id
				)
		);
		return joinPcs(allPcsWithoutImages, results);
	}
	static async findAllByOwnerId(ownerId) {}
	static async findAllByOwnerIdWithImages(ownerId) {
		const [results] = await executeQuery(
			"SELECT pc.*, pc_images.id AS image_id, pc_images.uri AS image_uri FROM pc LEFT JOIN pc_images ON pc.id = pc_images.pc_id WHERE owner_id = ?",
			[ownerId]
		);
		const allPcsWithoutImages = results.map(
			(row) =>
				new PC(
					{
						ownerId: row.owner_id,
						cpu: row.cpu,
						gpu: row.gpu,
						ramType: row.ram_type,
						ramSpeed: row.ram_speed,
						ramAmount: row.ram_amount,
						pcType: row.pc_type,
						pcName: row.pc_name,
					},
					row.id
				)
		);
		return joinPcs(allPcsWithoutImages, results);
	}
	static async findByIdWithImage(id) {}

	static async findById(id) {
		const results = await executeQuery(`SELECT * FROM pc WHERE id = ?`, [id]);
		const pc = results[0][0];
		return new PC(
			{
				ownerId: pc.owner_id,
				cpu: pc.cpu,
				gpu: pc.gpu,
				ramType: pc.ram_type,
				ramSpeed: pc.ram_speed,
				ramAmount: pc.ram_amount,
				pcType: pc.pc_type,
				pcName: pc.pc_name,
			},
			pc.id
		);
	}

	static async deleteById(id) {
		const result = await executeQuery(`DELETE FROM pc WHERE id = ?;`, [id]);
		if (result.affectedRows === 0) throw new Error("PC not found");
		return result;
	}

	getInstance() {
		return { ...this, id: this.#id };
	}
};

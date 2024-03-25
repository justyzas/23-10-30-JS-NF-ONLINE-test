const executeQuery = require("../mysql");

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
	static async findByOwnerId(id) {}
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

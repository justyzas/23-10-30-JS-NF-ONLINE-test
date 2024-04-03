const db = require(".");
module.exports = (sequelize, DataTypes) => {
	const Pc = sequelize.define("Pc", {
		cpu: {
			type: DataTypes.STRING,
		},
		gpu: {
			type: DataTypes.STRING,
		},
		ramType: {
			type: DataTypes.STRING,
		},
		ramSpeed: {
			type: DataTypes.STRING,
		},
		ramAmount: {
			type: DataTypes.INTEGER,
		},
		pcType: {
			type: DataTypes.INTEGER,
		},
		pcName: {
			type: DataTypes.INTEGER,
		},
	});
	return Pc;
};

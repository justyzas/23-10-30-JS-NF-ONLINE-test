const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define("User", {
		username: {
			type: DataTypes.STRING,
			allowNull: false,
			get() {
				// Kad isvengti begalinio ciklo (kadangi this.username gauna geteri)
				const rawValue = this.getDataValue("username");
				const resultValue = rawValue.toUpperCase();
				return resultValue;
			},
			set(value) {
				this.setDataValue("username", `-> ${value}`);
			},
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		usernameAndEmail: {
			type: DataTypes.VIRTUAL,
			get() {
				return `${this.username} ${this.email}`;
			},
			set() {
				throw new Error("Yous should not change Virtual fields!");
			},
		},
		age: {
			type: Sequelize.DataTypes.INTEGER,
			allowNull: false,
		},
	});
	// User.sync({ alter: true });
	return User;
};

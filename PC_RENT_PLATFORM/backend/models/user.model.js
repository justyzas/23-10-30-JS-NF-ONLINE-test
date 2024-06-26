const db = require(".");
module.exports = (sequelize, DataTypes) => {
	const Address = sequelize.define(
		"Address",
		{
			country: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			county: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			municipality: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			zipCode: {
				type: DataTypes.STRING(6),
				allowNull: false,
			},
			city: {
				type: DataTypes.STRING(100),
				allowNull: false,
			},
			street: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			streetNumber: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			apartmentNumber: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
		},
		{
			timestamps: false,
		}
	);

	const User = sequelize.define(
		"User",
		{
			username: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
			},
			passEncoded: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			salt: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
				validate: {
					isEmail: true,
				},
			},
			birthDate: {
				type: DataTypes.DATEONLY,
				allowNull: false,
			},
			phone: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			addressId: {
				type: DataTypes.INTEGER,
				foreignKey: true,
			},
		},
		{
			timestamps: true,
		}
	);
	User.hasOne(Address);
	Address.belongsTo(User);

	// console.log(db);
	Address.sync();
	User.sync();
	return { User, Address };
};

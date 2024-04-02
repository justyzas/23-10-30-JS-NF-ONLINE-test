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
	Address.sync({ alter: true });
	return Address;
};

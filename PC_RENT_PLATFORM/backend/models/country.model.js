module.exports = (sequelize, DataTypes) => {
	const Country = sequelize.define(
		"Country",
		{
			countryName: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
			},
			countryNameShort: {
				type: DataTypes.STRING(3),
				allowNull: false,
				unique: true,
			},
		},
		{
			timestamps: false,
		}
	);
	// Country.sync();
	return Country;
};

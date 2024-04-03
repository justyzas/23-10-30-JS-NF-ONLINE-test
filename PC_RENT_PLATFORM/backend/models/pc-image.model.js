module.exports = (sequelize, DataTypes) => {
	const PcImage = sequelize.define(
		"PcImage",
		{
			uri: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			timestamps: false,
		}
	);
	return PcImage;
};

"use strict";

require("dotenv").config();
const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const process = require("process");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
// const config = require(__dirname + "/../config/config.json")[env];
const db = {};

// const sequelize = new Sequelize(
// 	`mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:3306/${process.env.DB_DATABASE}`
// );
const sequelize = new Sequelize(
	process.env.DB_DATABASE,
	process.env.DB_USER,
	process.env.DB_PASSWORD,
	{
		host: process.env.DB_HOST,
		dialect:
			"mysql" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
	}
);
// if (config.use_env_variable) {
// 	sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {

// }

fs.readdirSync(__dirname)
	.filter((file) => {
		return (
			file.indexOf(".") !== 0 &&
			file !== basename &&
			file.slice(-3) === ".js" &&
			file.indexOf(".test.js") === -1
		);
	})
	.forEach((file) => {
		const model = require(path.join(__dirname, file))(
			sequelize,
			Sequelize.DataTypes
		);
		db[model.name] = model;
	});

Object.keys(db).forEach((modelName) => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

const associate = () => {
	db.User.hasOne(db.Address);
	db.Address.belongsTo(db.User);
	db.Pc.belongsTo(db.User);
	db.User.hasMany(db.Pc);
	db.PcImage.belongsTo(db.Pc);
	db.Pc.hasMany(db.PcImage);

	db.User.sync();
	db.PcImage.sync();
	db.Pc.sync();
	db.Address.sync();
};

associate();

module.exports = db;

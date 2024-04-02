"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert("Users", [
			{
				username: "John",
				password: "Doe",
				email: "john.d@doe.com",
				age: 18,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				username: "Saul",
				paswsord: "Doe",
				email: "saul.d@doe.com",
				age: 22,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				username: "Kim",
				password: "Doe",
				email: "kim.d@doe.com",
				age: 22,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				username: "Petras",
				password: "Doe",
				email: "petras.d@doe.com",
				age: 17,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Users", null, {});
	},
};

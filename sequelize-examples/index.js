const db = require("./models");
const User = db.User;
async function main() {
	// Naujų įrašų pridėjimas prie duomenų bazės;
	// const newUser = await User.create({
	// 	username: "John",
	// 	password: "Doe",
	// 	email: "john.d@doe.com",
	// });
	// const anotherUser = await User.create({
	// 	username: "John",
	// 	password: "Joe",
	// 	email: "john.d@joe.com",
	// });
	// const yetAnotherUser = await User.create({
	// 	username: "Petras",
	// 	password: "1234",
	// 	email: "krilin@petras.com",
	// });

	// Įrašų perskaitymas iš duomenų bazės;
	// const data = await User.findAll();
	// console.log(data.map((d) => d.toJSON()));

	//Vieno įrašo perskatymas iš duomenų bazės;
	const petras = await User.findOne({
		where: {
			username: "Petras",
			// email: "krilin@petras.com",
			// password: "drtfgthyjkl",
		},
	});
	console.log(petras.toJSON());

	// Išrynimas turint modelio objektą
	// await data[0].destroy({ force: true });
	//Ištrynimas neturint modelio objekto
	// await User.destroy({
	// 	where: {
	// 		username: "John",
	// 	},
	// 	force: true,
	// });
	//Atnaujinimas neturint modelio objekto
	// await User.update(
	// 	{ password: "strongerPassword123" },
	// 	{
	// 		where: {
	// 			password: "1234",
	// 		},
	// 	}
	// );
}

main();

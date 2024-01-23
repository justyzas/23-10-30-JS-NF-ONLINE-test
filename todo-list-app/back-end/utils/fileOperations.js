const fs = require("fs"); //failu sistemos modulis

class FileIO {
	//Klase skirta darbui su vienu failu
	constructor(pathToFile) {
		this.pathToFile = pathToFile;
	}

	async readFile() {
		const data = await fs.readFile(this.pathToFile);
		console.log(data);
	}
	async writeFile(obj) {
		await fs.writeFile("./data.json", JSON.stringify(obj), (err) => {
			if (err) throw new Error("Irasymas i faila nepavyko");
		});
	}
}

// async function writeFile(obj) {
// 	await fs.writeFile("./data.json", JSON.stringify(obj), (err) => {
// 		if (err) console.error(err);
// 	});
// }

module.exports = FileIO;

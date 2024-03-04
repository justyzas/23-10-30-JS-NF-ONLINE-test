export function callPeopleApi(callback) {
	fetch("https://randomuser.me/api/?results=50")
		.then((rawData) => rawData.json())
		.then((data) => callback(data))
		.catch((err) => console.error(err));
}

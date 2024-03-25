export async function savePc(pc, callback) {
	//POST
	const promise = await fetch("/server/api/pc", {
		method: "post",
		body: pc,
	});

	const response = await promise.json();

	callback(response);
}
export async function getAllPcs(callback) {
	const promise = await fetch("/server/api/pc");
	const response = await promise.json();
	callback(response);
}

export async function getById(id, callback) {
	const promise = await fetch(`/server/api/pc/${id}`);
	const response = await promise.json();
	console.log(response);
	callback(response);
}

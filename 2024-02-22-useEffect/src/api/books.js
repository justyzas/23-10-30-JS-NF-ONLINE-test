export async function getBooks() {
	const promise = await fetch("https://in3.dev/knygos/");
	const resp = await promise.json();
	return resp;
}

export async function getAllCountries(cb = (a) => a) {
	const promise = await fetch("/server/api/country"); //Jei domenas toks pat - nebereikia nurodyti pilno kelio
	const response = await promise.json();
	cb(response);
	return response;
}

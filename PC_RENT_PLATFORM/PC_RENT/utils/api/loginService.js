export async function login(loginDetails, cb) {
	const promise = await fetch("/server/api/user/login", {
		method: "post",
		credentials: "include",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(loginDetails),
	});

	const result = await promise.json();
	cb(result);
}

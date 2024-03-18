export async function checkSession(cb) {
	const promise = await fetch("/server/api/user/check-session");
	const result = await promise.json();
	cb(result);
}

export async function logout(cb) {
	const promise = await fetch("/server/api/user/logout");
	const result = await promise.json();
	cb(result);
}

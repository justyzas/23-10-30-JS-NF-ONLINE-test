import { useState } from "react";

export default function FormSection() {
	const [password, setPassword] = useState("");
	const [passwordError, setPasswordError] = useState("");

	function handleChange(event) {
		checkPassword(event.target.value);
		setPassword(event.target.value);
	}

	function checkPassword(passwordParam) {
		if (passwordParam.length < 8)
			setPasswordError("Your password is too short!");
		else {
			setPasswordError("");
		}
	}

	return (
		<section>
			<p>Hello, please provide us with your password</p>
			<input
				type="password"
				className={passwordError ? "error-active" : ""}
				placeholder="Enter your password"
				onChange={handleChange}
			/>
			{passwordError && <span className="error-box">{passwordError}</span>}
		</section>
	);
}

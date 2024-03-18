import { useEffect, useRef, useState } from "react";
import { checkSession } from "/utils/api/sessions";
import { login } from "/utils/api/loginService";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
	const [message, setMessage] = useState("");
	const navigate = useNavigate();
	useEffect(() => {
		checkSession((data) => {
			if (data.isLoggedIn) {
				navigate("/");
			} else {
				console.log("Vartotojas neprisijunges");
			}
		});
	}, [navigate]);

	function logIn(e) {
		e.preventDefault();
		login(loginInfo.current, (resp) => {
			setMessage(resp.message);
			if (resp.status) {
				navigate("/");
			}
			console.log(resp);
		});
	}
	console.log("Komponentas persikrove");

	// 1. Kai reikia nuorodos i elementa
	// const usernameInput = useRef(null);
	// const passwordInput = useRef(null);
	// 2. Kai reikia kintamojo, kuriam keičiantis nepersikrauna komponentas
	const loginInfo = useRef({ username: "", password: "" });
	return (
		<div className="bg-slate-300 w-[100vw] h-[100vh] flex justify-center items-center auth-bg">
			<div className="w-4/5 min-h-[400px] max-w-[1000px] bg-blue-200 bg-opacity-80 p-4 rounded-md">
				<h1 className="text-xl font-bold">Login form</h1>
				<hr className="mb-20" />
				<p className="text-red-600">{message}</p>
				<form>
					{/* <p>Jusu vartotojo vardas: {usernameInput.current.value}</p> useRef - neteisingas panaudojimo atvejis */}
					<div className="mb-2">
						<label>
							<span className="w-1/5 inline-block">Username</span>
							<input
								// ref={usernameInput}
								onChange={(e) => {
									loginInfo.current.username = e.target.value;
								}}
								type="text"
								placeholder="Username"
								className="outline-none border w-4/5 px-2 py-1 rounded-md"
							/>
						</label>
					</div>
					<div className="mb-2">
						<label>
							<span className="w-1/5 inline-block">Password</span>
							<input
								// ref={passwordInput}
								onChange={(e) => {
									loginInfo.current.password = e.target.value;
								}}
								type="password"
								placeholder="Enter your password"
								className="outline-none border w-4/5 px-2 py-1 rounded-md"
							/>
						</label>
					</div>
					<Link
						to="/registration"
						className="block text-blue-600 hover:text-blue-700 hover:underline "
					>
						Still dont have an account?
					</Link>
					<button
						className="bg-indigo-600 hover:bg-indigo-700 rounded text-white px-6 py-1 mt-4"
						onClick={logIn}
					>
						Log In
					</button>
				</form>
			</div>
		</div>
	);
}

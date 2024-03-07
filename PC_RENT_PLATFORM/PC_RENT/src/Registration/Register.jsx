import { useState } from "react";

export default function RegistrationWindow() {
	const [userDetails, setUserDetails] = useState({
		username: "",
		password: "",
		email: "",
		birthDate: "",
		phone: "",
	});
	// const [addressDetails, setAddressDetails] = useState({});

	function setFieldInUserDetails(e, field) {
		const newObject = { ...userDetails };
		newObject[field] = e.target.value;
		setUserDetails(newObject);
	}

	return (
		<div className="bg-slate-300 w-[100vw] h-[100vh] flex justify-center items-center auth-bg">
			<div className="w-4/5 min-h-[400px] max-w-[1000px] bg-blue-200 bg-opacity-80 p-4 rounded-md">
				<h1 className="text-xl font-bold">Registration</h1>
				<hr className="mb-4" />

				<form>
					<div className="mb-2">
						<label>
							<span className="w-1/5 inline-block">Username</span>
							<input
								value={userDetails.username}
								onChange={(e) => setFieldInUserDetails(e, "username")}
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
								value={userDetails.password}
								onChange={(e) => setFieldInUserDetails(e, "password")}
								type="password"
								placeholder="Enter your password"
								className="outline-none border w-4/5 px-2 py-1 rounded-md"
							/>
						</label>
					</div>
					<div className="mb-2">
						<label>
							<span className="w-1/5 inline-block">E-Mail</span>
							<input
								value={userDetails.email}
								onChange={(e) => setFieldInUserDetails(e, "email")}
								type="email"
								placeholder="Enter your email address"
								className="outline-none border w-4/5 px-2 py-1 rounded-md"
							/>
						</label>
					</div>
					<div className="mb-2">
						<label>
							<span className="w-1/5 inline-block">Birth date</span>
							<input
								type="date"
								value={userDetails.birthDate}
								onChange={(e) => setFieldInUserDetails(e, "birthDate")}
								className="outline-none border w-4/5 px-2 py-1 rounded-md"
							/>
						</label>
					</div>
					<div className="mb-2">
						<label>
							<span className="w-1/5 inline-block">Phone</span>
							<input
								type="text"
								onChange={(e) => setFieldInUserDetails(e, "phone")}
								value={userDetails.phone}
								placeholder="Enter your phone number"
								className="outline-none border w-4/5 px-2 py-1 rounded-md"
							/>
						</label>
					</div>

					<h1 className="text-xl font-bold mt-4">Address</h1>
					<hr className="mb-4" />

					<div className="mb-2">
						<label>
							<span className="w-1/5 inline-block">Country</span>
							<select className="outline-none border w-4/5 px-2 py-1 rounded-md">
								<option>Lithuania</option>
								<option>Latvia</option>
								<option>United Kingdom</option>
							</select>
						</label>
					</div>
					<div className="mb-2">
						<label>
							<span className="w-1/5 inline-block">County</span>
							<input
								type="text"
								placeholder="Enter your county"
								className="outline-none border w-4/5 px-2 py-1 rounded-md"
							/>
						</label>
					</div>
					<div className="mb-2">
						<label>
							<span className="w-1/5 inline-block">Municipality</span>
							<input
								type="text"
								placeholder="Enter your municipality"
								className="outline-none border w-4/5 px-2 py-1 rounded-md"
							/>
						</label>
					</div>
					<div className="mb-2">
						<label>
							<span className="w-1/5 inline-block">Postal code</span>
							<input
								type="text"
								placeholder="Enter your postal code"
								className="outline-none border w-4/5 px-2 py-1 rounded-md"
							/>
						</label>
					</div>
					<div className="mb-2">
						<label>
							<span className="w-1/5 inline-block">City</span>
							<input
								type="text"
								placeholder="Enter your city"
								className="outline-none border w-4/5 px-2 py-1 rounded-md"
							/>
						</label>
					</div>
					<div className="mb-2">
						<label>
							<span className="w-1/5 inline-block">Street</span>
							<input
								type="text"
								placeholder="Enter your street"
								className="outline-none border w-4/5 px-2 py-1 rounded-md"
							/>
						</label>
					</div>
					<div className="mb-2">
						<label>
							<span className="w-1/5 inline-block">Street number</span>
							<input
								type="text"
								placeholder="Street number"
								className="outline-none border w-1/5 px-2 py-1 rounded-md"
							/>
							<span>-</span>
							<input
								type="text"
								placeholder="Apartment number"
								className="outline-none border w-2/5 px-2 py-1 rounded-md"
							/>
						</label>
					</div>
					<div>
						<label>
							<input
								type="checkbox"
								required
							/>
							<span className="ml-2">
								I agree to terms of use and privacy policy
							</span>
						</label>
					</div>
					<button className="bg-indigo-600 hover:bg-indigo-700 rounded text-white px-6 py-1 mt-4">
						Register
					</button>
				</form>
			</div>
		</div>
	);
}

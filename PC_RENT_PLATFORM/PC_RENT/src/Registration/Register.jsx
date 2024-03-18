import { useEffect, useMemo, useState } from "react";
import { getAllCountries } from "/utils/api/countriesApi";
import { register } from "../../utils/api/registerService";
import { checkSession } from "/utils/api/sessions";
import { Link, useNavigate } from "react-router-dom";
export default function RegistrationWindow() {
	console.log("Komponentas persikrove");
	const [userDetails, setUserDetails] = useState({
		username: "",
		password: "",
		email: "",
		birthDate: "",
		phone: "",
	});

	const [addressDetails, setAddressDetails] = useState({
		country: "",
		county: "",
		municipality: "",
		zipCode: "",
		city: "",
		street: "",
		streetNumber: "",
		apartmentNumber: "",
	});
	const [countries, setCountries] = useState([]);
	const navigate = useNavigate();
	useEffect(() => {
		getAllCountries((data) => {
			setCountries(data);
		});

		checkSession((data) => {
			if (data.isLoggedIn) {
				navigate("/");
			} else {
				console.log("Vartotojas neprisijunges");
			}
		});
	}, [navigate]);

	const sortedCountries = useMemo(() => {
		return countries.sort((a, b) => a.country.localeCompare(b.country));
	}, [countries]);
	// const [addressDetails, setAddressDetails] = useState({});

	function setFieldInUserDetails(e, field) {
		const newObject = { ...userDetails };
		newObject[field] = e.target.value;
		setUserDetails(newObject);
	}

	function sendRegistrationDetails() {
		const registrationDetails = { ...userDetails, ...addressDetails };
		register(registrationDetails);
		console.log(registrationDetails);
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
							<select
								className="outline-none border w-4/5 px-2 py-1 rounded-md"
								onChange={(e) =>
									setAddressDetails({
										...addressDetails,
										country: e.target.value,
									})
								}
							>
								{sortedCountries.map((country) => (
									<option key={`country-${country.id}`}>
										{country.country}
									</option>
								))}
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
								value={addressDetails.county}
								onChange={(e) =>
									setAddressDetails({
										...addressDetails,
										county: e.target.value,
									})
								}
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
								value={addressDetails.municipality}
								onChange={(e) =>
									setAddressDetails({
										...addressDetails,
										municipality: e.target.value,
									})
								}
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
								value={addressDetails.zipCode}
								onChange={(e) =>
									setAddressDetails({
										...addressDetails,
										zipCode: e.target.value,
									})
								}
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
								value={addressDetails.city}
								onChange={(e) =>
									setAddressDetails({
										...addressDetails,
										city: e.target.value,
									})
								}
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
								value={addressDetails.street}
								onChange={(e) =>
									setAddressDetails({
										...addressDetails,
										street: e.target.value,
									})
								}
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
								value={addressDetails.streetNumber}
								onChange={(e) =>
									setAddressDetails({
										...addressDetails,
										streetNumber: e.target.value,
									})
								}
							/>
							<span>-</span>
							<input
								type="text"
								placeholder="Apartment number"
								className="outline-none border w-2/5 px-2 py-1 rounded-md"
								value={addressDetails.apartmentNumber}
								onChange={(e) =>
									setAddressDetails({
										...addressDetails,
										apartmentNumber: e.target.value,
									})
								}
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
					<Link
						to="/login"
						className="block text-blue-600 hover:text-blue-700 hover:underline "
					>
						Already have an account?
					</Link>
					<button
						className="bg-indigo-600 hover:bg-indigo-700 rounded text-white px-6 py-1 mt-4"
						onClick={sendRegistrationDetails}
					>
						Register
					</button>
				</form>
			</div>
		</div>
	);
}

import { useEffect, useState } from "react";
import { checkSession, logout } from "/utils/api/sessions";
import { Link, useNavigate } from "react-router-dom";
import { getAllPcs } from "../../utils/api/pcService";
import PcPost from "../PcPost";
function AuthButtons() {
	return (
		<>
			<Link
				to="/registration"
				className="px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded mx-2"
			>
				Register now
			</Link>
			<Link
				to="/login"
				className="px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded mx-2"
			>
				Log In
			</Link>
		</>
	);
}

export default function Main() {
	const [pcList, setPcList] = useState([]);
	const navigate = useNavigate();
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	useEffect(() => {
		checkSession((data) => {
			setIsLoggedIn(data.isLoggedIn);
		});
		getAllPcs((allPcs) => {
			setPcList(allPcs);
			console.log(allPcs);
		});
	}, [navigate]);
	function logOut() {
		logout((response) => {
			if (response.status) {
				setIsLoggedIn(false);
			}
		});
	}
	// const isLoggedIn = true;
	return (
		<div className="  flex justify-center items-center">
			<div className="container w-[80%] bg-slate-100 min-h-[90vh]   rounded-lg p-6">
				{!isLoggedIn && <AuthButtons />}
				{isLoggedIn && (
					<div className="flex justify-between">
						<span>
							<Link
								to="/add-new-pc"
								className="px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded mx-2"
							>
								Pridėti nuomos skelbimą
							</Link>
							<Link
								to="/my-computers"
								className="px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded mx-2"
							>
								Mano nuomojami kompiuteriai
							</Link>
						</span>

						<button
							className="px-4 py-1 bg-red-600 hover:bg-red-700 text-white rounded mx-2"
							onClick={logOut}
						>
							Atsijungti
						</button>
					</div>
				)}

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
					{/* <PcPost />
          <PcPost />
          <PcPost />
          <PcPost />
          <PcPost />
          <PcPost />
          <PcPost />
          <PcPost />
          <PcPost /> */}
					{pcList.map((pc) => (
						<PcPost
							pc={pc}
							key={pc.id}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

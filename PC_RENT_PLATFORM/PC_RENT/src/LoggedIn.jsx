import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { checkSession } from "/utils/api/sessions";
export default function LoggedIn({ children }) {
	const navigate = useNavigate();
	useEffect(() => {
		checkSession((resp) => {
			// console.log(resp);
			if (!resp.isLoggedIn) navigate("/login");
		});
	}, [navigate]);
	return <>{children}</>;
}

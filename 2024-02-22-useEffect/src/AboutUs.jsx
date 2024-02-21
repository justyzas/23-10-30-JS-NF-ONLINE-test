import { Link } from "react-router-dom";

export default function AboutUs() {
	return (
		<div>
			<Link
				to="/"
				className="bg-red-400 hover:bg-red-500 text-white rounded px-4 py-1"
			>
				Home
			</Link>
			<p>About us page</p>
		</div>
	);
}

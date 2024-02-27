import { useState } from "react";
import Bottom from "./components/Bottom";
import Middle from "./components/Middle";
import Top from "./components/Top";

export default function Layout() {
	const [newScooter, setNewScooter] = useState(null);

	function notifyScooterAddition(scooter) {
		setNewScooter(scooter);
	}
	return (
		<div>
			<Top notifyScooterAddition={notifyScooterAddition} />
			<Middle newScooter={newScooter} />
			<Bottom />
		</div>
	);
}
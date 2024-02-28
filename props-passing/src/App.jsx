import { useState } from "react";
import Komponentas1 from "./Komponentas1";
import Komponentas2 from "./Komponentas2";

export default function App() {
	const [vardas, setVardas] = useState("");
	const [showIndex, setShowIndex] = useState(1);
	const piniguKiekis = 10;

	function gautiDuomenis(name) {
		setVardas(name);
	}

	return (
		<div className="bg-yellow">
			<h1>Parent</h1>
			<p>Vardas: {vardas}</p>
			<button onClick={() => setShowIndex(1)}>Komponentas1</button>
			<button onClick={() => setShowIndex(2)}>Komponentas2</button>

			<div className={showIndex === 1 ? "" : "hidden"}>
				<Komponentas1
					money={piniguKiekis}
					perduotiDuomenis={gautiDuomenis}
				/>
			</div>
			<div className={showIndex === 2 ? "" : "hidden"}>
				<Komponentas2
					cash={piniguKiekis}
					prizoLaimetoja={vardas}
				/>
			</div>
		</div>
	);
}

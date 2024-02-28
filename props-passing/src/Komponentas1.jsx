import { useState } from "react";

/* eslint-disable react/prop-types */
export default function Komponentas1({ money, perduotiDuomenis }) {
	const vardas = "Stasė";
	const [count, setCount] = useState(0);

	return (
		<div className="bg-lime">
			<h3>Komponentas1</h3>
			<p>Pinigu kiekis: {money}</p>
			<button onClick={() => perduotiDuomenis(vardas)}>
				Issiusti duomenis
			</button>

			<p>count: {count}</p>
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				Prideti
			</button>
		</div>
	);
}

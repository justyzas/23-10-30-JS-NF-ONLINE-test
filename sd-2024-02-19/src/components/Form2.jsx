import { useState, useEffect } from "react";

export default function Form2() {
	const [cats, setCats] = useState(() => {
		return JSON.parse(localStorage.getItem("cats") || "[]");
	});
	const [newCatName, setNewCatName] = useState("");
	const [weight, setWeight] = useState("");

	// useEffect(() => {
	// 	console.log("Suveikiau!");
	// }, []);

	// console.log("pasikeite state");

	return (
		<div>
			<input
				type="text"
				placeholder="Vardas"
				value={newCatName}
				onChange={(e) => {
					setNewCatName(e.target.value);
				}}
			/>
			<input
				className="weightInput"
				type="number"
				placeholder="Svoris (kg)"
				value={weight}
				min={0}
				max={40}
				onChange={(e) => {
					setWeight(e.target.value);
				}}
			/>

			<button
				onClick={() => {
					setWeight("");
					setNewCatName("");
					const newArray = [
						...cats,
						{
							name: newCatName,
							weight: weight,
						},
					];
					setCats(newArray); //cats
					console.log(cats);
					console.log(newArray);

					localStorage.setItem("cats", JSON.stringify(newArray));
				}}
			>
				Prideti katinuka
			</button>

			<ul>
				{cats.map((cat, index) => (
					<li key={index}>
						{cat.name} {cat.weight}kg
					</li>
				))}
			</ul>
		</div>
	);
}

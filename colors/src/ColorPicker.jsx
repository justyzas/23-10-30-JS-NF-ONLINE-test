import { useState } from "react";

export default function ColorPicker({ onColorPick }) {
	const [color, setColor] = useState("#000000");
	function save() {
		const currentId = localStorage.getItem("currentId") || "1";
		const existingColorsJSON = localStorage.getItem("colors") || "[]";
		const existingColors = JSON.parse(existingColorsJSON);
		const newColor = { id: currentId, color, date: Date.now() };
		existingColors.push(newColor);
		localStorage.setItem("colors", JSON.stringify(existingColors));
		localStorage.setItem("currentId", `${+currentId + 1}`);
		onColorPick(newColor);
	}
	return (
		<div className="border p-2">
			<h3 className="pr-2 border-b-4 border-blue-500 w-fit">
				Pasirinkite savo spalvą
			</h3>

			<input
				type="color"
				name="color"
				onChange={(event) => {
					setColor(event.target.value);
				}}
			/>
			<button
				onClick={save}
				className="block bg-blue-600 text-white py-1 px-4 rounded hover:bg-blue-700 text-xs"
			>
				Išsaugoti
			</button>
		</div>
	);
}

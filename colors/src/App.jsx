import { useState } from "react";
import "./App.css";
import ColorPicker from "./ColorPicker";
import TableOfColors from "./TableOfColors";

function App() {
	const [colors, setColors] = useState(() => {
		const localColors = JSON.parse(localStorage.getItem("colors")) || [];
		return localColors;
	});
	function onColorPick(color) {
		console.log(colors);
		setColors([...colors, color]);
		console.log("Pranesta apie prideta nauja spalva", color);
	}
	return (
		<div>
			<ColorPicker onColorPick={onColorPick} />
			<TableOfColors colors={colors} />
		</div>
	);
}

export default App;

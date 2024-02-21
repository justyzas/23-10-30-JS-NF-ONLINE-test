import { useState } from "react";

export default function Form4() {
	const [text, setText] = useState("");
	const [color, setColor] = useState("Red");
	const [fontSize, setFontSize] = useState("10px");
	const [font, setFont] = useState("Times New Roman");

	const colors = ["Red", "Black", "Purple", "Yellow", "Blue", "Orange", "Pink"];

	return (
		<div>
			<input
				type="text"
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>

			<select
				value={color}
				onChange={(e) => {
					setColor(e.target.value);
				}}
			>
				{colors.map((color, index) => (
					<option key={index}>{color}</option>
				))}
			</select>
			<select
				value={fontSize}
				onChange={(e) => {
					setFontSize(e.target.value);
				}}
			>
				<option>10px</option>
				<option>14px</option>
				<option>18px</option>
				<option>22px</option>
				<option>28px</option>
			</select>
			<select
				value={font}
				onChange={(e) => {
					setFont(e.target.value);
				}}
			>
				<option>Times New Roman</option>
				<option>Arial</option>
				<option>Verdana</option>
				<option>Helvetica</option>
				<option>Georgia</option>
			</select>

			<div
				style={{
					color: color,
					fontSize: fontSize,
					fontFamily: font,
				}}
			>
				{text}
			</div>
		</div>
	);
}

import { useState } from "react";
import { rand } from "../utils/rand";

function Square({ id }) {
	return <div className="box">{id}</div>;
}

export default function Form1() {
	const [boxArray, setBoxArray] = useState([]);
	const [numberOfNewBoxes, setNumberOfNewBoxes] = useState(0);

	function displayBox(box, index) {
		return <div asdfg={index}>{box}</div>;
	}

	return (
		<div>
			<input
				type="number"
				value={numberOfNewBoxes}
				onChange={(e) => {
					setNumberOfNewBoxes(e.target.value);
				}}
				min={0}
			/>
			<button
				onClick={() => {
					const newBoxes = [];
					for (let i = 0; i < numberOfNewBoxes; i++)
						newBoxes.push(<Square id={rand(100, 200)} />);
					setBoxArray([...boxArray, ...newBoxes]);
					setNumberOfNewBoxes(0);
				}}
			>
				Create boxes
			</button>
			<div className="box-container">{boxArray.map(displayBox)}</div>
		</div>
	);
}

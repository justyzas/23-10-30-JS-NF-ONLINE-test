import { useState } from "react";

function Section() {
	const [countOfClicks, setClicks] = useState(0);
	const [increment, setIncrement] = useState(1);
	const [decrement, setDecrement] = useState(1);
	const [value, setValue] = useState("reiksme!");

	// function increaseValue() {
	// 	setClicks(countOfClicks + 1);
	// 	console.log(countOfClicks);
	// }
	// function decreaseValue() {
	// 	setClicks(countOfClicks - 1);
	// 	console.log(countOfClicks);
	// }
	// function handleClick(value) {
	// 	console.log("Handle click initiated...");
	// 	setClicks(countOfClicks + value);
	// }
	return (
		<section>
			<p>Count of clicks: {countOfClicks}</p>
			<i>increment count: {increment}</i>
			<i>decrement count: {decrement}</i>

			<div>
				<button
					onClick={() => {
						setClicks((prev) => prev + increment);
						setClicks((prev) => prev + increment);
						setClicks((prev) => prev + increment);
						setClicks((prev) => prev + increment);
					}}
				>
					Increase value
				</button>
				<button
					onClick={() => {
						setClicks(countOfClicks - decrement);
					}}
				>
					Decrease value
				</button>
				<button
					onClick={() => {
						setIncrement(increment + 1);
					}}
				>
					Increase increment
				</button>
				<button
					onClick={() => {
						setDecrement(decrement + 1);
					}}
				>
					Increase decrement
				</button>
			</div>
			<p>{value}</p>
			<button
				onClick={() => {
					setValue((prevValue) => {
						console.log(prevValue);
						return prevValue + "a";
					});
				}}
			>
				Click me
			</button>
		</section>
	);
}

export default Section;

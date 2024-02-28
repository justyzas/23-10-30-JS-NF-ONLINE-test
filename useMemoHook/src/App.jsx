import { useState, useMemo } from "react";

function App() {
	const [count, setCount] = useState(0);
	const [seeEven, setSeeEven] = useState(true);
	const [arr, setArr] = useState(() => {
		return new Array(2000000).fill(0).map((val, index) => index + 1);
	});

	const filteredArray = useMemo(() => {
		return arr.filter((val) => {
			if (seeEven) {
				return val % 2 === 0;
			} else {
				return val % 2 === 1;
			}
		});
	}, [arr, seeEven]);

	return (
		<div>
			<button
				onClick={() => {
					setSeeEven(true);
				}}
			>
				see even
			</button>
			<button
				onClick={() => {
					setSeeEven(false);
				}}
			>
				see odd
			</button>
			<p>count: {count}</p>
			<button onClick={() => setCount(count + 1)}>Prideti</button>
		</div>
	);
}

export default App;

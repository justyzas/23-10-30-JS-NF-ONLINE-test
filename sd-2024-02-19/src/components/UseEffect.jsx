import { useState, useEffect } from "react";

export default function UseEffect() {
	const [count, setCount] = useState(0);
	const [countx2, setCountx2] = useState(0);

	useEffect(() => {
		document.addEventListener("scroll", () => {
			console.log("pascrollinta");
		});
	}, []); //GAUTI DUOM iš API
	//Uždėti event listenerius dokumentui

	useEffect(() => {
		setCountx2(count * 2);
	}, [count]);

	return (
		<div>
			<button onClick={() => setCount(count + 1)}>Value is {count}</button>
			<p>{countx2}</p>
		</div>
	);
}

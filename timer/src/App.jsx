import { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [time, setTime] = useState(54);
	const [isTimerOn, setTimerOn] = useState(false);

	useEffect(() => {
		const id = setInterval(() => {
			if (isTimerOn) setTime((prevTime) => prevTime - 1);
		}, 1000);
	}, []);
	return <>{time}</>;
}

export default App;

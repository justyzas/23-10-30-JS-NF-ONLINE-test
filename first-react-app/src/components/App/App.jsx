import "./App.css";

function Button() {
	return <button className="btn btn-primary">My button!</button>;
}

function App() {
	return (
		<div className="bg-white">
			<Button />
		</div>
	);
}

export default App;

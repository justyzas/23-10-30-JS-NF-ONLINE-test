export default function Base3({ mode = 0 }) {
	function decideColor() {
		if (mode === 1) return "blue";
		else if (mode === 2) return "red";
		else return "black";
	}

	return <div style={{ color: decideColor() }}>ZEBRAI IR BEBRAI</div>;
}

export default function Button({
	text = "Mygtukas",
	color = "red",
	textColor = "white",
}) {
	return (
		<button
			className={`px-6 py-1 rounded-md break-keep buttonas bg-${color}-600 hover:bg-${color}-800`}
			style={{ color: textColor }}
		>
			{text}
		</button>
	);
}

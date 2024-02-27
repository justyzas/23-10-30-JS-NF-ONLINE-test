import * as PropTypes from "prop-types";
export default function Button({
	text = "Mygtukas",
	color = "red",
	textColor = "white",
	onClick,
}) {
	return (
		<button
			className={`px-6 py-1 rounded-md break-keep buttonas`}
			style={{ color: textColor, background: color }}
			onClick={onClick}
		>
			{text}
		</button>
	);
}

Button.propTypes = {
	text: PropTypes.string,
	color: PropTypes.string,
	textColor: PropTypes.string,
	onClick: PropTypes.func,
};

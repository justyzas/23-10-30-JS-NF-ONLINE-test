import * as PropTypes from "prop-types";
export default function ErrorMessage({ children, onClose }) {
	return (
		<div
			className="bg-[#f16969] text-[#632121] px-4 py-2 rounded"
			onClick={onClose}
		>
			{children}
		</div>
	);
}

ErrorMessage.propTypes = {
	children: PropTypes.string,
	onClose: PropTypes.func,
};

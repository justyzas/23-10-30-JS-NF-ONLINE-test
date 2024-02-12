// import style from "./Header.module.css";

function Header() {
	const name = ""; //falsy
	return (
		<div className="bg-red-300 text-red-600 mb-2 py-2 px-4">
			Hello {name && "World"}!
		</div>
	);
}
// JSX - JavaScript XML
export default Header;

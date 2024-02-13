import ContentHeader from "./ContentHeader/ContentHeader";
import ContentBody from "./ContentBody/ContentBody";
function Content() {
	return (
		<div className="w-4/5 rounded-lg flex flex-col gap-4">
			<ContentHeader />
			<ContentBody />
		</div>
	);
}
export default Content;

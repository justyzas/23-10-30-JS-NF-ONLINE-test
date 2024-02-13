import Content from "./components/Content/Content";
import LeftPanel from "./components/LeftPanel/LeftPanel";
function Layout() {
	return (
		<div className="flex gap-4 p-4">
			<LeftPanel />
			<Content />
		</div>
	);
}
export default Layout;

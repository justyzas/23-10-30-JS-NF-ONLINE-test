import { FaSpotify } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
function PanelHeader() {
	return (
		<div className="bg-[#121212] max-h-[20%] rounded-lg overflow-hidden p-6 gap-4 flex flex-col font-bold">
			<a
				href="/"
				className="block"
			>
				<FaSpotify className=" text-2xl inline" /> <span>Spotify</span>
			</a>
			<a
				className="flex items-center"
				href="/"
			>
				<GoHomeFill className="text-2xl inline mr-4" />
				Home
			</a>
			<a
				className="linkInHeader"
				href="/"
			>
				<IoIosSearch className="text-2xl inline mr-4" />
				Search
			</a>
		</div>
	);
}
export default PanelHeader;

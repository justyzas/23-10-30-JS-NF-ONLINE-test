import { MdLibraryMusic } from "react-icons/md";
import { GoPlus } from "react-icons/go";

function CardComponent({ title, description, buttonText }) {
	return (
		<div className="bg-[#242424] p-4 rounded-lg">
			<strong className="block mb-2">{title}</strong>
			<p className="text-xs">{description}</p>
			<button className="bg-white rounded-3xl text-black font-bold px-4 py-2 mt-4 text-xs">
				{buttonText}
			</button>
		</div>
	);
}

function PanelBody() {
	return (
		<div className="bg-[#121212] h-[80%] rounded-lg p-2">
			<div className="flex justify-between text-slate-300 ">
				<span className="hover:text-white transition-colors duration-500 flex items-center cursor-pointer tooltip">
					<MdLibraryMusic className="text-3xl inline-block mr-4" />
					<span className="text-xl">Your Library</span>
					<span className="tooltiptext">Collapse Your Library</span>
				</span>
				<div className="tooltip">
					<GoPlus className="text-3xl rounded-full hover:bg-[rgba(255,255,255,0.05)] transition-colors duration-500 cursor-pointer" />
					<span className="tooltiptext">Create playlist or folder</span>
				</div>
			</div>
			<div className="flex flex-col gap-2 pt-4">
				<CardComponent
					title="Create your first playlist"
					description="It's easy, we'll help you"
					buttonText="Create playlist"
				/>
				<CardComponent
					title="Create your first playlist"
					description="It's easy, we'll help you"
					buttonText="Create playlist"
				/>
			</div>
		</div>
	);
}
export default PanelBody;

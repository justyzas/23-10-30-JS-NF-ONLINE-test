function SongCard(props) {
	function handleClick(event) {
		console.log(event.target);
	}
	return (
		<div className="bg-[#181818] p-4 w-fit rounded-lg max-w-[160px] max-h-[288px]">
			<img
				src={props.song.src || "https://placehold.co/200x200"}
				alt="Song Card"
				width="150px"
				className="rounded-lg"
			/>
			<h3 className="my-4  font-bold">
				{props.song.title || "Dainos pavadinimas"}
			</h3>
			{/* Mega Hit Mix */}
			<p
				className="text-slate-200 text-wrap line-clamp-2"
				onClick={handleClick}
			>
				{props.song.description ||
					"Lorem ipsum dolor sit amet consectetur adipisicing."}
			</p>
		</div>
	);
}

export default SongCard;

import SongCard from "./SongCard/SongCard";
function ContentBody() {
	const songsArray = [
		{
			title: "Mega Mix Hit",
			description: "A mega mix of 75 favorites from the last few years!",
			src: "https://i.scdn.co/image/ab67706f000000028aa213d23c60645e2649a350",
		},
		{
			description: "Laid-back beats for an easygoing morning.",
			src: "https://i.scdn.co/image/ab67706f0000000215a41ffcf6a9fd1ed7f15ccc",
		},
		{
			title: "Rise",
			src: "https://i.scdn.co/image/ab67706f000000021e8e1adb3db7cbb52311346d",
		},
		{
			title: "Rock Classics",
			description:
				"Rock legends & epic songs that continue to inspire generations. Cover: Foo Fighters",
			src: "https://i.scdn.co/image/ab67706f0000000278b4745cb9ce8ffe32daaf7e",
		},
		{
			title: "Peaceful Piano",
			description: "Peaceful piano to help you slow down, breathe, and relax. ",
			src: "https://i.scdn.co/image/ab67706f00000002d073e656e546e43bc387ad79",
		},
		{
			title: "Mood Booster",
			description: "Get happy with today's dose of feel-good songs!",
			src: "https://i.scdn.co/image/ab67706f00000002bd0e19e810bb4b55ab164a95",
		},
		{
			title: "Mood Booster",
			description: "Get happy with today's dose of feel-good songs!",
			src: "https://i.scdn.co/image/ab67706f00000002bd0e19e810bb4b55ab164a95",
		},
	];
	return (
		<div className=" bg-gradient-to-b from-[#1f1f1f] to-[#021109] p-4 h-[92.5%] flex flex-wrap gap-4 overflow-y-auto ">
			{songsArray.map((song, index) => (
				<SongCard
					song={song}
					key={index}
				/>
			))}
		</div>
	);
}
export default ContentBody;

export default function TableRow({ id, color, colorHex, date }) {
	function parseDate(date) {
		const dateObject = new Date(date);
		const year = dateObject.getFullYear();
		const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
		const day = dateObject.getDate().toString().padStart(2, "0");
		const hours = dateObject.getHours().toString().padStart(2, "0");
		const minutes = dateObject.getMinutes().toString().padStart(2, "0");

		// const dateString = dateObject.format("YYYY-MM-dd hh:mm");
		return `${year}-${month}-${day}, ${hours}:${minutes}`;
	}
	return (
		<tr>
			<td className="text-center">{id}</td>
			<td>
				<div>
					<div
						className={`w-[20px] h-[20px] mx-auto`}
						style={{ background: color }}
					></div>
				</div>
			</td>
			<td>
				<div className="text-center">{colorHex}</div>
			</td>
			<td className="text-center">{parseDate(date)}</td>
		</tr>
	);
}

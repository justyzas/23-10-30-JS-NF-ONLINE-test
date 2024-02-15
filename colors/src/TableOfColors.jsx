import TableRow from "./TableRow";

const TableOfColors = ({ colors }) => {
	return (
		<div className="p-2">
			<table className="border border-collapse text-xs w-[100%]">
				<thead>
					<tr>
						<th>ID</th>
						<th>Spalva</th>
						<th>Hex</th>
						<th>Išsaugojimo data</th>
					</tr>
				</thead>
				<tbody>
					{colors.map((color) => (
						<TableRow
							id={color.id}
							color={color.color}
							colorHex={color.color}
							date={color.date}
							key={color.id}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default TableOfColors;

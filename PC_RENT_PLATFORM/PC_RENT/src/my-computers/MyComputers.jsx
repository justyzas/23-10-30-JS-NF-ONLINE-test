import { useEffect, useMemo, useState } from "react";
import { getMyPcs } from "/utils/api/pcService";
import PcPost from "../PcPost";

export default function MyComputers() {
	const sortingModes = Object.freeze({
		DEFAULT: "default",
		ASCENDING: "asc",
		DESCENDING: "desc",
	});
	const [allPcs, setAllPcs] = useState([]);
	const [selectedSortingMode, setSelectedSortingMode] = useState(
		sortingModes.DEFAULT
	);

	const sortedComputers = useMemo(() => {
		const pcs = [...allPcs];
		if (selectedSortingMode === sortingModes.DEFAULT) return allPcs;
		else
			return pcs.sort((pc1, pc2) => {
				if (selectedSortingMode === sortingModes.ASCENDING)
					return pc1.pcName.trimStart().localeCompare(pc2.pcName.trimStart());
				else if (selectedSortingMode === sortingModes.DESCENDING)
					return pc2.pcName.trimStart().localeCompare(pc1.pcName.trimStart());
				else return 0;
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [allPcs, selectedSortingMode]);
	useEffect(() => {
		getMyPcs((resp) => {
			console.log(resp);
			if (resp.status) setAllPcs(resp.allPcs);
			else {
				alert("Couldn't get all computers");
			}
		});
	}, []);
	return (
		<div className="container mx-auto">
			<div className="bg-slate-100 flex gap-4 py-4 px-2">
				<select
					className="bg-blue-400 rounded px-2 py-1 text-white"
					value={selectedSortingMode}
					onChange={(e) => setSelectedSortingMode(e.target.value)}
				>
					<option value={sortingModes.DEFAULT}>
						Nerikiuoti pagal pavadinimą
					</option>
					<option value={sortingModes.ASCENDING}>Rikiuoti A-Z</option>
					<option value={sortingModes.DESCENDING}>Rikiuoti Z-A</option>
				</select>

				<button>Filtruoti pagal procesorių</button>
				<button>Filtruoti pagal vaizdo plokštę</button>
			</div>
			<div className="grid grid-cols-3">
				{sortedComputers.map((pc) => (
					<PcPost
						key={`PC-${pc.id}`}
						pc={pc}
					/>
				))}
			</div>
		</div>
	);
}

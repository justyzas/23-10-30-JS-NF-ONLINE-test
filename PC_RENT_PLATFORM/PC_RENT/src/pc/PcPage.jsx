import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getById } from "/utils/api/pcService";
export default function PcPage() {
	const [isPcFound, setIsPcFound] = useState(false);
	const [pcDetails, setPcDetails] = useState({});
	const { id } = useParams();
	useEffect(() => {
		getById(id, (resp) => {
			setIsPcFound(resp.status);
			setPcDetails(resp.pc);
		});
	}, []);

	if (!isPcFound) return <div>Pc was not found</div>;
	else
		return (
			<main className="container mx-auto relative min-h-[100vh]">
				<div className="absolute translate-x-1/2 translate-y-1/2 right-1/2 bottom-1/2 bg-blue-100 min-w-[400px] w-[60%] rounded-xl overflow-hidden">
					<div className="pc-image bg-blue-50">
						<img
							src="w-full"
							alt="pc-image"
							className="min-h-[200px]"
						/>
					</div>
					<div className="p-4">
						<h3 className="text-xl font-bold text-center mb-4">
							{pcDetails.pcName}
						</h3>
						<p className="font-bold">
							Lessor: <span className="italic font-normal">Justelio19</span>
						</p>
						<div className="grid grid-cols-4">
							<div className="font-bold">Processor (CPU)</div>
							<div className="col-span-3">{pcDetails.cpu}</div>
							<div className="font-bold">Grafikos (GPU)</div>
							<div className="col-span-3">I7-13700kf</div>
							<div className="font-bold">Processor (CPU)</div>
							<div className="col-span-3">I7-13700kf</div>
							<div className="font-bold">Processor (CPU)</div>
							<div className="col-span-3">I7-13700kf</div>
							<div className="font-bold">Processor (CPU)</div>
							<div className="col-span-3">I7-13700kf</div>
							<div className="font-bold">Processor (CPU)</div>
							<div className="col-span-3">I7-13700kf</div>
						</div>
					</div>
				</div>
			</main>
		);
}

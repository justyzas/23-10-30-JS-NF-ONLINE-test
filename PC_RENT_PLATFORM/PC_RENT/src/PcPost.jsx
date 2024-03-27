export default function PcPost({ pc }) {
	function choosePcImage(pc) {
		const pcImagesArray = pc.images;
		if (pcImagesArray.length !== 0)
			return `/server/api/${pcImagesArray[0].uri}`;
		else return "https://placehold.co/400x300";
	}
	return (
		<div className="flex justify-center items-center">
			<div className="bg-white min-h-[300px] min-w-[100px] max-w-[250px]">
				<div className="img">
					<img
						src={choosePcImage(pc)}
						className="w-full"
					/>
				</div>
				<div className="details p-4 w-fit mx-auto">
					<a href={`/pc/${pc.id}`}>
						<h3 className="title text-xl mb-2 border-b-4 border-blue-500 w-fit pr-4">
							{pc.pcName}
						</h3>
					</a>
					<div className="text-xs">
						<div className="flex flex-wrap gap-x-4 mb-1">
							<span className="inline-block w-1/2 font-bold">Procesorius:</span>
							<span>{pc.cpu}</span>
						</div>
						<div className="flex flex-wrap gap-x-4 mb-1">
							<span className="inline-block w-1/2 font-bold">
								Vaizdo plokštė:
							</span>
							<span>{pc.gpu}</span>
						</div>
						<div className="flex flex-wrap gap-x-4 mb-1 items-center">
							<span className="inline-block w-1/2 font-bold">
								Operatyvioji atmintis:
							</span>
							<span>{pc.ramAmount}MB</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

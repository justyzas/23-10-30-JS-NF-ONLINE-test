import { useEffect, useState } from "react";
import { FaPencil } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";

function Status({ status }) {
	return (
		<div
			className="w-[20px] h-[20px] rounded-full inline-block"
			style={{ background: status ? "lime" : "red" }}
		></div>
	);
}

function Scooter({ scooter }) {
	return (
		<div
			key={scooter.id}
			className="bg-white rounded p-4 flex flex-wrap justify-between gap-x-14 gap-y-8"
		>
			<div>
				<h3 className="font-bold">{scooter.title}</h3>
				<div className="">Rida {scooter.ride}km</div>
			</div>
			<div>
				<h3 className="font-bold">Valst. Nr.</h3>
				<div>{scooter.registrationCode}</div>
			</div>
			<div>
				<h3 className="font-bold">Kaina/val</h3>
				<div>{scooter.hourlyPrice}€</div>
			</div>
			<div>
				<h3 className="font-bold">Paskutinio naudojimo data</h3>
				<div>{new Date(scooter.lastUseTime).toLocaleDateString("lt")}</div>
			</div>
			<div>
				<h3 className="font-bold">Statusas</h3>
				<div>
					<Status status={scooter.isBusy} />{" "}
					{scooter.isBusy ? "(Laisvas)" : "(Užimtas)"}
				</div>
			</div>

			<div className="flex gap-4 text-xl h-full items-center">
				<FaPencil className="text-blue-700 hover:text-blue-900 cursor-pointer" />
				<FaTrashAlt className="text-red-700 hover:text-red-900 cursor-pointer" />
			</div>
			<div></div>
		</div>
	);
}

export default function Middle() {
	const [scooter, setScooter] = useState(getAllScooters);
	useEffect(() => {
		// fetch("/paspirtukai.json")
		// 	.then((resp) => resp.json())
		// 	.then((data) => {
		// 		console.log(data);
		// 		setScooter(data);
		// 	});
	}, []);

	function getAllScooters() {
		const data = JSON.parse(localStorage.getItem("scooters")) || [];
		if (data.length === 0) localStorage.setItem("scooters", "[]");
		return data;
	}

	return (
		<div className="container mx-auto bg-slate-100 min-h-[400px] flex flex-col gap-4 p-4">
			{scooter.map((s) => (
				<Scooter
					key={s.id}
					scooter={s}
				/>
			))}
		</div>
	);
}

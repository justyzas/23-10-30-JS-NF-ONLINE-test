import { useEffect, useState } from "react";
import * as PropTypes from "prop-types";
import { FaPencil } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";

function Status({ status }) {
	return (
		<div
			className="w-[20px] h-[20px] rounded-full inline-block"
			style={{ background: status ? "red" : "lime" }}
		></div>
	);
}
Status.propTypes = {
	status: PropTypes.bool.isRequired,
};

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
				<div>
					{scooter.lastUseTime === 1
						? "Niekada nepanaudotas"
						: new Date(scooter.lastUseTime).toLocaleDateString("lt")}
				</div>
			</div>
			<div>
				<h3 className="font-bold">Statusas</h3>
				<div>
					<Status status={scooter.isBusy} />{" "}
					{scooter.isBusy ? "(Užimtas)" : "(Laisvas)"}
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
Scooter.propTypes = {
	scooter: PropTypes.object,
};

export default function Middle({ newScooter }) {
	const [scooter, setScooter] = useState(getAllScooters);
	useEffect(() => {
		console.log("Komponentas uzsimontavo arba pasikeite newScooter reiksme");
		if (newScooter === null) return;
		if (newScooter) {
			// console.log("Naujas scooteris buvo pridetas" + " Naujas scooteris: ");
			const newId = +localStorage.getItem("currentId");
			if (!newId) localStorage.setItem("currentId", "1");

			const newScooterAddition = {
				...newScooter,
				id: newId || 1,
				lastUseTime: 1,
				isBusy: false,
			};
			setScooter([...scooter, newScooterAddition]);
			const nextId = newId + 1 === 1 ? 2 : newId + 1;
			localStorage.setItem("currentId", nextId);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [newScooter]);

	useEffect(() => {
		localStorage.setItem("scooters", JSON.stringify(scooter));
	}, [scooter]);

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
Middle.propTypes = {
	newScooter: PropTypes.object,
};

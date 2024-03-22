import { useEffect, useRef } from "react";
import { savePc } from "../../utils/api/pcService";
import { useNavigate } from "react-router-dom";

export default function AddPcForm() {
	console.log("Komponentas persikrove");
	const navigate = useNavigate();
	// 1. Budas susisrinkti informacija iš ivesties laukeliu

	const cpuInputRef = useRef(null);
	const gpuInputRef = useRef(null);
	const ramTypeInputRef = useRef(null);
	const ramSpeedInputRef = useRef(null);
	const ramAmountInputRef = useRef(null);
	const computerTypeInputRef = useRef(null);
	const pcNameInputRef = useRef(null);

	useEffect(() => {
		console.log("Suveike useEffect");
		cpuInputRef.current.focus();

		const focusGPU = (e) => {
			if (e.key === "Enter") {
				gpuInputRef.current.focus();
				console.log("Suveike event listeneris");
			}
		};

		const element = cpuInputRef.current;

		element.addEventListener("keydown", focusGPU);

		// Cleanup funkcija yra skirta pašalinti dublikuotiems event listeneriams (del strict mode)
		return () => {
			element.removeEventListener("keydown", focusGPU);
		};
	}, []);
	// 2. Budas susisrinkti informacija iš ivesties laukeliu

	//   const pcData = useRef({});

	function registerNewPc(e) {
		e.preventDefault();
		//Prevencija nuo netiketo formos išsiuntimo
		if (e.pageX === 0 && e.pageY === 0) return;
		// 1. Budas susisrinkti informacija iš ivesties laukeliu
		const newPcObject = {
			pc_name: pcNameInputRef.current.value,
			cpu: cpuInputRef.current.value,
			gpu: gpuInputRef.current.value,
			ramType: ramAmountInputRef.current.value,
			ramSpeed: ramSpeedInputRef.current.value,
			ramAmount: ramAmountInputRef.current.value,
			pcType: computerTypeInputRef.current.value,
		};

		console.log(newPcObject);
		savePc(newPcObject, (response) => {
			if (response.status) navigate("/");
			else {
				alert("Pridejimas prie duomenu bazes buvo nesekmingas");
			}
		});

		// 2. Budas susisrinkti informacija iš ivesties laukeliu
		// console.log(pcData.current);
	}
	return (
		<div className="bg-slate-300 w-[100vw] h-[100vh] flex justify-center items-center auth-bg">
			<div className="w-4/5 min-h-[400px] max-w-[1000px] bg-blue-200 bg-opacity-80 p-4 rounded-md">
				<h1 className="text-xl font-bold">Add New PC Form</h1>
				<hr className="mb-4" />

				<form>
					<div className="mb-2">
						<label>
							<span className="w-1/5 inline-block select-none">PC name</span>
							<input
								ref={pcNameInputRef}
								// onChange={(e) => {
								//   pcData.current.cpu = e.target.value;
								// }}
								type="text"
								placeholder="Acer"
								className="outline-none border w-4/5 px-2 py-1 rounded-md"
							/>
						</label>
					</div>
					<div className="mb-2">
						<label>
							<span className="w-1/5 inline-block select-none">
								Processor (CPU)
							</span>
							<input
								ref={cpuInputRef}
								// onChange={(e) => {
								//   pcData.current.cpu = e.target.value;
								// }}
								type="text"
								placeholder="Processor"
								className="outline-none border w-4/5 px-2 py-1 rounded-md"
							/>
						</label>
					</div>
					<div className="mb-2">
						<label>
							<span className="w-1/5 inline-block select-none">
								Graphics card (GPU)
							</span>
							<input
								ref={gpuInputRef}
								// onChange={(e) => {
								//   pcData.current.gpu = e.target.value;
								// }}
								type="text"
								placeholder="Graphics card"
								className="outline-none border w-4/5 px-2 py-1 rounded-md"
							/>
						</label>
					</div>
					<div className="mb-2">
						<label>
							<span className="w-1/5 inline-block select-none">Ram Type</span>
							<select
								className="outline-none border w-4/5 px-2 py-1 rounded-md"
								ref={ramTypeInputRef}
								// onChange={(e) => {
								//   pcData.current.ramType = e.target.value;
								// }}
							>
								<option>DDR</option>
								<option>DDR2</option>
								<option>DDR3</option>
								<option>DDR4</option>
								<option>DDR5</option>
							</select>
						</label>
					</div>
					<div className="mb-2">
						<label>
							<span className="w-1/5 inline-block select-none">
								Ram speed (MHZ)
							</span>
							<input
								ref={ramSpeedInputRef}
								// onChange={(e) => {
								//   pcData.current.ramSpeed = e.target.value;
								// }}
								type="number"
								placeholder="Ram speed (MHZ)"
								className="outline-none border w-4/5 px-2 py-1 rounded-md"
							/>
						</label>
					</div>
					<div className="mb-2">
						<label>
							<span className="w-1/5 inline-block select-none">
								Ram amount (MB)
							</span>
							<input
								ref={ramAmountInputRef}
								// onChange={(e) => {
								//   pcData.current.ramAmount = e.target.value;
								// }}
								type="number"
								placeholder="Ram amount (MB)"
								className="outline-none border w-4/5 px-2 py-1 rounded-md"
							/>
						</label>
					</div>
					<div className="mb-2">
						<label>
							<span className="w-1/5 inline-block select-none">
								Computer type
							</span>
							<select
								className="outline-none border w-4/5 px-2 py-1 rounded-md"
								ref={computerTypeInputRef}
								// onChange={(e) => {
								//   pcData.current.pcType = e.target.value;
								// }}
							>
								<option>Macbook</option>
								<option>Laptop</option>
								<option>Desktop Computer</option>
							</select>
						</label>
					</div>
					<button
						className="bg-indigo-600 hover:bg-indigo-700 rounded text-white px-6 py-1 mt-4"
						onClick={(e) => registerNewPc(e)}
					>
						Register new PC
					</button>
				</form>
			</div>
		</div>
	);
}

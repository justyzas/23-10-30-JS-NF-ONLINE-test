import { useContext, useState } from "react";
import Button from "./Button";
import KoltContext from "../contexts/KoltContext";

export default function AddScooterForm() {
  const [scooter, setScooter] = useState({
    title: "",
    ride: 0,
    registrationCode: "",
    hourlyPrice: 0,
  });

  const { setNewScooter } = useContext(KoltContext);
  const handleRideChange = (e) => {
    const newValue = +e.target.value;
    if (newValue < 0) alert("Ridos reikšmė negali būti mažesnė nei nulis");
    else setScooter({ ...scooter, ride: newValue });
  };
  const handleNameChange = (e) => {
    setScooter({ ...scooter, title: e.target.value });
  };
  const handleNationalNumberChange = (e) => {
    const newValue = e.target.value;
    if (newValue.length > 5)
      alert("Valstybinis numeris negali buti ilgesnis nei 5 simboliai!");
    else setScooter({ ...scooter, registrationCode: newValue });
  };
  const handlePricingChange = (e) => {
    const newValue = +e.target.value;
    if (newValue < 0) alert("Kainos reikšmė negali būti mažesnė nei 0");
    else if (newValue > 100)
      alert("Kainos reikšmė negali būti didesnė nei 100");
    else setScooter({ ...scooter, hourlyPrice: newValue });
  };
  const saveNewScooter = () => {
    if (!/[A-Z]{3}[\d]{2}/.test(scooter.registrationCode)) {
      alert("Blogas registracijos kodas");
      return;
    }
    setNewScooter(scooter);
  };
  return (
    <div className="flex flex-wrap gap-4 w-4/5 justify-center mx-auto">
      <input
        type="text"
        value={scooter.title}
        onChange={handleNameChange}
        className="rounded px-2 py-1 outline-sky-200 outline-2 min-w-[200px]"
        placeholder="Paspirtuko modelis"
      />
      <input
        type="number"
        value={scooter.ride.toString()}
        onChange={handleRideChange}
        className="rounded px-2 py-1 outline-sky-200 outline-2 min-w-[200px]"
        placeholder="Paspirtuko rida"
      />
      <input
        type="text"
        value={scooter.registrationCode}
        onChange={handleNationalNumberChange}
        className="rounded px-2 py-1 outline-sky-200 outline-2 min-w-[200px]"
        placeholder="Valstybinis numeris"
      />
      <input
        type="number"
        value={scooter.hourlyPrice === 0 ? "" : scooter.hourlyPrice.toString()}
        onChange={handlePricingChange}
        className="rounded px-2 py-1 outline-sky-200 outline-2 min-w-[200px]"
        placeholder="Kaina/val"
      />
      <div className="min-w-[200px]">
        <Button onClick={saveNewScooter} text="Pridėti" color="blue" />
      </div>
    </div>
  );
}

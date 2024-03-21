import { useEffect, useMemo, useState, useContext } from "react";
import * as PropTypes from "prop-types";
import { FaPencil } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import ErrorMessage from "./ErrorMessage";
import KoltContext from "../contexts/KoltContext";
// import Button from "./Button";

function Status({ status, onClick }) {
  return (
    <div
      className="w-[20px] h-[20px] rounded-full inline-block cursor-pointer"
      style={{ background: status ? "red" : "lime" }}
      onClick={onClick}
    ></div>
  );
}
Status.propTypes = {
  status: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

function Scooter({ scooter, deleteFunc, updateFunc }) {
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
          <Status status={scooter.isBusy} onClick={updateFunc} />{" "}
          {scooter.isBusy ? "(Užimtas)" : "(Laisvas)"}
        </div>
      </div>

      <div className="flex gap-4 text-xl items-center">
        <FaPencil className="text-blue-700 hover:text-blue-900 cursor-pointer" />
        <FaTrashAlt
          className="text-red-700 hover:text-red-900 cursor-pointer"
          onClick={() => {
            deleteFunc();
          }}
        />
      </div>
      <div></div>
    </div>
  );
}
Scooter.propTypes = {
  scooter: PropTypes.object,
  deleteFunc: PropTypes.func,
  updateFunc: PropTypes.func,
};

export default function Middle() {
  const [scooter, setScooter] = useState(getAllScooters);
  const [showFreeScooters, setShowFreeScooters] = useState(null);
  const [selectedRideSort, setSelectedRideSort] = useState("1");
  const [errorMessage, setErrorMessage] = useState("");
  const { newScooter, setNewScooter } = useContext(KoltContext);
  useEffect(() => {
    saveScooter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newScooter]);

  useEffect(() => {
    localStorage.setItem("scooters", JSON.stringify(scooter));
  }, [scooter]);

  function saveScooter() {
    if (newScooter === null) return;
    if (newScooter) {
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
      setNewScooter(null);
    }
  }
  function getAllScooters() {
    const data = JSON.parse(localStorage.getItem("scooters")) || [];
    if (data.length === 0) localStorage.setItem("scooters", "[]");
    return data;
  }
  const filteredAndSortedScooters = useMemo(() => {
    return scooter
      .filter((val) => {
        console.log("Filtruoju");
        if (showFreeScooters === null) {
          return true;
        } else if (showFreeScooters) {
          return !val.isBusy;
        } else {
          return val.isBusy;
        }
      })
      .sort((a, b) => {
        if (selectedRideSort === "1") return 0;
        else if (selectedRideSort === "2") {
          if (a.ride > b.ride) return 1;
          else if (b.ride > a.ride) return -1;
          else return 0;
        } else {
          if (a.ride > b.ride) return -1;
          else if (b.ride > a.ride) return 1;
          else return 0;
        }
      });
  }, [showFreeScooters, scooter, selectedRideSort]);
  console.log(scooter);

  function deleteScooter(id) {
    const newScooters = scooter.filter((val) => val.id !== id);
    setScooter(newScooters);
  }

  function updateStatus(id) {
    const newScooters = [...scooter];
    const recordIndex = scooter.findIndex((val) => val.id === id);
    newScooters[recordIndex].isBusy = !newScooters[recordIndex].isBusy;

    let answer;
    if (!newScooters[recordIndex].isBusy) {
      answer = +prompt("Kiek kilometrų paspirtukas nuvažiavo?");
      console.log(answer);
      if (answer === 0) return;
      else if (!isNaN(answer)) {
        newScooters[recordIndex].ride += answer;
        setScooter(newScooters);
      } else {
        setErrorMessage("Ridos formatas yra netinkamas!");
        return;
      }
    } else {
      setScooter(newScooters);
    }
  }

  return (
    <div className="container mx-auto bg-slate-100 min-h-[400px] flex flex-col gap-4 p-4">
      {errorMessage !== "" && (
        <ErrorMessage
          onClose={() => {
            setErrorMessage("");
          }}
        >
          {errorMessage}
        </ErrorMessage>
      )}
      <div className="flex justify-center mt-28 gap-4">
        <select
          onChange={(e) => {
            if (e.target.value === "null") setShowFreeScooters(null);
            else if (e.target.value === "true") {
              setShowFreeScooters(true);
            } else {
              setShowFreeScooters(false);
            }
          }}
        >
          <option value="null">Rodyti visus</option>
          <option value="true">Rodyti laisvus</option>
          <option value="false">Rodyti užimtus</option>
        </select>
        <select
          value={selectedRideSort}
          onChange={(e) => setSelectedRideSort(e.target.value)}
        >
          <option value="1">Nerikiuoti ridos</option>
          <option value="2">Nuo mažiausios iki didžiausios</option>
          <option value="3">Nuo didžiausios iki mažiausios</option>
        </select>
      </div>
      {filteredAndSortedScooters.map((s) => (
        <Scooter
          key={s.id}
          deleteFunc={() => deleteScooter(s.id)}
          updateFunc={() => updateStatus(s.id)}
          scooter={s}
        />
      ))}
    </div>
  );
}

import { useState } from "react";
import Bottom from "./components/Bottom";
import Middle from "./components/Middle";
import Top from "./components/Top";
import KoltContext from "./contexts/KoltContext";

export default function Layout() {
  const [newScooter, setNewScooter] = useState(null);

  // function notifyScooterAddition(scooter) {
  //   setNewScooter(scooter);
  // }
  // function resetNewScooter() {
  //   setNewScooter(null);
  // }
  return (
    <div>
      <KoltContext.Provider value={{ newScooter, setNewScooter }}>
        {/* Paspirtuku pridejimo forma */}
        <Top />
        {/* Atvaizduojami paspirtukai */}
        <Middle />
      </KoltContext.Provider>
      <Bottom />
    </div>
  );
}

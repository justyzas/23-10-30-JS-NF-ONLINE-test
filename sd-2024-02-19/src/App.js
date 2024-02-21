import "./App.css";
import Baze1 from "./components/Base1";
import Base2 from "./components/Base2";
import Base3 from "./components/Base3";
import Base4 from "./components/Base4";
import Base5 from "./components/Base5";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import Form3 from "./components/Form3";
import Form4 from "./components/Form4";
import UseEffect from "./components/UseEffect";

function App() {
	const obj = {
		objColor: "blue",
		objText1: "pirmasis objekte esantis tekstas",
		objText2: "Antrasis objekte esantis tekstas",
	};
	return (
		<div className="App">
			<Baze1 />
			<Base2
				atributas2={4}
				atributas3={true}
				atributas4={new Date()}
				atributas5={() => console.log("Anonimine funkcija")}
				atributas6={["vienas", "du", "trys"]}
				atributas7={{ name: "Justinas", age: 24 }}
				atributas8={
					class Zmogus {
						constructor(name, surname) {
							this.name = name;
							this.surname = surname;
						}
					}
				}
				atributas9={<Baze1 />}
			/>
			<Base3 mode={2} />
			<Base4
				text1="tekstas1"
				text2="tekstas2"
			/>
			<Base5
				text1="text1"
				text2="text2"
				color="orange"
				obj={obj}
			/>
			<Form1 />
			<Form1 />
			<Form2 />
			<Form3 />
			<br />
			<Form4 />
			<UseEffect />
		</div>
	);
}

export default App;

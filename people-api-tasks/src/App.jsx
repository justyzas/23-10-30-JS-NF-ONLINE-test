import { useEffect, useState, useMemo } from "react";
import PeopleList from "./PeopleList";
import { callPeopleApi } from "./api";

function App() {
	const [peopleList, setPeopleList] = useState([]);
	const [selectedGender, setSelectedGender] = useState("female");
	const [sortByName, setSortByName] = useState("original");

	useEffect(() => {
		callPeopleApi((data) => {
			setPeopleList(data.results);
		});
	}, []);
	const filteredPeopleList = useMemo(() => {
		return peopleList
			.filter((personObj) => {
				if (selectedGender === "any") return true;
				else return personObj.gender === selectedGender;
			})
			.sort((personObj1, personObject2) => {
				const comparisonValue = personObj1.name.first.localeCompare(
					personObject2.name.first
				);
				if (sortByName === "asc") return comparisonValue;
				else if (sortByName === "desc") return comparisonValue * -1;
				else return 0;
			});
	}, [peopleList, selectedGender, sortByName]);
	return (
		<div>
			<h1>Visi žmonės</h1>
			<select
				value={selectedGender}
				onChange={(e) => {
					setSelectedGender(e.target.value);
				}}
			>
				<option>male</option>
				<option>female</option>
				<option>any</option>
			</select>
			<select
				value={sortByName}
				onChange={(e) => {
					setSortByName(e.target.value);
				}}
			>
				<option value="asc">Ascending name</option>
				<option value="desc">Descending name</option>
				<option value="original">Original order</option>
			</select>
			<PeopleList people={filteredPeopleList} />
			<h1>Įsiminti žmonės</h1>
			<PeopleList people={peopleList} />
		</div>
	);
}

export default App;

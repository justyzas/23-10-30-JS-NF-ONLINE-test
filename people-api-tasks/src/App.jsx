import { useEffect, useState, useMemo } from "react";
import PeopleList from "./PeopleList";
import { callPeopleApi } from "./api";

function App() {
	const [peopleList, setPeopleList] = useState([]);
	const [selectedGender, setSelectedGender] = useState("female");
	const [selectedCountry, setSelectedCountry] = useState("All");
	const [sortByName, setSortByName] = useState("original");
	const [countryList, setCountryList] = useState([]);
	const [savedPeople, setSavedPeople] = useState(() =>
		JSON.parse(localStorage.getItem("people"))
	);

	useEffect(() => {
		callPeopleApi((data) => {
			setPeopleList(data.results);
			const allCountriesRepeating = data.results.map((person) => {
				return person.location.country;
			});
			const originalCountriesSet = new Set(allCountriesRepeating);
			console.log(originalCountriesSet);
			const countries = [...originalCountriesSet];
			setCountryList(["All", ...countries]);
		});
	}, []);

	const filteredPeopleList = useMemo(() => {
		console.log(peopleList);
		return peopleList
			.filter((personObject) => {
				if (selectedGender === "any") return true;
				else return personObject.gender === selectedGender;
			})
			.filter((personObject) => {
				if (selectedCountry === "All") return true;
				return selectedCountry === personObject.location.country;
			})
			.sort((personObject1, personObject2) => {
				const comparisonValue = personObject1.name.first.localeCompare(
					personObject2.name.first
				);
				if (sortByName === "asc") return comparisonValue;
				else if (sortByName === "desc") return comparisonValue * -1;
				else return 0;
			});
	}, [peopleList, selectedGender, sortByName, selectedCountry]);
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
			<select
				value={selectedCountry}
				onChange={(e) => {
					setSelectedCountry(e.target.value);
				}}
			>
				{countryList.map((country, index) => (
					<option key={"countryOption-" + index}>{country}</option>
				))}
			</select>
			<PeopleList
				people={filteredPeopleList}
				saveNewPerson={(newPerson) =>
					setSavedPeople((prev) => [...prev, newPerson])
				}
			/>
			<h1>Įsiminti žmonės</h1>
			<PeopleList people={savedPeople} />
		</div>
	);
}

export default App;

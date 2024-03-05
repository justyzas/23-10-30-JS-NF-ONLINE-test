import Person from "./Person";

export default function PeopleList({ people, saveNewPerson }) {
	return (
		<div className="person-list">
			{people.map((person, index) => (
				<Person
					person={person}
					key={index}
					saveNewPerson={saveNewPerson}
				/>
			))}
		</div>
	);
}

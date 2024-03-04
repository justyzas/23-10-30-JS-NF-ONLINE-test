export default function Person({ person }) {
	function getFullName({ title, first, last }) {
		return `${title} ${first} ${last}`;
	}
	return (
		<div className="person">
			<img
				src={person.picture.large}
				alt={getFullName(person.name)}
			/>
			<p>Name: {getFullName(person.name)}</p>
			<p>Gender: {person.gender}</p>
			<p>E-Mail: {person.email}</p>
			<p>Phone number: {person.phone}</p>
			<p>Country: {person.location.country}</p>
		</div>
	);
}

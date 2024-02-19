import Base2 from "./Base2";

export default function Base4({
	text1 = "Pirmasis default tekstas",
	text2 = "Antrasis default tekstas",
}) {
	return (
		<>
			<Base2 atributas1={text1} />
			<h2>{text2}</h2>
		</>
	);
}

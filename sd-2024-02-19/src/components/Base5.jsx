import Base4 from "./Base4";

export default function Base5({
	text1,
	text2,
	color = "red",
	obj: { objText1, objText2, objColor },
}) {
	return (
		<div style={{ color: objColor || color }}>
			<Base4
				text1={objText1 || text1}
				text2={objText2 || text2}
			/>
		</div>
	);
}

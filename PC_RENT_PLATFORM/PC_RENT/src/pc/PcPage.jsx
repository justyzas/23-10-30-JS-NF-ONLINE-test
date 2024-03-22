import { useParams } from "react-router-dom";
export default function PcPage() {
	const { id } = useParams();
	return (
		<div>
			<p>Kompiuteris su id: {id}</p>
		</div>
	);
}

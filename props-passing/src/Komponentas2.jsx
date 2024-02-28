export default function Komponentas2({ cash, prizoLaimetoja }) {
	return (
		<div className="bg-orange">
			<h3>Komponentas2</h3>
			<p>Prizo laimėtoja: {prizoLaimetoja}</p>
			<p>Cash: {cash}</p>
		</div>
	);
}

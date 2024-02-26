import AddScooterForm from "./AddScooter";
import Button from "./Button";

export default function Top() {
	return (
		<div className="container mx-auto bg-blue-50 min-h-[400px] p-4">
			<h2 className="text-center my-20 text-xl font-bold">
				Paspirtuko pridėjimas
			</h2>
			<AddScooterForm />
			<div className="flex justify-center mt-28 gap-4">
				<Button
					text="Rodyti laisvus"
					color="green"
					hoverColor="blue"
				/>
				<Button
					color="red"
					text="Rodyti užimtus"
				/>
			</div>
		</div>
	);
}

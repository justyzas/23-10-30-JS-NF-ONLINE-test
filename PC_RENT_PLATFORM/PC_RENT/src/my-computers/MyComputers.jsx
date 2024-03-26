export default function MyComputers() {
	return (
		<div className="container mx-auto">
			<div className="bg-slate-100 flex gap-4">
				{/* TODO: pataisyti mygtukus i selecta */}
				<button>Rikiuoti A-Z</button>
				<button>Rikiuoti Z-A</button>

				<button>Filtruoti pagal procesorių</button>
				<button>Filtruoti pagal vaizdo plokštę</button>
			</div>
			<div className="grid grid-cols-3">{/* Kompiuteriai... */}</div>
		</div>
	);
}

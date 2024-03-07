function AuthButtons() {
	return (
		<>
			<a
				href="/registration"
				className="px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded mx-2"
			>
				Register now
			</a>
			<a
				href="/login"
				className="px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded mx-2"
			>
				Log In
			</a>
		</>
	);
}

function PcPost() {
	return (
		<div className="flex justify-center items-center">
			<div className="bg-white min-h-[300px] min-w-[100px] max-w-[250px]">
				<div className="img">
					<img
						src="https://placehold.co/400x300"
						className="w-full"
					/>
				</div>
				<div className="details p-4 w-fit mx-auto">
					<a href="/pc1">
						<h3 className="title text-xl mb-2 border-b-4 border-blue-500 w-fit pr-4">
							Lorem ipsum dolor sit
						</h3>
					</a>
					<div className="text-xs">
						<div className="flex flex-wrap gap-x-4 mb-1">
							<span className="inline-block w-1/3 font-bold">
								Specifikacija:
							</span>
							<span>Specifikacijos reikšmė</span>
						</div>
						<div className="flex flex-wrap gap-x-4 mb-1">
							<span className="inline-block w-1/3 font-bold">
								Specifikacija:
							</span>
							<span>Specifikacijos reikšmė</span>
						</div>
						<div className="flex flex-wrap gap-x-4 mb-1">
							<span className="inline-block w-1/3 font-bold">
								Specifikacija:
							</span>
							<span>Specifikacijos reikšmė</span>
						</div>
						<div className="flex flex-wrap gap-x-4 mb-1">
							<span className="inline-block w-1/3 font-bold">
								Specifikacija:
							</span>
							<span>Specifikacijos reikšmė</span>
						</div>
						<div className="flex flex-wrap gap-x-4 mb-1">
							<span className="inline-block w-1/3 font-bold">
								Specifikacija:
							</span>
							<span>Specifikacijos reikšmė</span>
						</div>
						<div className="flex flex-wrap gap-x-4 mb-1">
							<span className="inline-block w-1/3 font-bold">
								Specifikacija:
							</span>
							<span>Specifikacijos reikšmė</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default function Main() {
	const isLoggedIn = false;
	return (
		<div className="h-[100vh] w-[100vw] flex justify-center items-center">
			<div className="container w-[80%] bg-slate-100 min-h-[700px] max-h-[90vh] overflow-y-scroll rounded-lg p-6">
				{!isLoggedIn && <AuthButtons />}
				{isLoggedIn && (
					<a
						href="/add-new-pc"
						className="px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded mx-2"
					>
						Pridėti nuomos skelbimą
					</a>
				)}

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
					<PcPost />
					<PcPost />
					<PcPost />
					<PcPost />
					<PcPost />
					<PcPost />
					<PcPost />
					<PcPost />
					<PcPost />
				</div>
			</div>
		</div>
	);
}

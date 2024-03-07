export default function LoginPage() {
	return (
		<div className="bg-slate-300 w-[100vw] h-[100vh] flex justify-center items-center auth-bg">
			<div className="w-4/5 min-h-[400px] max-w-[1000px] bg-blue-200 bg-opacity-80 p-4 rounded-md">
				<h1 className="text-xl font-bold">Login form</h1>
				<hr className="mb-20" />
				<form>
					<div className="mb-2">
						<label>
							<span className="w-1/5 inline-block">Username</span>
							<input
								type="text"
								placeholder="Username"
								className="outline-none border w-4/5 px-2 py-1 rounded-md"
							/>
						</label>
					</div>
					<div className="mb-2">
						<label>
							<span className="w-1/5 inline-block">Password</span>
							<input
								type="password"
								placeholder="Enter your password"
								className="outline-none border w-4/5 px-2 py-1 rounded-md"
							/>
						</label>
					</div>
					<button className="bg-indigo-600 hover:bg-indigo-700 rounded text-white px-6 py-1 mt-4">
						Log In
					</button>
				</form>
			</div>
		</div>
	);
}

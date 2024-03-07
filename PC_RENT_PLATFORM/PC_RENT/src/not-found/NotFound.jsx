export default function NotFound() {
	return (
		<div className="w-[100vw] h-[100vh] flex justify-center items-center not-found-bg">
			<div className="max-w-[700px] text-center bg-black bg-opacity-60 text-white rounded-lg p-6 font-trebuchet">
				<h1 className="text-5xl font-bold mb-4">404</h1>
				<h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
				<p className="mb-4 text-justify">
					We&apos;re sorry, but the page you were looking for doesn&apos;t seem
					to exist. It might have been moved, deleted, or possibly never existed
					at all. Don&apos;t worry, though! This often happens and you&apos;re
					not at fault here.
				</p>

				<p className="text-justify">
					Here are a few options to help you find what you&apos;re looking for:
				</p>
				<ul className="list-disc list-inside mb-4 text-justify">
					<li>Double-check the URL for any typos or errors.</li>
					<li>
						Use the search function at the top of the page to find related
						content.
					</li>
					<li>
						Return to the homepage and navigate from there to find your desired
						section.
					</li>
				</ul>
				<p className="text-justify">
					If you believe this page should exist or if you continue to encounter
					this message, please contact our support team for assistance.
					We&apos;re here to help you navigate and find exactly what you need.
				</p>
				<a
					href="/"
					className="bg-purple-600 hover:bg-purple-700 px-4 py-1 rounded-lg text-xl"
				>
					Go Home
				</a>
			</div>
		</div>
	);
}

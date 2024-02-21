import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./AboutUs.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<App
				notifyOnDestroy={() => {
					console.log("destroy!!");
				}}
			/>
		),
	},
	{
		path: "/about-us",
		element: <AboutUs />,
	},
]);
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

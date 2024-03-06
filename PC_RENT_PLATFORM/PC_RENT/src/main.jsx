import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegistrationWindow from "./Registration/Register";

const router = createBrowserRouter([
	{
		path: "/",
		element: <div className="">Pagrinidinis puslapis</div>,
	},
	{
		path: "/registration",
		element: <RegistrationWindow />,
	},
	{
		path: "/login",
		element: <div>Logino puslapis</div>,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

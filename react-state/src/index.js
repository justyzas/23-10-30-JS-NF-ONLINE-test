import React from "react";
import ReactDOM from "react-dom/client";
import Section from "./components/Section";
import "./index.css";
import FormSection from "./components/FormSection";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<FormSection />
		<Section />
	</React.StrictMode>
);

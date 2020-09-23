import React from "react";
import Tabs from "./components/Tabs";
import "./App.css";

function App() {
	return (
		<div className="content">
			<Tabs>
				<div label="My Details">Nazhand Zareei!</div>
				<div label="My Order">List of My Order!</div>
				<div label="My Returns">List of My Return!</div>
			</Tabs>
		</div>
	);
}

export default App;

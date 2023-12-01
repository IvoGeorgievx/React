import { Routes, Route } from "react-router-dom";

import Background from "./components/Background/Background";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
	return (
		<>
			<Header />
			<Background />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</>
	);
}

export default App;

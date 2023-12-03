import { Routes, Route } from "react-router-dom";

import Background from "./components/Background/Background";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import UpcomingMovies from "./components/UpcomingMovies/UpcomingMovies";

function App() {
	return (
		<>
			<Header />
			<Background />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/upcoming-movies" element={<UpcomingMovies />} />
			</Routes>
		</>
	);
}

export default App;

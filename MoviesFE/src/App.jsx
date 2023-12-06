import { Routes, Route } from "react-router-dom";

import Background from "./components/Background/Background";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import UpcomingMovies from "./components/UpcomingMovies/UpcomingMovies";
import Register from "./components/Register/Register";
import SearchMovies from "./components/SearchMovies/SearchMovies";

function App() {
	return (
		<>
			<Header />
			<Background />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/upcoming-movies" element={<UpcomingMovies />} />
				<Route path="/register" element={<Register />} />
				<Route path="/search-movie" element={<SearchMovies />} />
			</Routes>
		</>
	);
}

export default App;

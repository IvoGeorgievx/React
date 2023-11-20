import Navigation from "./components/Navigation/Navigation";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Movies from "./components/Movies";
import Register from "./components/Register/Register";

export default function App() {
	return (
		<>
			<Navigation />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contacts" element={<Contacts />} />
				<Route path="/movies" element={<Movies />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</>
	);
}

import Navigation from "./components/Navigation/Navigation";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Movies from "./components/Movies";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import { AuthContext } from "./contexts/authContext";
import { useState } from "react";
import login from "./services/authService";
import Path from "./paths";

export default function App() {
	const [auth, setAuth] = useState({});
	const navigate = useNavigate();
	const loginHandler = (formState) => {
		console.log(formState);
		login(formState.username, formState.password);
		navigate(Path.Home);
		setAuth(formState);
	};

	const values = {
		username: auth.username,
	};
	return (
		<>
			<AuthContext.Provider value={values}>
				{/* {/*  Allows certain parts of the components tree to have access to the Context. His children have access to the context. This prevents the prop drilling.} */}
				{/* useContext(AuthContext) is used in the component where I want to use the context */}
				<Navigation />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contacts" element={<Contacts />} />
					<Route path="/movies" element={<Movies />} />
					<Route path="/register" element={<Register />} />
					<Route
						path="/login"
						element={<Login loginHandler={loginHandler} />}
					/>
				</Routes>
			</AuthContext.Provider>
		</>
	);
}

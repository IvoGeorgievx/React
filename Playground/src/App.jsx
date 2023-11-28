import Navigation from "./components/Navigation/Navigation";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Movies from "./components/Movies";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import { AuthContext } from "./contexts/authContext";
import { useEffect, useState } from "react";
import login from "./services/authService";
import Path from "./paths";
import Logout from "./components/Logout/Logout";
import MyTickets from "./components/MyTickets/MyTickets";

export default function App() {
	let storedToken = localStorage.getItem("token");
	console.log(storedToken);
	const [auth, setAuth] = useState({});
	const navigate = useNavigate();

	useEffect(() => {
		if (storedToken) {
			setAuth({ isAuthenticated: true });
		}
	}, []);
	const loginHandler = async (formState) => {
		try {
			const [token, user] = await login(formState.username, formState.password);
			console.log(token, user);

			if (token) {
				localStorage.setItem("token", token);
				navigate(Path.Home);
				setAuth((prevState) => ({
					...prevState,
					isAuthenticated: true,
					username: formState.username,
				}));

				console.log(formState);
			}
		} catch (error) {
			console.error("Login handler error:", error);
		}
	};

	const values = {
		username: auth.username,
		setAuth: setAuth,
		auth: auth,
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
					<Route path="/logout" element={<Logout />} />
					<Route path="/my-tickets" element={<MyTickets />} />
				</Routes>
			</AuthContext.Provider>
		</>
	);
}

import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import Path from "../../paths";

export default function Logout() {
	const { setAuth } = useContext(AuthContext);
	const navigate = useNavigate();
	const logoutHandler = () => {
		localStorage.removeItem("token");
		navigate(Path.Home);
		setAuth("");
	};

	return (
		<>
			<p onClick={logoutHandler}>Logout</p>
		</>
	);
}

import { Link } from "react-router-dom";
import styles from "./NavAuth.module.css";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import Logout from "../Logout/Logout";

export default function NavAuth() {
	const { username } = useContext(AuthContext);
	return (
		<>
			<ul className={styles["auth-nav"]}>
				{!username ? (
					<>
						<li>
							<Link to="/login">Login</Link>
						</li>
						<li>
							<Link to="/register">Register</Link>
						</li>
					</>
				) : (
					<>
						<li>
							<Link to="#">Hello, {username}</Link>
						</li>
						<li>
							<Link to="/logout">
								<Logout />
							</Link>
						</li>
					</>
				)}
			</ul>
		</>
	);
}

import { Link } from "react-router-dom";
import styles from "./NavAuth.module.css";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import Logout from "../Logout/Logout";

export default function NavAuth() {
	const { auth } = useContext(AuthContext);
	return (
		<>
			<ul className={styles["auth-nav"]}>
				{!auth.username ? (
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
							<Link to="#">Hello, {auth.username}</Link>
						</li>
						<li>
							<Link to="/my-tickets">My Tickets</Link>
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

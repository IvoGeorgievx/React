import { Link } from "react-router-dom";
import styles from "./NavAuth.module.css";

export default function NavAuth({ isLoggedIn }) {
	return (
		<>
			<ul className={styles["auth-nav"]}>
				{isLoggedIn ? (
					<>
						<li>
							<a href="/logout">Logout</a>
						</li>
					</>
				) : (
					<>
						<li>
							<Link to="/login">Login</Link>
						</li>
						<li>
							<Link to="/register">Register</Link>
						</li>
					</>
				)}
			</ul>
		</>
	);
}

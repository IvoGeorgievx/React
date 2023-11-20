import { Link } from "react-router-dom";
import styles from "./NavAuth.module.css";

export default function NavAuth() {
	return (
		<>
			<ul className={styles["auth-nav"]}>
				<li>
					<a href="/login">Login</a>
				</li>
				<li>
					<Link to="/register">Register</Link>
				</li>
			</ul>
		</>
	);
}

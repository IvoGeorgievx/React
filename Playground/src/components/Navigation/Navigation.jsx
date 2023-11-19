import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import NavAuth from "./NavAuth";

export default function Navigation() {
	return (
		<>
			<nav>
				<ul className={styles["main-nav"]}>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/contacts">Contacts</Link>
					</li>
				</ul>
				<NavAuth />
			</nav>
		</>
	);
}

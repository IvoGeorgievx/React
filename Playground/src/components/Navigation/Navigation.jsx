import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import NavAuth from "./NavAuth";
import { useState } from "react";
import * as authService from "../services/authService";

export default function Navigation() {
	const [auth, setAuth] = useState({});

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
					<li>
						<Link to="/movies">Movies</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}

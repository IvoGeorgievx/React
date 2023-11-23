import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import NavAuth from "./NavAuth";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/authContext";

export default function Navigation() {
	const { username } = useContext(AuthContext);

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
					{!username ? <NavAuth /> : <li>{username}</li>}
				</ul>
			</nav>
		</>
	);
}

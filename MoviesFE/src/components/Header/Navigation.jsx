import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

export default function Navigation() {
	return (
		<nav>
			<ul>
				<li>
					{" "}
					<Link to="/">Home</Link>
				</li>
				<li>
					{" "}
					<Link to="/upcoming-movies">Upcoming Movies</Link>
				</li>
				<li>
					{" "}
					<Link to="/search-movie">Search for a Movie</Link>
				</li>
				<li>
					{" "}
					<Link to="/">Login</Link>
				</li>
				<li>
					{" "}
					<Link to="/register">Register</Link>
				</li>
			</ul>
		</nav>
	);
}

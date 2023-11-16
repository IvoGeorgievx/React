import { Link } from "react-router-dom";
// replaces the anchor tags with Link tags. It is a component that wraps anchor tags and provides the same functionality as anchor tags, but it does not reload the page when clicked.

const Navigation = () => {
	return (
		<nav>
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>
			<Link to="/contact">Contact</Link>
		</nav>
	);
};

export default Navigation;

import { useState, useEffect, useContext } from "react";
import Spinner from "react-bootstrap/Spinner";
import { ALL_MOVIES_URL } from "../api/urls";
import { AuthContext } from "../contexts/authContext";
import { purchaseTicket } from "../services/purchaseService";
import MainButton from "./Reusables/MainButton";

export default function Movies() {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(false);
	const { username, auth } = useContext(AuthContext);
	useEffect(() => {
		fetchMovies();
	}, []);

	const fetchMovies = () => {
		fetch(ALL_MOVIES_URL)
			.then((res) => res.json())
			.then((data) => {
				setMovies(data);
			});
	};

	const purchaseHandler = (movieId) => {
		setLoading(true);
		purchaseTicket(movieId).then(() => setLoading(false));
	};

	return (
		<>
			<h1>Here to fetch the movies from the DB</h1>
			<ul>
				{movies.map((movie) => (
					<li key={movie.id} onClick={() => purchaseHandler(movie.id)}>
						{movie.name} <MainButton type="submit" name="Purchase Ticket" />
					</li>
				))}
				{username ? <li>{username}</li> : <li>nothing bruv</li>}
			</ul>
			{loading && <Spinner animation="border" />}
		</>
	);
}

import { useState, useEffect, useContext } from "react";
import Spinner from "react-bootstrap/Spinner";
import { ALL_MOVIES_URL } from "../api/urls";
import { AuthContext } from "../contexts/authContext";
import { purchaseTicket } from "../services/purchaseService";
import DefaultCard from "./Reusables/DefaultCard";
import MainButton from "./Reusables/MainButton";
import TestModal from "./Reusables/TestModal";

export default function Movies() {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const { username, auth } = useContext(AuthContext);
	useEffect(() => {
		fetchMovies();
		console.log(auth);
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
		purchaseTicket(movieId)
			.then(() => {
				// Successfully purchased ticket
				setSuccess(true);
			})
			.catch((error) => {
				console.error("Error purchasing ticket:", error);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<>
			<h1>Here to fetch the movies from the DB</h1>
			{/* <ul>
				{movies.map((movie) => (
					<li key={movie.id} onClick={() => purchaseHandler(movie.id)}>
						{movie.name} <MainButton type="submit" name="Purchase Ticket" />
					</li>
				))}
			</ul> */}
			{movies.map((movie) => (
				<li key={movie.id}>
					<DefaultCard movie={movie} onClick={purchaseHandler} />
					<MainButton
						type="submit"
						name="Purchase Ticket"
						onClick={purchaseHandler}
						movieId={movie.id}
					/>
				</li>
			))}
			{loading && <Spinner animation="border" />}
			{success && <TestModal />}
		</>
	);
}

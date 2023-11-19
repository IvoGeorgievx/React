import { useState } from "react";
import { ALL_MOVIES_URL } from "../api/urls";

export default function Movies() {
	const [movies, setMovies] = useState([]);

	const movieHandler = () => {
		fetch(ALL_MOVIES_URL)
			.then((res) => res.json())
			.then((data) => {
				setMovies(data);
			});
		console.log(movies);
	};

	return (
		<>
			<h1>Here to fetch the movies from the DB</h1>
			<input type="submit" value="Fetch Movies" onClick={movieHandler} />
		</>
	);
}

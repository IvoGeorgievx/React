import { useState, useEffect } from "react";
import { ALL_MOVIES_URL } from "../api/urls";

export default function Movies() {
	const [movies, setMovies] = useState([]);

	const movieHandler = () => {
		fetchMovies();
	};
	const fetchMovies = () => {
		fetch(ALL_MOVIES_URL)
			.then((res) => res.json())
			.then((data) => {
				setMovies(data);
			});
		console.log(movies);
	};

	// useEffect(() => {
	// 	fetchMovies();
	// }, []);

	return (
		<>
			<h1>Here to fetch the movies from the DB</h1>
			<input type="submit" value="Fetch Movies" onClick={movieHandler} />
			<ul>
				{movies.map((movie) => (
					<li key={movie.id}>{movie.name}</li>
				))}
			</ul>
		</>
	);
}

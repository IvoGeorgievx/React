import { useState, useEffect } from "react";
import { ALL_MOVIES_URL } from "../api/urls";

export default function Movies() {
	const [movies, setMovies] = useState([]);
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

	return (
		<>
			<h1>Here to fetch the movies from the DB</h1>
			<ul>
				{movies.map((movie) => (
					<li key={movie.id}>{movie.name}</li>
				))}
			</ul>
		</>
	);
}

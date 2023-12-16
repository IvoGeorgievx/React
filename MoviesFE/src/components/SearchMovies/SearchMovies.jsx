import React, { useState } from "react";
import { Input } from "antd";
const { Search } = Input;

import { getMovieDetails } from "../../services/movieService";
import styles from "./SearchMovies.module.css";

export default function SearchMovies() {
	const [movie, setMovie] = useState({});
	const [query, setQuery] = useState("");

	const submitHandler = async () => {
		if (query.trim() !== "") {
			setMovie({});
			const movieData = await getMovieDetails(query);
			setMovie(movieData);
		}
	};

	const changeHandler = (e) => {
		setQuery(e.target.value);
	};
	console.log(movie);
	return (
		<div className={styles["search-wrapper"]}>
			<div className={styles["search-movie-bar"]}>
				<Search
					placeholder="Enter movie name..."
					enterButton="Search"
					size="large"
					onSearch={submitHandler}
					value={query}
					onChange={(e) => changeHandler(e)}
					name="query"
					disabled={false}
				/>
			</div>
			{movie && <div>{movie.status}</div>}
		</div>
	);
}

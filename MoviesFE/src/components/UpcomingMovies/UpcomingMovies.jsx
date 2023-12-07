import { useEffect, useState } from "react";

import styles from "./UpcomingMovies.module.css";
import { getUpcomingMovies } from "../../services/movieService";
import DefaultCard from "../Reusables/DefaultCard";
import LoadingSpinner from "../Reusables/LoadingSpinner";

export default function UpcomingMovies() {
	const [upcomingMovies, setUpcomingMovies] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const fetchUpcomingMovies = async () => {
			const currentUpcomingMovies = await getUpcomingMovies();
			setUpcomingMovies(currentUpcomingMovies);
			setLoading(false);
		};
		fetchUpcomingMovies();
	}, []);

	return (
		<>
			<ul className={styles["movie-list"]}>
				{loading ? (
					<LoadingSpinner />
				) : (
					upcomingMovies.map((movie) => (
						<li key={movie.id}>
							<DefaultCard
								hoverable={true}
								title={movie.original_title}
								description={movie.overview}
								releaseDate={movie.release_date}
								imgUrl={movie.poster_path}
							/>
						</li>
					))
				)}
			</ul>
		</>
	);
}

// https://image.tmdb.org/t/p/original

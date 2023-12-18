import styles from "./MovieInfo.module.css";

export default function MovieInfo({ movie }) {
	return (
		<div>
			<h2 className={styles["heading-info"]}>{movie.id}</h2>
			{/* <p>Genres: {movie.genres.map((genre) => genre.name).join(", ")}</p> */}
			<p>Tagline: {movie.tagline}</p>
			<p>
				Production Companies:{" "}
				{/* {movie.production_companies.map((company) => company.name).join(", ")} */}
			</p>
			<p>
				Homepage: <a href={movie.homepage}>{movie.homepage}</a>
			</p>
			<p>Status: {movie.status}</p>
			<p>Budget: {movie.budget}</p>
			<p>Release Date: {movie.release_date}</p>
			<p>Overview: {movie.overview}</p>
			<p>Revenue: {movie.revenue}</p>
		</div>
	);
}

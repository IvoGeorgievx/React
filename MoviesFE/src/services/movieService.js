import { UPCOMING_MOVIES_URL, SEARCH_MOVIE_URL } from "../api/urls";

export async function getUpcomingMovies() {
	const result = await fetch(UPCOMING_MOVIES_URL);
	const data = await result.json();
	return data.results;
}

export async function getMovieDetails(movieId) {
	const result = await fetch(`${SEARCH_MOVIE_URL}/${movieId}`);
	const data = await result.json();
	return data;
}

import { UPCOMING_MOVIES_URL } from "../api/urls";

export async function getUpcomingMovies() {
	const result = await fetch(UPCOMING_MOVIES_URL);
	const data = await result.json();
	return data.results;
}

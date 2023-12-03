import { UPCOMING_MOVIES_URL } from "../api/urls";

// export function getUpcomingMovies() {
// 	fetch(UPCOMING_MOVIES_URL)
// 		.then((result) => result.json())
// 		.then((data) => {
// 			return data.results;
// 		});
// }

export async function getUpcomingMovies() {
	const result = await fetch(UPCOMING_MOVIES_URL);
	const data = await result.json();
	return data.results;
}

import { PURCHASE_TICKET_URL } from "../api/urls";

export default function purchaseTicket(movieId) {
	const token = localStorage.getItem("token");
	const result = fetch(PURCHASE_TICKET_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify({ movie_id: movieId }),
	}).then((result) => result.json());

	return result;
}

import { PURCHASE_TICKET_URL, ALL_USER_TICKETS_URL } from "../api/urls";

export function purchaseTicket(movieId) {
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

export function getAllTickets() {
	const token = localStorage.getItem("token");
	const data = fetch(ALL_USER_TICKETS_URL, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
		.then((result) => result.json())
		.then((data) => console.log(data));

	return data;
}

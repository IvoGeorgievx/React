import { LOGIN_URL } from "../api/urls";

export default function login(username, password) {
	const body = JSON.stringify({ username: username, password: password });
	const result = fetch(LOGIN_URL, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: body,
	})
		.then(async (response) => {
			if (!response.ok) {
				if (response.status === 401) {
					throw new Error("Unauthorized: Invalid credentials");
				} else {
					throw new Error(`Login failed with status: ${response.status}`);
				}
			}
			return response.json();
		})
		.catch((error) => {
			console.log(error);
			throw error; // Re-throw the error to be caught in the loginHandler
		});
}

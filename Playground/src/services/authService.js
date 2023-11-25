import { LOGIN_URL } from "../api/urls";

export default function login(username, password) {
	const body = JSON.stringify({ username: username, password: password });
	const result = fetch(LOGIN_URL, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: body,
	})
		.then((response) => response.json())
		.then((data) => console.log(data))
		.catch((error) => {
			console.log(error);
		});
}

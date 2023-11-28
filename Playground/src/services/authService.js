import { LOGIN_URL } from "../api/urls";

export default async function login(username, password) {
	try {
		const body = JSON.stringify({ username: username, password: password });
		const response = await fetch(LOGIN_URL, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: body,
		});

		if (response.status === 200) {
			const data = await response.json();
			return [data.token, data.user];
		} else {
			console.log("Login failed. Status:", response.status);
			return null;
		}
	} catch (error) {
		return null; // or throw an error
	}
}

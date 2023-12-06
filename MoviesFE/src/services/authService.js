import { REGISTER_URL } from "../api/urls";

export async function register(body) {
	try {
		const response = await fetch(REGISTER_URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: body,
		});
		return response;
	} catch (error) {
		return response;
	}
}

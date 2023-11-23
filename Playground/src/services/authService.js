import LOGIN_URL from "../api/urls";

export const login = (username, password) => {
	const body = JSON.stringify({ username: username, password: password });
	const result = fetch(LOGIN_URL, { method: "POST", body: body })
		.then((response) => response.json())
		.then((data) => console.log(data));
};

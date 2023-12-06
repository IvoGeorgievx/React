export function usernameValidator(username) {
	if (username.length < 5) {
		return "Username must be atleast 5 characters.";
	}
	return "";
}

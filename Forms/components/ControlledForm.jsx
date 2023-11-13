import { useState } from "react";

export default function ControlledForm() {
	const [username, setUsername] = useState("");

	const usernameChangeHandler = (e) => {
		setUsername(e.target.value);
	};
	return (
		<>
			<h1>Controlled Form</h1>

			<form>
				<div>
					<label htmlFor="username">Username</label>
					<input
						type="text"
						id="username"
						name="username"
						value={username}
						onChange={usernameChangeHandler}
					/>
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input type="password" id="password" name="password" />
				</div>
				<div>
					<input type="submit" value="Register" />
				</div>
			</form>
		</>
	);
}

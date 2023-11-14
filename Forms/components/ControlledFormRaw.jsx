import { useState } from "react";

export default function ControlledForm() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const usernameChangeHandler = (e) => {
		setUsername(e.target.value);
	};

	const passwordChangeHandler = (e) => {
		setPassword(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		console.log(username, password);
	};

	return (
		<>
			<h1>Controlled Form</h1>

			<form onSubmit={submitHandler}>
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
					<input
						type="password"
						id="password"
						name="password"
						value={password}
						onChange={passwordChangeHandler}
					/>
				</div>
				<div>
					<input type="submit" value="Register" />
				</div>
			</form>
		</>
	);
}

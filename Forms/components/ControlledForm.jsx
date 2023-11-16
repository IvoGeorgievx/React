import { useState } from "react";
import styles from "./ControlledForm.module.css";

export default function ControlledFormRaw() {
	const [formState, setFormState] = useState({
		username: "",
		password: "",
	});

	const [usernameError, setUsernameError] = useState("");

	const changeHandler = (e) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};

	const submitHandler = (e) => {
		e.preventDefault();
		console.log(formState.username, formState.password);
	};

	const validateUsername = () => {
		console.log(formState.username.length);
		if (formState.username.length < 6) {
			setUsernameError("Username must be at least 6 characters");
		} else {
			setUsernameError("");
		}
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
						value={formState.username}
						onChange={changeHandler}
						onBlur={validateUsername}
					/>
					{usernameError && <p className={styles.error}>{usernameError}</p>}
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						name="password"
						value={formState.password}
						onChange={changeHandler}
					/>
				</div>
				<div>
					<input type="submit" value="Register" />
				</div>
			</form>
		</>
	);
}

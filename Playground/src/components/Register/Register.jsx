import { useState } from "react";
import styles from "./Register.module.css";
import { REGISTER_URL } from "../../api/urls";

export default function Register() {
	const [formState, setFormState] = useState({
		username: "",
		password: "",
		first_name: "",
		last_name: "",
		email: "",
	});
	const [usernameError, setUsernameError] = useState("");

	const checkUsernameValidity = () => {
		if (formState.username.length < 5) {
			setUsernameError("Username must be atleast 5 characters long.");
		} else {
			setUsernameError("");
		}
	};

	const registerHandler = async (e) => {
		e.preventDefault();
		const body = JSON.stringify(formState);

		try {
			const response = await fetch(REGISTER_URL, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: body,
			});
		} catch (error) {
			console.error("Error during registration:", error);
		}
	};

	const changeHandler = (e) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
		// console.log(e.target.name);
		// console.log(e.target.value);
	};

	return (
		<>
			<form className={styles["reg-form"]} onSubmit={registerHandler}>
				<label htmlFor="username">Username</label>
				<input
					type="text"
					id="username"
					name="username"
					value={formState.username}
					onChange={changeHandler}
					onBlur={checkUsernameValidity}
				/>
				{usernameError && <p className={styles.error}>{usernameError}</p>}
				<label htmlFor="password">Password</label>
				<input
					type="password"
					id="password"
					name="password"
					value={formState.password}
					onChange={changeHandler}
				/>
				<label htmlFor="first_name">First Name</label>
				<input
					type="text"
					name="first_name"
					id="first_name"
					value={formState["first_name"]}
					onChange={changeHandler}
				/>
				<label htmlFor="last_name">Last Name</label>
				<input
					type="text"
					name="last_name"
					id="last_name"
					value={formState["last_name"]}
					onChange={changeHandler}
				/>
				<label htmlFor="email">Email</label>
				<input
					type="email"
					name="email"
					id="email"
					value={formState.email}
					onChange={changeHandler}
				/>
				<input type="submit" value="Register" />
			</form>
		</>
	);
}

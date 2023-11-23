import { useState } from "react";
import styles from "./Login.module.css";
import MainButton from "../Reusables/MainButton";
import { LOGIN_URL } from "../../api/urls";
import * as authService from "../services/authService";

export default function Login() {
	const [formState, setFormState] = useState({
		username: "",
		password: "",
	});

	const [auth, setAuth] = useState({});
	// CONTINUE

	const loginHandler = (e) => {
		e.preventDefault();
		authService.login(formState.username, formState.password);
		// fetch(LOGIN_URL, {
		// 	method: "POST",
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 	},
		// 	body: JSON.stringify(formState),
		// })
		// 	.then((response) => response.json())
		// 	.then((data) => {
		// 		console.log(data);
		// 	})
		// 	.catch((error) => console.log(error));
	};

	const loginChangeHandler = (e) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<>
			<form className={styles["form-grp"]} onSubmit={loginHandler}>
				<label htmlFor="username">Username</label>
				<input
					type="text"
					id="username"
					name="username"
					value={formState.username}
					onChange={loginChangeHandler}
				/>
				<label htmlFor="password">Password</label>
				<input
					type="password"
					id="password"
					name="password"
					value={formState.password}
					onChange={loginChangeHandler}
				/>
				<MainButton type="submit" name="Login" />
			</form>
		</>
	);
}

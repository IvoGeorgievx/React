import { useState } from "react";
import styles from "./Login.module.css";
import MainButton from "../Reusables/MainButton";

export default function Login(props) {
	const [formState, setFormState] = useState({
		username: "",
		password: "",
		isAuthenticated: false,
	});

	const loginChangeHandler = (e) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		props.loginHandler(formState);
	};

	return (
		<>
			<form className={styles["form-grp"]} onSubmit={handleSubmit}>
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

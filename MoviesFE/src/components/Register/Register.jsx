import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { usernameValidator } from "../../utils/validators";
import { register } from "../../services/authService";
import styles from "./Register.module.css";
import Path from "../../utils/paths";

export default function Register() {
	const navigate = useNavigate();

	const [formState, setFormState] = useState({
		username: "",
		password: "",
		first_name: "",
		last_name: "",
		email: "",
	});

	const [usernameError, setUsernameError] = useState("");

	const changeHandler = (e) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};

	const checkUsernameValidity = () => {
		setUsernameError(usernameValidator(formState.username));
	};

	const submitHandler = async (e) => {
		e.preventDefault();
		const body = JSON.stringify(formState);
		register(body);
		navigate(Path.Home);
	};

	return (
		<div className={styles["reg-div"]}>
			<form className={styles["reg-form"]} onSubmit={submitHandler}>
				<label htmlFor="username">Username</label>
				<input
					type="text"
					id="username"
					name="username"
					value={formState.username}
					onChange={changeHandler}
					onBlur={checkUsernameValidity}
				/>
				<label htmlFor="password">Password</label>
				<input
					type="password"
					name="password"
					id="password"
					value={formState.password}
					onChange={changeHandler}
				/>
				<label htmlFor="email">Email</label>
				<input
					type="email"
					id="email"
					value={formState.email}
					name="email"
					onChange={changeHandler}
				/>
				<label htmlFor="first_name">First Name</label>
				<input
					type="text"
					id="first_name"
					value={formState.first_name}
					name="first_name"
					onChange={changeHandler}
				/>
				<label htmlFor="last_name">Last Name</label>
				<input
					type="text"
					id="last-name"
					value={formState.last_name}
					name="last_name"
					onChange={changeHandler}
				/>
				<input type="submit" value="Register" />
			</form>
		</div>
	);
}

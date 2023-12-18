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

	const [fieldErrors, setFieldErrors] = useState({
		username: "",
		password: "",
		first_name: "",
		last_name: "",
		email: "",
	});

	const changeHandler = (e) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
		// setFieldErrors({
		// 	...fieldErrors,
		// 	[e.target.name]: "",
		// });
	};

	const checkUsernameValidity = () => {
		setUsernameError(usernameValidator(formState.username));
	};

	const submitHandler = async (e) => {
		e.preventDefault();
		const body = JSON.stringify(formState);
		const response = await register(body);
		const data = await response.json();
		if (response.status === 400) {
			setFieldErrors({
				username: data.message.username ? data.message.username.join(", ") : "",
				password: data.message.password ? data.message.password.join(", ") : "",
				first_name: data.message.first_name
					? data.message.first_name.join(", ")
					: "",
				last_name: data.message.last_name
					? data.message.last_name.join(", ")
					: "",
				email: data.message.email ? data.message.email.join(", ") : "",
			});
		} else {
			setFieldErrors({
				username: "",
				password: "",
				first_name: "",
				last_name: "",
				email: "",
			});

			navigate(Path.Home);
		}
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
				{fieldErrors.email && (
					<p className={styles["error-fields"]}>{fieldErrors.email}</p>
				)}
				<label htmlFor="first_name">First Name</label>
				<input
					type="text"
					id="first_name"
					value={formState.first_name}
					name="first_name"
					onChange={changeHandler}
				/>
				{fieldErrors.first_name && (
					<p className={styles["error-fields"]}>{fieldErrors.first_name}</p>
				)}
				<label htmlFor="last_name">Last Name</label>
				<input
					type="text"
					id="last-name"
					value={formState.last_name}
					name="last_name"
					onChange={changeHandler}
				/>
				{fieldErrors.last_name && (
					<p className={styles["error-fields"]}>{fieldErrors.last_name}</p>
				)}
				<input type="submit" value="Register" />
			</form>
		</div>
	);
}

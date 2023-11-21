import { useState } from "react";
import styles from "./Login.module.css";
import MainButton from "../Reusables/MainButton";

export default function Login() {
	const [formState, setFormState] = useState({
		username: "",
		password: "",
	});

	const loginHandler = () => {
		console.log("works");
	};
	return (
		<>
			<form className={styles["form-grp"]} onSubmit={loginHandler}>
				<label htmlFor="username">Username</label>
				<input type="text" id="username" name="username" />
				<label htmlFor="password">Password</label>
				<input type="password" id="password" name="password" />
				<MainButton type="submit" name="Login" />
			</form>
		</>
	);
}

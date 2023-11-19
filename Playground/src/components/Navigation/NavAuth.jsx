import styles from "./NavAuth.module.css";

export default function NavAuth() {
	return (
		<>
			<ul className={styles["auth-nav"]}>
				<li>
					<a href="/login">Login</a>
				</li>
				<li>
					<a href="/register">Register</a>
				</li>
			</ul>
		</>
	);
}

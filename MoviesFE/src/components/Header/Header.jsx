import styles from "./Header.module.css";
import Navigation from "./Navigation";

export default function Header() {
	return (
		<>
			<div className={styles["nav-logo"]}>
				<img className={styles["logo-img"]} src="/images/logo.jpg" alt="logo" />
				<Navigation />
			</div>
		</>
	);
}

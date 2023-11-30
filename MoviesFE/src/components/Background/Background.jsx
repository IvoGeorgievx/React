import styles from "./Background.module.css";

export default function Background() {
	return (
		<div className={styles["background"]}>
			<img src="/images/background.jpg" alt="background img" />
		</div>
	);
}

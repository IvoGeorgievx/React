import styles from "./Home.module.css";

export default function Home() {
	return (
		<div className={styles["home-wrapper"]}>
			<div>
				<h1 className={styles["main-home-heading"]}>Where Movies Happen.</h1>
			</div>
			<div className={styles["home-wrapper-img"]}>
				<img
					className={styles["posters-many"]}
					src="/images/home-pic.jpg"
					alt="movie"
				/>
				<img
					className={styles["poster-gladiator"]}
					src="/images/gladiator.png"
					alt="movie"
				/>
				{/* <img
					className={styles["poster-rocky"]}
					src="/images/rocky.webp"
					alt="movie"
				/> */}
				<img
					className={styles["poster-interstellar"]}
					src="/images/interstellar.jpg"
					alt="movie"
				/>
			</div>
		</div>
	);
}

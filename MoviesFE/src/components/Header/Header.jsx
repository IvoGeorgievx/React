import { useState } from "react";

import { RightSquareOutlined, LeftSquareOutlined } from "@ant-design/icons";

import styles from "./Header.module.css";
import Navigation from "./Navigation";

export default function Header() {
	const [shown, setShown] = useState(false);
	const showHandler = () => {
		setShown(!shown);
	};

	return (
		<>
			<div className={styles["nav-logo"]}>
				<img className={styles["logo-img"]} src="/images/logo.jpg" alt="logo" />
				{shown ? (
					<>
						<LeftSquareOutlined
							style={{ fontSize: "25px", color: "white" }}
							onClick={showHandler}
						/>
					</>
				) : (
					<RightSquareOutlined
						style={{ fontSize: "25px", color: "white" }}
						onClick={showHandler}
					/>
				)}
				<Navigation />
			</div>
		</>
	);
}

import Button from "react-bootstrap/Button";

export default function MainButton(props) {
	const handleClick = () => {
		props.onClick(props.movieId);
	};
	return (
		<>
			<Button variant="primary" type={props.type} onClick={handleClick}>
				{props.name}
			</Button>{" "}
		</>
	);
}

import Button from "react-bootstrap/Button";

export default function MainButton(props) {
	return (
		<>
			<Button variant="primary" type={props.type}>
				{props.name}
			</Button>{" "}
		</>
	);
}

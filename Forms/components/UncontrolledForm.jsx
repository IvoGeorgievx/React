export default function UncontrolledForm() {
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(event.currentTarget);
		const formData = new FormData(event.currentTarget);

		console.log(formData.get("username"));
		console.log(formData.get("password"));
	};
	return (
		<>
			<h1>Uncontrolled Form</h1>

			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="username">Username</label>
					<input type="text" id="username" name="username" />
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input type="password" id="password" name="password" />
				</div>
				<div>
					<input type="submit" value="Register" />
				</div>
			</form>
		</>
	);
}

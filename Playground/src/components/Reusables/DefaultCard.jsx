import React from "react";
import { Card, Space } from "antd";

export default function DefaultCard(movie) {
	return (
		<Space direction="vertical" size={16}>
			<Card
				title={movie.movie.name}
				style={{
					width: 300,
				}}
			>
				<p>{movie.ticket_price}</p>
				<p>Movie Rating: {movie.movie.rating}</p>
				<p>Description: {movie.movie.desciption}</p>
			</Card>
		</Space>
	);
}

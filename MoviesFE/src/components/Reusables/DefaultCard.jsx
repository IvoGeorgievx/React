import React from "react";
import { Card } from "antd";
const { Meta } = Card;

export default function DefaultCard(props) {
	return (
		<Card
			hoverable
			style={{
				width: 420,
			}}
			cover={
				<img
					alt="moviepic"
					src={`https://image.tmdb.org/t/p/original${props.imgUrl}`}
				/>
			}
		>
			<Meta title={props.title} description={props.description} />
		</Card>
	);
}
